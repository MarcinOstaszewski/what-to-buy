import React from 'react';
import style from './TopMenu.module.css';

const TopMenu = (props) => {
    // console.log( props.undo, props.redo )
    return ( 
        <div id="dddafad" className={style.TopMenu}>
            <div onClick={props.funcUndoRedo} data-dir="u"
                 className={style[props.undo]} 
                 disabled={props.undo === 0}
                 >Undo</div>
            <div onClick={props.funcUndoRedo} data-dir="r"
                 className={style[props.redo]} 
                 disabled={props.redo === 0}
                 >Redo</div>
            <div data-value={1} onClick={props.changeFontSize}>A+</div>
            <div data-value={-1} onClick={props.changeFontSize}>a-</div>
        </div>
     );
}
 
export default TopMenu;