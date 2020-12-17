import React from 'react';
import ChatList from '../components/ChatList';
import { action } from '@storybook/addon-actions';

export default {
    title: 'ChatList',
    component: ChatList
};

const Template = (args) => <ChatList {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    list: [
        {
            id: '1234',
            title: 'Cat chat'
        },
        {
            id: '12345',
            title: 'Ferret chat'
        }
    ],
    clickHandle: action('Chat clicked!')
};
