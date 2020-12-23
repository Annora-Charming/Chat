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
    userId: '1',
    list: [
        {
            id: '1',
            createdAt: '2020-10-20T03:49:24.735Z',
            title: 'Cat chat',
            userId: '1',
            participants: ['1', '2']
        },
        {
            id: '2',
            createdAt: '2020-10-20T03:48:24.735Z',
            title: 'Ferret chat',
            userId: '2',
            participants: ['1', '2']
        },
        {
            id: '3',
            createdAt: '2020-10-20T03:47:24.735Z',
            title: 'Fox chat',
            userId: '2',
            participants: ['2', '3']
        }
    ],
    goHandler: action('go'),
    deleteHandler: action('delete'),
    joinHandler: action('join')
};
