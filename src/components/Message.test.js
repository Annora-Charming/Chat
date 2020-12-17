import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';
import renderer from 'react-test-renderer';

test('Message shows nickname and message', () => {
    const nickname = 'test';
    const message = 'test';
    const component = shallow(<Message nickname={nickname} message={message} />);
    expect(component.text()).toContain(nickname);
    expect(component.text()).toContain(message);
});

test('Snapshot test', () => {
    const nickname = 'test';
    const message = 'test';
    const component = renderer.create(<Message nickname={nickname} message={message} />);
    expect(component.toJSON()).toMatchSnapshot();
});
