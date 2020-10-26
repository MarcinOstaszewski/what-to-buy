import React, {Component } from 'react';
import TopMenu from '../../components/TopMenu/TopMenu'
import Modal from '../../components/Modal/Modal';
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
        newProductToBuy: 0,
        isModalVisible: "",
        categoryClicked: "",
        clickedCategoryHue: "",
        newCategoryHue: "",
        tabToShow: "show_addProduct",
        productsToDelete: {},
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
            const snapValue = snap.val();
            // for (const cat in snapValue) {
            //     const reference = `${ref}/${cat}`
            //     fbDB.ref(reference).on("value", snap => {
            //         let allCategories = {...this.state.categories};
            //         allCategories[cat] = snap.val();
            //         this.setState({ categories: allCategories })
            //     })
            // }
            this.setState({ [ref]: snapValue })
        }, function (err) {
            console.log(err.code, err);
        })

    }
    handleInputChange = e => {
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

    checkProductToDelete = e => {
        console.log(e.target, e.target.id, {...this.state.productsToDelete}[e.target.id]);
        let newProductsToDelete = {...this.state.productsToDelete};
        newProductsToDelete[e.target.id] = !{...this.state.productsToDelete}[e.target.id]
        this.setState({
            productsToDelete: newProductsToDelete
        })
    }

    handleCategoryClick = e => {
        const name = e.target.dataset.name;
        let productsToDelete = {};
        for (const prod in this.state.categories[name].products) {
            productsToDelete[prod] = false;
        }
        this.setState({ 
            productsToDelete: productsToDelete,
            isModalVisible: "visible",
            categoryClicked: name,
            clickedCategoryHue: e.target.dataset.hue,
            newCategoryHue: e.target.dataset.hue,
            newCategoryName: name.toUpperCase()
        })
    }

    hideBackDrop = e => {
        if (e.target === e.currentTarget) {
            this.setState({ isModalVisible: "" })
        }
    }

    removeDiacrits = str => str.replace(/[ąćęłńóśźż]/ig, 'x');

    categoryElement = (group, i, catName, hue) => {
        return  <div data-name={catName} 
                     className={["categoryName", hue, style.categoryName, this.removeDiacrits(catName)].join(" ")} 
                     onClick={this.handleCategoryClick}
                     data-hue={hue}
                     key={group+i}>
                        {catName}
                </div>
    }

    submitCategoryChange = e => {
        e.preventDefault();
        let allCategories = {...this.state.categories};
        let categoryData = {...allCategories[this.state.categoryClicked]};
        delete allCategories[this.state.categoryClicked];
        let newName = this.state.newCategoryName.toLowerCase()
        allCategories[newName] = categoryData;
        allCategories[newName].hue = parseInt(this.state.newCategoryHue.slice(4));
        console.log(allCategories[newName].hue, this.state.newCategoryHue.slice(4) );
        this.setState({ isModalVisible: false });
        fbDB.ref(`${this.dbRef}/`).set(allCategories);
    }
    submitNewProduct = e => {
        e.preventDefault();
        let categoryProducts = {...this.state.categories[this.state.categoryClicked].products}
        categoryProducts[this.state.newProductName] = this.state.newProductToBuy;
        console.log(this.state.newProductName);
        fbDB.ref(`${this.dbRef}/${this.state.categoryClicked}/products/`).set(categoryProducts);
        
        // MRUGNIĘCIE albo MODAL na 1s - POTWIERDZENIE DODANIA PRODUKTU DO LISTY
    }

    deleteSelectedProducts = e => {
        e.preventDefault();
        let allCategories = {...this.state.categories};
        let allProducts = {...allCategories[this.state.categoryClicked].products};
        console.log(allProducts, this.state.productsToDelete)
        for (const prod in allProducts) {
            if (this.state.productsToDelete[prod]) {
                delete allProducts[prod];
            }
        }
        this.setState({ isModalVisible: false })
        fbDB.ref(`${this.dbRef}/${this.state.categoryClicked}/products/`).set(allProducts);
    }

    tabClicked = e => {
        console.log(e.currentTarget.id);
        this.setState({ tabToShow: e.currentTarget.id });
    }

    componentDidMount() { this.updateProductsFromDb(`${this.dbRef}`) }

    render() { 
        let toBuy = []
        let theRest = [];
        Object.keys(this.state.categories).forEach( (catName, ind) => {
            const catData = this.state.categories[catName];
            const hue = "hue-"+catData.hue;
            let productsToBuy = [];
            let productsTheRest = [];
            Object.keys(catData.products).forEach( (prod, index) => {
                let product = (
                    <div className={["product", hue, style.product].join(" ")}
                        key={this.removeDiacrits(catName)+index}
                        data-name={prod}
                        data-category={catName}
                        onClick={this.moveProduct}
                        data-value={catData.products[prod]}
                    >{prod.toLowerCase()}</div>
                );
                if (catData.products[prod]) {
                    productsToBuy.push(product)
                } else {
                    productsTheRest.push(product)
                }
            })
            
            if (productsToBuy.length > 0) {
                toBuy.push( this.categoryElement(toBuy, ind, catName, hue) )
            }
            toBuy.push( ...productsToBuy )
            
            if (productsTheRest.length > 0) {
                theRest.push( this.categoryElement(theRest, ind, catName, hue))
            }
            theRest.push( ...productsTheRest )
        })
        console.log(this.state)

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
                        handleInputChange={this.handleInputChange}
                        submitCategoryChange={this.submitCategoryChange}
                        submitNewProduct={this.submitNewProduct}
                        productsToDelete={this.state.productsToDelete}
                        deleteSelectedProducts={this.deleteSelectedProducts}
                        isModalVisible={this.state.isModalVisible}
                        colorSwatchClicked={this.colorSwatchClicked}
                        clickedCategoryHue={this.state.clickedCategoryHue}
                        newCategoryHue={this.state.newCategoryHue}
                        checkProductToDelete={this.checkProductToDelete}
                        tabClicked={this.tabClicked}
                        tabToShow={this.state.tabToShow}
                />
            </div>
         );
    }
}
 
export default ShowList;