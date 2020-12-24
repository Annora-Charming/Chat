import React from 'react';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    handleSend(event) {
        event.preventDefault();
        this.props.postMessage({
            content: this.state.content
        });
        this.setState({
            content: ''
        });
    }

    render() {
        const { content } = this.state;

        return (
            <form className="message-form" onSubmit={(event) => this.handleSend(event)}>
                <input
                    value={content}
                    type="text"
                    id="content"
                    name="content"
                    onChange={(e) => this.setState({ content: e.target.value })}
                />
                <br />
                <button type="submit" id="send_button">
                    Send
                </button>
            </form>
        );
    }
}

export default MessageForm;
