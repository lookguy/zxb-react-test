import * as React from "react";
import Highlight, {defaultProps} from "prism-react-renderer";
import {useState} from "react";

interface Props {
    code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false);
    const code = (
        <Highlight {...defaultProps} language="jsx" code={props.code}>
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({line, key: i})}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({token, key})}/>
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
    return (
        <div>
            <div className="example">
                {props.children}
            </div>
            <div>
                <button onClick={()=>setCodeVisible(!codeVisible )} className="show_source">查看代码</button>
                {codeVisible && code}
            </div>

        </div>
    )
};
export default Demo;