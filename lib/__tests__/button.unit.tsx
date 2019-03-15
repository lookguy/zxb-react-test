import Button from "../button";
import renderer from 'react-test-renderer'
import React from 'react';

describe('button tests', () => {
    it('是个div', () => {
        // const tree = renderer
        //     .create(<Button icon="alipay"><span>Click Me</span></Button>)
        //     .toJSON()
        // expect(tree).toMatchSnapshot()
        const json = renderer.create(<Button></Button>).toJSON()
        expect(json).toMatchSnapshot()
    })
})