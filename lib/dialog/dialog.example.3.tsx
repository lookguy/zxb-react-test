import React from 'react';
import { alert, confirm } from "./dialog";

const DialogExample: React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <h1>example 3</h1>
                <button onClick={() => alert('1')}>alert</button>
                <button onClick={() => confirm('1', () => { alert("这是调用了alert") }, () => { console.log("你点击了no") })}>confirm</button>
            </div>
        </div>
    );
};

export default DialogExample;