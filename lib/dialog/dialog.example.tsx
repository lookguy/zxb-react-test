import React, {useState} from 'react';
import Dialog from "./dialog";

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={() => setX(!x)}>点击</button>
            <Dialog visible={x}>
                <strong>hi</strong>
            </Dialog>
        </div>
    );
};

export default DialogExample;