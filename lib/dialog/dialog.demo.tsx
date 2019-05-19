import React, {Fragment} from 'react';
import Demo from "../../demo";

import DialogExample1 from "./dialog.example.1";
import DialogExample2 from "./dialog.example.2";
import DialogExample3 from "./dialog.example.3";
import DialogExample4 from "./dialog.example.4";

const dialogDemo = () => {
    return(
        <Fragment>
            <Demo code={require('!!raw-loader!./dialog.example.1.tsx').default}>
                <DialogExample1/>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example.2.tsx').default}>
                <DialogExample2/>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example.3.tsx').default}>
                <DialogExample3/>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example.4.tsx').default}>
                <DialogExample4/>
            </Demo>
        </Fragment>
    )
};

export default dialogDemo;