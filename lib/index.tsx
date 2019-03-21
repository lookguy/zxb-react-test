import Icon from './icon';
import ReactDOM from 'react-dom';
import React from 'react';

const fn: React.MouseEventHandler= (e)=>{
    console.log(e.currentTarget         )
}

ReactDOM.render(<div><Icon name="wechat" onClick={fn} /></div>, document.querySelector("#root"));