import React from 'react';
import { shallow } from 'enzyme';
import MessagesList from './MessagesList';
import renderer from 'react-test-renderer';

test('Messages list', () => {
    const messages = [
        { nickname: 'TEST', content: 'TEST', id: '1' },
        { nickname: 'test', content: 'test', id: '2' }
    ];
    const component = shallow(<MessagesList messages={messages} />);
    expect(component.find('Message')).toHaveLength(2);
});

test('inline snapshot test', () => {
    const messages = [
        { nickname: 'TEST', content: 'TEST', id: '1' },
        { nickname: 'test', content: 'test', id: '2' }
    ];
    const component = renderer.create(<MessagesList messages={messages} />).toJSON();
    expect(component).toMatchInlineSnapshot(`
        <ul
          className="message-list"
        >
          <li>
            <b>
              TEST
              :
            </b>
            TEST
          </li>
          <li>
            <b>
              test
              :
            </b>
            test
          </li>
        </ul>
    `);
});
