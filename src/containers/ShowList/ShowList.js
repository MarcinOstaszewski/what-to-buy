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
        kategorie: {
        }
    }

    dbRef = 'zakupy'

    swapProduct = (e) => {
        let name = e.target.dataset.name;
        let reverseValue = parseInt(e.target.dataset.value) === 0 ? 1 : 0;
        fbDB.ref(`${this.dbRef}/${name}`).set(reverseValue);
    }

    componentDidMount() {       
        fbDB.ref(`${this.dbRef}`).on('value', snap => {
            const snapValue = snap.val()
            this.setState({ [this.dbRef]: snapValue })
            console.log(this.state[this.dbRef])
        }, function (err) {
            console.log(err.code, err)
        })
    }

    render() { 
        let doKupienia = []
        let naZapas = [];
        Object.keys(this.state.zakupy).forEach( (name, i) => {
            const el = this.state.zakupy[name];
            const product = (
                <div key={i}
                        data-name={name}
                        onClick={this.swapProduct} 
                        data-value={this.state.zakupy[name]}
                >{name}</div>
            )
            if (el) {
                doKupienia.push(product)
            } else {
                naZapas.push(product)
            }
        })
        return ( 
            <div className={style.list}>
                <p>Do kupienia</p>
                <div className={style.doKupienia}>
                    {doKupienia}
                </div>
                <hr/>
                <p>Może potem</p>
                <div className={style.naZapas}>
                    {naZapas}
                </div>
            </div>
         );
    }
}
 
export default ShowList;