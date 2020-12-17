import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            nickname: '',
            message: ''
        };
    }

    handleSend() {
        if (this.state.nickname === '' || this.state.message === '') {
            alert("It's empty! >:(");
        }
        this.props.postMessage({
            nickname: this.state.nickname,
            message: this.state.message
        });
        this.setState({
            nickname: '',
            message: ''
        });
    }

    render() {
        const { nickname, message } = this.state;

        return (
            <form>
                <input
                    value={nickname}
                    type="text"
                    id="nickname"
                    placeholder="Nick"
                    onChange={(e) => this.setState({ nickname: e.target.value })}
                />
                <br />
                <textarea
                    value={message}
                    id="message"
                    placeholder="Message"
                    onChange={(e) => this.setState({ message: e.target.value })}
                ></textarea>
                <br />
                <input
                    type="button"
                    value="Send"
                    id="send_button"
                    onClick={() => this.handleSend()}
                />
            </form>
        );
    }
}

export default Form;
