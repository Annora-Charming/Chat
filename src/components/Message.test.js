import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';
import renderer from 'react-test-renderer';

test('Message shows nickname and message', () => {
    const nickname = 'test';
    const content = 'test';
    const component = shallow(<Message nickname={nickname} content={content} />);
    expect(component.text()).toContain(nickname);
    expect(component.text()).toContain(content);
});

test('Snapshot test', () => {
    const nickname = 'test';
    const content = 'test';
    const component = renderer.create(<Message nickname={nickname} content={content} />);
    expect(component.toJSON()).toMatchSnapshot();
});
