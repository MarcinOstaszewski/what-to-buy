import React from 'react';

import style from './Toggle.module.css';

const Toggle = () => {
    return ( 
        <label className={style.switch}>
            <input type="checkbox" />
            <span className={style.slider}></span>
        </label>
     );
}
 
export default Toggle;