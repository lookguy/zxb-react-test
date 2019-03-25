import Icon from './icon';
import ReactDOM from 'react-dom';
import React from 'react';

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target);
};

ReactDOM.render(<div><Icon name="wechat" onClick={fn} onMouseEnter={() => console.log('enter')}/>
</div>, document.querySelector("#root"));