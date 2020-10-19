import React from 'react';
import style from './TopMenu.module.css';

const TopMenu = (props) => {
    return ( 
        <div id="dddafad" className={style.TopMenu}>
            <div onClick={props.funcUndo}>Undo</div>
            <div data-value={1} onClick={props.changeFontSize}>+1</div>
            <div data-value={-1} onClick={props.changeFontSize}>-1</div>
        </div>
     );
}
 
export default TopMenu;