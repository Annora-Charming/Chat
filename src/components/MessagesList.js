import React from 'react';
import Message from './Message';

class MessagesList extends React.Component {
    render() {
        const { messages } = this.props;
        return (
            <div id="messages_list">
                <ul>
                    {messages.map((message, index) => (
                        <Message
                            nickname={message.nickname}
                            message={message.message}
                            key={index}
                        />
                    ))}
                </ul>
                ;
            </div>
        );
    }
}

export default MessagesList;
