import * as React from "react";
import {Fragment} from 'react';
import './dialog.scss'
import Icon from "../icon/icon";
import {scopedClassMaker} from "../classes";

interface Props {
    visible: boolean;
    buttons: Array<React.ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker("zui-dialog");

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose:React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask:React.MouseEventHandler = (e)=>{
        if(props.closeOnClickMask){
            props.onClose(e);
        }
    };
    return (
        props.visible ?
            <Fragment>
                <div className={scopedClass("mask")} onClick={onClickMask}>

                </div>
                <div className={scopedClass()}>
                    <div className={scopedClass("close")} onClick={onClickClose}>
                        <Icon name="close"/>
                    </div>
                    <header className={scopedClass("header")}>tip</header>
                    <main className={scopedClass("main")}>{props.children}</main>
                    <footer className={scopedClass("footer")}>
                        {props.buttons.map((button,index)=>
                            React.cloneElement(button,{key:index})
                        )}
                    </footer>

                </div>
            </Fragment>
            : null
    );
};

Dialog.defaultProps = {
    closeOnClickMask: false
};

export default Dialog;