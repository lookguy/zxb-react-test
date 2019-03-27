import Button from "../button";
import renderer from 'react-test-renderer';
import React from 'react';

describe('button tests', () => {
    it('是个div', () => {
        const json = renderer.create(<Button />).toJSON();
        expect(json).toMatchSnapshot();
    });
});