import React from 'react';
import Chat from '../components/Chat';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Chat',
    component: Chat
};

const Template = (args) => <Chat {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: '123',
    title: 'My first chat',
    clickHandle: action('Chat clicked!')
};
