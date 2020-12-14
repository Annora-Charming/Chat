import React from 'react';
import apiService from '../apiService';

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nick: '',
            password: '',
            result: null,
            error: null
        };
    }

    handleSubmit(e) {
        this.setState({
            result: null,
            error: null
        });
        apiService.auth
            .login({
                nick: this.state.nick,
                password: this.state.password
            })
            .then(() => {
                this.setState({ result: 'User authorized successfully' });
                setTimeout(() => this.props.history.push('/profile'), 2000);
            })
            .catch((error) => this.setState({ error: 'Error' + error.response.data.error }));
        e.preventDefault();
    }

    render() {
        return (
            <>
                <h1>Login</h1>
                {this.state.error}
                {this.state.result}
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <label>
                            Nick
                            <input
                                type="text"
                                value={this.state.nick}
                                onChange={(e) => this.setState({ nick: e.target.value })}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                        </label>
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </>
        );
    }
}
