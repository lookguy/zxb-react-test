import Icon from "../icon";
import * as renderer from 'react-test-renderer';
import React from 'react';

describe('icon', () => {
    it('icon xxx', () => {
        const json = renderer.create(<Icon />).toJSON();
        expect(json).toMatchSnapshot();
    });
});