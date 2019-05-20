import React from 'react';
import Icon from './icon';
import * as fs from "fs";

console.log(fs);

const allIconsName = ["alipay","ban","check","close","down","font","happy","heart-shape","left","list","login","logout","minus","navigate-down","navigate-up","navigate-left","play","plus","qq","replay","right","search","star","up","wechat"];

const AllIconsExample:React.FunctionComponent = ()=>{
    return(
        <div>
            <h1>Icon图标</h1>
            <ul className="">
                {
                    allIconsName.map(item => (
                        <li key={item}>
                            <Icon name={item}/>
                            <span>{item}</span>
                        </li>
                    ))
                }
            </ul>
        </div>

    );
};

export default AllIconsExample;