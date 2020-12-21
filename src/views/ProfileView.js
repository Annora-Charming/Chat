import React from 'react';
import apiService from '../apiService';
import ChatForm from '../components/ChatForm';

export default class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        apiService.user
            .profile()
            .then((response) => response.data)
            .then((user) => this.setState({ user }));
    }

    render() {
        return (
            <>
                <h1>Profile</h1>
                {this.state.user && (
                    <>
                        <div>Nickname:{this.state.user.nickname}</div>
                        <div>Created:{new Date(this.state.user.createdAt).toLocaleString()}</div>
                    </>
                )}
                <ChatForm handleSubmit={(data) => console.log(data)} />
            </>
        );
    }
}
