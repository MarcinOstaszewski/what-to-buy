import React from 'react';

import style from './InputField.module.css';

const InputField = (props) => {
    
    let checkmark;
    if (props.type === "radio") {
        checkmark = <span className={style.checkmark}></span>
    }
    const width = props.width ? props.width : 12;
    const disabled = props.disabled;

    let inputElement, switchClass, labelText;
    if (props.type === "switch") {
        switchClass = "switch";
        labelText = "moveHigher";
        inputElement = (
            <div >
                <input id={props.id} value={props.value} type="checkbox" onChange={props.onChange}/>
                <span className={style.slider}></span>
            </div>
        )
    } else {
        inputElement = (
            <input  type={props.type} id={props.id} 
                value={props.value}
                onChange={props.onChange}
                onClick={props.onClick}
                className={props.clName}
                name={props.name} disabled={disabled} />
        )
    }
    
    return ( 
        <div key={props.key}
            className={[style.formField, "col-"+width, style[props.mainClassName]].join(" ")} >
            <label className={style[switchClass]}>
                <div className={style[labelText]}>{props.text}</div>
                {inputElement}
                {checkmark}
            </label>
        </div>
    )
}
 
export default InputField;


