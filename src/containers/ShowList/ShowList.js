import React, {Component } from 'react';
import TopMenu from '../../components/TopMenu/TopMenu'
import Modal from '../../components/Modal/Modal';
import ProductWithCheckbox from '../../components/ProductWithCheckbox/ProductWithCheckbox';
import { fbDB } from '../../firebase';

import style from './ShowList.module.css';

class ShowList extends Component {
    state = { 
        categories: { 'Pobieranie danych': { products: { 'proszę_czekać...': 1 } } },
        fontSize: 16,
        undo: [],
        redo: [],
        newCategoryName: "",
        newProductName: "",
        newProductToBuy: 1,
        isModalVisible: "",
        categoryClicked: "",
        productsFromCategory: []
    }

    dbRef = 'categories'

    changeFontSize = (e) => {
        console.log(parseInt(e.target.dataset));
        this.setState({fontSize: parseInt(this.state.fontSize) + parseInt(e.target.dataset.value)});
    }
    funcUndoRedo = (e) => {
        let dir = e.target.dataset.dir
        const newUndo = [...this.state.undo];
        const newRedo = [...this.state.redo];
        let u, r;
        if (dir === "u") {
            u = newUndo.pop();
            newRedo.push(u);
            fbDB.ref(`${this.dbRef}/${u.category}/products/${u.name}`).set(u.value);
        } 
        if (dir === "r") {
            r = newRedo.pop();
            r.value = (r.value === 0) ? 1 : 0;
            newUndo.push(r);
            fbDB.ref(`${this.dbRef}/${r.category}/products/${r.name}`).set(r.value);
        }
        console.log(u, r, newUndo, newRedo)
        this.setState({
            undo: newUndo,
            redo: newRedo
        })
    }

    moveProduct = (e) => {
        let name = e.target.dataset.name;
        let category = e.target.dataset.category;
        let reverseValue = parseInt(e.target.dataset.value) === 0 ? 1 : 0;
        fbDB.ref(`${this.dbRef}/${category}/products/${name}`).set(reverseValue);
        let currentUndo = [...this.state.undo];
        currentUndo.push({name: name, category: category, value: parseInt(e.target.dataset.value)})
        this.setState({ undo: currentUndo})
    }

    updateProductsFromDb = ref => {
        fbDB.ref(ref).on('value', snap => {
            const snapValue = snap.val()
            this.setState({ [ref]: snapValue })
        }, function (err) {
            console.log(err.code, err)
        })
    }
    handleInputChange = e => {
        console.log(e.target.id, e.target.value, this.state);
        let newValue = e.target.value;
        if (e.target.id === "newProductName") { 
            newValue = newValue.toLowerCase();
        } else if (e.target.id === "newProductToBuy") {
            newValue = this.state.newProductToBuy === 1 ? 0 : 1;
        } else {
            newValue = newValue.toUpperCase();
        }
        this.setState({ [e.target.id]: newValue })
    }

    handleCategoryClick = e => {
        const name = e.target.dataset.name;
        let productsFromCategory = [];
        for (const prod in this.state.categories[name].products) {
            productsFromCategory.push(
                <ProductWithCheckbox key={prod} prod={prod.replace(/_/g, " ")}/>
            )
        }
        this.setState({ 
            productsFromCategory: productsFromCategory,
            isModalVisible: "visible",
            categoryClicked: name,
            newCategoryName: this.toUpperWithoutSpaces(name)
        })
    }

    hideBackDrop = e => {
        if (e.target === e.currentTarget) {
            this.setState({ isModalVisible: "" })
        }
    }

    toUpperWithoutSpaces = name => name.toUpperCase().replace(/ /g, "_")
    removeDiacrits = str => str.replace(/[ąćęłńóśźż]/ig, 'x');

    category = (group, i, catName) => {
        return  <div data-name={catName} 
                     className={["categoryName", style.categoryName, this.removeDiacrits(catName)].join(" ")} 
                     onClick={this.handleCategoryClick}
                     key={group+i}>
                        {catName}
                </div>
    }

    submitCategoryNameChange = e => {
        e.preventDefault();
        console.log(e.target);
    }
    submitNewProduct = e => {
        e.preventDefault();
        let categoryProducts = {...this.state.categories[this.state.categoryClicked].products}
        categoryProducts[this.state.newProductName] = this.state.newProductToBuy;
        console.log(this.state.newProductName);
        fbDB.ref(`${this.dbRef}/${this.state.categoryClicked}/products/`).set(categoryProducts.replace(/ /g, "_"));
    }

    componentDidMount() { this.updateProductsFromDb(`${this.dbRef}`) }

    render() { 
        let toBuy = []
        let theRest = [];
        Object.keys(this.state.categories).forEach( (catName, i) => {
            const catData = this.state.categories[catName];
            let productsToBuy = [];
            let productsTheRest = [];
            Object.keys(catData.products).forEach( (prod, i) => {
                let product = (
                    <div className={["product", style.product, this.removeDiacrits(catName)].join(" ")}
                        key={this.removeDiacrits(catName)+i}
                        data-name={prod}
                        data-category={catName}
                        onClick={this.moveProduct}
                        data-value={catData.products[prod]}
                    >{prod.toLowerCase().replace(/_/g, " ")}</div>
                );
                if (catData.products[prod]) {
                    productsToBuy.push(product)
                } else {
                    productsTheRest.push(product)
                }
            })
            
            if (productsToBuy.length > 0) {
                toBuy.push( this.category(toBuy, i, catName) )
            }
            toBuy.push( ...productsToBuy )
            
            if (productsTheRest.length > 0) {
                theRest.push( this.category(theRest, i, catName))
            }
            theRest.push( ...productsTheRest )
        })

        return ( 
            <div className={style.list} style={{fontSize: this.state.fontSize}}>
                <TopMenu changeFontSize={this.changeFontSize} 
                    funcUndoRedo={this.funcUndoRedo} 
                    undo={this.state.undo.length === 0}
                    redo={this.state.redo.length === 0}
                    />
                <p>Do kupienia:</p>
                <div className={style.toBuy}>
                    {toBuy}
                </div>
                <hr/>
                <div className={style.theRest}>
                    {theRest}
                </div>

                <Modal  categoryClicked={this.state.categoryClicked}
                        newCategoryName={this.state.newCategoryName}
                        newProductName={this.state.newProductName}
                        hideBackDrop={this.hideBackDrop}
                        removeDiacrits={this.removeDiacrits}
                        handleInputChange={this.handleInputChange}
                        submitCategoryNameChange={this.submitCategoryNameChange}
                        submitNewProduct={this.submitNewProduct}
                        productsFromCategory={this.state.productsFromCategory}
                        deleteSelectedProducts={this.deleteSelectedProducts}
                        isModalVisible={this.state.isModalVisible}
                />
            </div>
         );
    }
}
 
export default ShowList;