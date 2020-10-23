import React from 'react';

import style from './ProductWithCheckbox.module.css';

const ProductWithCheckbox = (props) => {

    const prod = props.prod

    return ( 
        <label className={style.checkboxContainer} key={prod}>
            <input type="checkbox" id={prod}/>
            <span className={style.prodName}>{prod}</span>
            <span className={style.checkmark}></span>
        </label>
     );
}
 
export default ProductWithCheckbox;