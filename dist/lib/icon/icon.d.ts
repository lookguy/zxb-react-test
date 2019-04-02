import * as React from 'react';
import './importIcons';
import './icon.scss';
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
declare const Icon: React.FunctionComponent<IconProps>;
export default Icon;
