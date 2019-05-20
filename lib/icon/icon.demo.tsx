import Demo from "../../demo";
import IconExample from "./icon.example";
import React from 'react';
import AllIconsExample from "./icon.demo.all";

const IconDemo = ()=>{
    return(
        <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
            <AllIconsExample/>
            <IconExample/>
        </Demo>
    )
};

export default IconDemo;