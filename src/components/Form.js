import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            nick:'',
            message:''
        };
    }

    handleSend(){
        this.props.postMessage({
            nick:this.state.nick,
            message:this.state.message
        });
        this.setState({
            nick:'',
            message:'',
        });
    }

    render(){
        const{nick, message} = this.state;

        return <form>
        <input
            value= {nick}
            type = "text"
            id = "nick"
            placeholder="Nick"
            onChange = {e => this.setState({nick:e.target.value})}
        />
        <br/>
        <textarea
            value = {message}
            id = "message"
            placeholder="Message"
            onChange = {e => this.setState({message: e.target.value})}
        >
        </textarea>
        <br/>
        <input
            type = "button"
            value = "Send"
            id = "send_button"
            onClick = {() => this.handleSend()}
        />
    </form>;
    }
}

export default Form;