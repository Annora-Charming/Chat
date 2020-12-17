import React from 'react';

class Message extends React.Component {
    render() {
        const { nickname, message } = this.props;
        return (
            <li>
                <b>{nickname}:</b>
                {message}
            </li>
        );
    }
}

export default Message;
