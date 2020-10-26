import React from 'react';
import InputField from '../../components/InputField/InputField';
import ProductWithCheckbox from '../../components/ProductWithCheckbox/ProductWithCheckbox';

import style from './Modal.module.css'

const Modal = (props) => {

    const categoryNameColored = (
        <span className={["categoryName", props.clickedCategoryHue, props.removeDiacrits(props.categoryClicked)].join(" ")}>
            {props.categoryClicked.toUpperCase()}
        </span>
    )

    let productsToDelete = [];
    for (const prod in props.productsToDelete ) {
        productsToDelete.push(
            <ProductWithCheckbox key={prod} prod={prod} checked={props.productsToDelete[prod]}
                checkProductToDelete={props.checkProductToDelete}
            />
        )
    }
    let colorSwatches = [];
    for (let i = 0; i <= 36; i++) {
        let hueClass = `hue-${i*10}`;
        let isChosenHue = (hueClass === props.newCategoryHue) ? 'chosenHue' : '';
        colorSwatches.push(
            <div className={["colorSwatch", hueClass, isChosenHue].join(" ")}
                 id={hueClass} key={hueClass}
                 onClick={props.colorSwatchClicked}
            ></div>
        )
    }

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
                        <InputField id="newProductToBuy"
                                    text="Kupić?"
                                    type="switch"
                                    width="3"
                                    mainClassName='switchContainer'
                                    onChange={props.handleInputChange} />
                    </div>
                    <InputField id="newProductNameSubmit"
                                clName="hue-120"
                                type="submit"
                                value="Dodaj produkt"/>
                </form>

                <form onSubmit={props.deleteSelectedProducts} >
                    <h4>Usuń produkt/y z kategorii {categoryNameColored}</h4>
                    {productsToDelete}
                    <InputField id="deleteProductFromCategory"
                                type="submit"
                                clName="hue-0"
                                value="Usuń zaznaczone produkty"/>
                </form>

                <form onSubmit={props.submitCategoryChange} >
                    <h4>Edytuj kategorię {categoryNameColored}</h4>
                    <InputField id="newCategoryName"
                                text="Nowa nazwa kategorii"
                                value={props.newCategoryName}
                                onChange={props.handleInputChange} />

                    <div className="row mt-5">{colorSwatches}</div>
                    <InputField id="newCategoryNameSubmit"
                                type="submit"
                                clName="hue-30"
                                value="Zmień nazwę i / lub kolor kategorii" />
                </form>
            </div>
        </div>
    );                
}
 
export default Modal;