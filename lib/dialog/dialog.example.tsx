import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from "./dialog";

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);
    const openModal = ()=>{
        const close = modal(<h1>
            你好
            <button onClick={()=>close()}>close</button>
        </h1>)
    }
    return (
        <div>
            <div>
                <h1>example 1</h1>
                <button onClick={() => setX(!x)}>点击</button>
                <Dialog visible={x} buttons={
                    [
                        <button onClick={() => {
                            setX(false)
                        }}>1</button>,
                        <button onClick={() => {
                            setX(false)
                        }}>2</button>
                    ]
                } onClose={() => { setX(false); }}>
                    <strong>hi</strong>
                </Dialog>
            </div>
            <div>
                <h1>example 2</h1>
                <button onClick={() => setY(!y)}>点击</button>
                <Dialog visible={y} closeOnClickMask={true} buttons={
                    [
                        <button onClick={() => {
                            setY(false)
                        }}>1</button>,
                        <button onClick={() => {
                            setY(false)
                        }}>2</button>
                    ]
                } onClose={() => { setY(false); }}>
                    <strong>hi</strong>
                </Dialog>
            </div>
            <div>
                <h1>example 3</h1>
                <button onClick={() => alert('1')}>alert</button>
                <button onClick={() => confirm('1', () => { alert("sss") }, () => { console.log("你点击了no") })}>confirm</button>
            </div>
            <div>
                <h1>example 4</h1>
                <button onClick={openModal}>modal</button>
            </div>
        </div>
    );
};

export default DialogExample;