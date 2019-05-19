import React from 'react';
import { modal } from "./dialog";

const DialogExample: React.FunctionComponent = () => {
    const openModal = ()=>{
        const close = modal(<h1>
            你好
            <button onClick={()=>close()}>close</button>
        </h1>)
    };
    return (
        <div>
            <div>
                <h1>example 4</h1>
                <button onClick={openModal}>modal</button>
            </div>
        </div>
    );
};

export default DialogExample;