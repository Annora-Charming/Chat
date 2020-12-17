import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
    test('runs callback with proper values', () => {
        const message = 'Message';
        const nickname = 'Nick';
        const handler = jest.fn();
        const component = shallow(<Form postMessage={handler} />);
        component.find('input[type="text"]').simulate('change', { target: { value: nickname } });
        component.find('textarea').simulate('change', { target: { value: message } });
        component.find('input[type="button"]').simulate('click');
        expect(handler).toHaveBeenCalledWith({
            nickname,
            message
        });
    });
});
