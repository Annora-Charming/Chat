import React from 'react';
import Message from './Message';

class MessagesList extends React.Component {
    render() {
        const { messages } = this.props;
        return (
            <div id="messages_list">
                <ul>
                    {messages.map((message) => (
                        <Message
                            content={message.content}
                            nickname={message.nickname}
                            key={message.id}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default MessagesList;
