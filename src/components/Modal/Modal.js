import React from 'react';
import InputField from '../../components/InputField/InputField';
import Toggle from '../../components/Toggle/Toggle';

import style from './Modal.module.css'

const Modal = (props) => {

    const categoryNameColored = <span className={props.removeDiacrits(props.categoryClicked)}>{props.categoryClicked.toUpperCase()}</span>

    return ( 
        <div className={[style.backDrop, style[props.isModalVisible]].join(" ")} onClick={props.hideBackDrop}>
            <div className={[style.modalWindow, style[props.isModalVisible]].join(" ")}>
                <div className={style.hideBackDrop} onClick={props.hideBackDrop}></div>

                <form onSubmit={props.submitNewProduct} >
                    <h4>Dodaj produkt do kategorii {categoryNameColored}</h4>
                    <div className="row">
                        <InputField id="newProductName"
                                    text="Podaj nazwę produktu"
                                    width="9"
                                    value={props.newProductName}
                                    onChange={props.handleInputChange} />
                        <Toggle id="newProductToBuy"
                                text="Do kupienia"
                                type="switch"
                                width="3"
                                value={props.newProductToBuy}
                                onChange={props.handleInputChange} />
                    </div>
                    <InputField id="newProductNameSubmit"
                                clName="hue-120"
                                type="submit"
                                value="Dodaj produkt"/>
                </form>

                <form onSubmit={props.deleteSelectedProducts} >
                    <h4>Zaznacz produkt/y do usunięcia:</h4>
                    {props.productsFromCategory}
                    <InputField id="newProductNameSubmit"
                                type="submit"
                                clName="hue-0"
                                value="Usuń zaznaczone produkty"
                                onSubmit={props.submitCategoryNameChange}/>
                </form>

                <form onSubmit={props.submitCategoryNameChange} >
                    <h2>Edytuj kategorię {categoryNameColored}</h2>
                    <InputField id="newCategoryName"
                                text="Nowa nazwa kategorii"
                                value={props.newCategoryName}
                                onChange={props.handleInputChange} />

                    <InputField id="newCategoryNameSubmit"
                                type="submit"
                                clName="hue-30"
                                value="Zmień nazwę kategorii" />
                    <p>WYŚWIETLIĆ KOLOROWE KWADRACIKI do zaznaczenia</p>
                    <InputField id="newCategoryColorSubmit"
                                type="submit"
                                clName="hue-300"
                                value="Zmień kolor kategorii" />
                </form>
            </div>
        </div>
    );                
}
 
export default Modal;

            