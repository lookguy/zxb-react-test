import React from 'react'
import './importIcons'
import './icon.scss'

interface IconProps extends React.DOMAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className='zui-icon' {...props}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );
};

export default Icon;