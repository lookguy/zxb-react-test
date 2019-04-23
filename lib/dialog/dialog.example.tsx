import React, {useState} from 'react';
import Dialog from "./dialog";

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);
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
                } onClose={()=>{setX(false);}}>
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
                } onClose={()=>{setY(false);}}>
                    <strong>hi</strong>
                </Dialog>
            </div>
        </div>
    );
};

export default DialogExample;