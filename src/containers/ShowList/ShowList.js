import React, {Component } from 'react';
import TopMenu from '../../components/TopMenu/TopMenu'

import style from './ShowList.module.css';

import { 
    fbDB, 
} from '../../firebase';

class ShowList extends Component {
    state = { 
        zakupy: {
            'pobieranie danych...': true
        },
        categories: {
        },
        fontSize: 16,
        undo: [],
        redo: []
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

    removeDiacrits = str => str.replace(/[ąćęłńóśźż]/ig, 'x');

    categorySpan = (group, i, catName) => {
        return <span className={style[this.removeDiacrits(catName)]} key={group+i}>{catName.toUpperCase()}</span>
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
                    <div className={[style.product, style[this.removeDiacrits(catName)]].join(" ")}
                        key={this.removeDiacrits(catName)+i}
                        data-name={prod}
                        data-category={catName}
                        onClick={this.moveProduct}
                        data-value={catData.products[prod]}
                    >{prod.replace(/_/g, " ")}</div>
                );
                if (catData.products[prod]) {
                    productsToBuy.push(product)
                } else {
                    productsTheRest.push(product)
                }
            })
            
            if (productsToBuy.length > 0) {
                toBuy.push( this.categorySpan(toBuy, i, catName) )
            }
            toBuy.push( ...productsToBuy )
            
            if (productsTheRest.length > 0) {
                theRest.push( this.categorySpan(theRest, i, catName))
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
            </div>
         );
    }
}
 
export default ShowList;