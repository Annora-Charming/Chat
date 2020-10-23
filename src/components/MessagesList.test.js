import React from 'react';
import {shallow} from 'enzyme';
import MessagesList from './MessagesList';
test('Messages list', () => {
    const messages = [
        {nick: "TEST", message: "TEST"}
    ];
    const component = shallow(<MessagesList messages={messages}/>);
    expect(component.find('Message')).toHaveLength(1);
});