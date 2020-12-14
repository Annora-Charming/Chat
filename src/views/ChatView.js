const URL = 'http://localhost:3000';
import React from 'react';
import Form from '../components/Form';
import MessagesList from '../components/MessagesList';

class ChatView extends React.Component {
    constructor() {
        super();
        this.state = {
            serverMessages: []
        };
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(this.getMessages.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    postMessage(newMessage) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', URL);
        xhr.send(
            JSON.stringify({
                nick: newMessage.nick,
                message: newMessage.message
            })
        );
        xhr.onload = () => this.handleOnload(xhr);
        xhr.onerror = function () {
            console.log('Request failed');
        };
    }

    getMessages() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', URL);
        xhr.send();
        xhr.onload = () => this.handleOnload(xhr);
    }

    handleOnload(xhr) {
        if (xhr.status !== 200) {
            console.error('!!!ERROR!!!');
        } else {
            this.parseMessages(xhr.response);
        }
    }

    parseMessages(response) {
        const newServerMessages = JSON.parse(response);
        this.setState({
            serverMessages: newServerMessages
        });
    }

    render() {
        const { serverMessages } = this.state;
        return (
            <>
                <h1>Chat</h1>
                <Form postMessage={(newMessage) => this.postMessage(newMessage)} />
                <MessagesList messages={serverMessages} />
            </>
        );
    }
}

export default ChatView;
