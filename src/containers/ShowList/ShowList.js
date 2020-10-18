import React, {Component } from 'react';

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
        }
    }

    dbRef = 'categories'

    moveProduct = (e) => {
        let name = e.target.dataset.name;
        let category = e.target.dataset.category;
        let reverseValue = parseInt(e.target.dataset.value) === 0 ? 1 : 0;
        fbDB.ref(`${this.dbRef}/${category}/products/${name}`).set(reverseValue);
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
            <div className={style.list}>
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