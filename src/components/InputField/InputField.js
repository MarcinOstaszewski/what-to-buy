import React from 'react';

import style from './InputField.module.css';

const InputField = (props) => {
    
    let checkmark;
    if (props.type === "radio") {
        checkmark = <span className={style.checkmark}></span>
    }
    const width = props.width ? props.width : 12;
    const disabled = props.disabled;

    // let invalidClass;
    // if (props.isValid) {
    //     invalidClass = props.isValid[props.id];
    // }
    
    return ( 
        <div key={props.key}
            className={[style.formField, "col-"+width, style[props.mainClassName]].join(" ")} >
            <label>
                {props.text}
                <input  type={props.type} id={props.id} 
                        value={props.value}
                        onChange={props.onChange}
                        onClick={props.onClick}
                        className={props.clName}
                        // className={style[invalidClass]}
                        name={props.name} disabled={disabled}
                />
                {checkmark}
            </label>
        </div>
    )
}
 
export default InputField;


