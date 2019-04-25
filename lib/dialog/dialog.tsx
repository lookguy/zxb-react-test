import * as React from "react";
import { Fragment, ReactNode, ReactFragment } from 'react';
import './dialog.scss'
import Icon from "../icon/icon";
import { scopedClassMaker } from "../classes";
import ReactDOM from 'react-dom';

interface Props {
    visible: boolean;
    buttons?: Array<React.ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker("zui-dialog");

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e);
        }
    };
    const result = props.visible &&
        <Fragment>
            <div className={scopedClass("mask")} onClick={onClickMask}>

            </div>
            <div className={scopedClass()}>
                <div className={scopedClass("close")} onClick={onClickClose}>
                    <Icon name="close" />
                </div>
                <header className={scopedClass("header")}>tip</header>
                <main className={scopedClass("main")}>{props.children}</main>
                {props.buttons && props.buttons.length > 0 &&
                    <footer className={scopedClass("footer")}>
                        {props.buttons && props.buttons.map((button, inde_modal) =>
                            React.cloneElement(button, { key: inde_modal })
                        )}
                    </footer>
                }
            </div>
        </Fragment>;
    return (
        ReactDOM.createPortal(result, document.body)
    )
};

Dialog.defaultProps = {
    closeOnClickMask: false
};

const _modal = (content: ReactNode, buttons?: Array<React.ReactElement>, afterClose?: () => void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }
    const component =
        <Dialog
            visible={true}
            buttons={buttons}
            onClose={() => { 
                close(); 
                afterClose && afterClose() }
            }>
            {content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
    return close;
};

const alert = (content: string) => {
    const button = <button onClick={() => close()}>ok</button>
    const close = _modal(content, [button])
};
const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };
    const buttons = [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
    ];
    const close = _modal(content, buttons, no)
};
const modal = (content: ReactNode | ReactFragment) => {
    return _modal(content);
};

export { alert, confirm, modal }
export default Dialog;