import Icon from "../icon";
import * as renderer from 'react-test-renderer';
import React from 'react';
import {mount} from 'enzyme'

describe('icon', () => {
    it('render icon successful', () => {
        const json = renderer.create(<Icon name='alipay' />).toJSON();
        expect(json).toMatchSnapshot();
    });
    it('onClick function',()=>{
        const fn = jest.fn();
        const component = mount(<Icon name='alipay' onClick={fn}/>);
        component.find('svg').simulate('click');
        expect(fn).toBeCalled();
    });
});