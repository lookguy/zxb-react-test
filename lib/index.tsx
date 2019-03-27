import Icon from './icon/icon';
import ReactDOM from 'react-dom';
import * as React from 'react'

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target);
};

ReactDOM.render(<div><Icon name="wechat" onClick={fn} onMouseEnter={() => console.log('enter')}/>
</div>, document.querySelector("#root"));