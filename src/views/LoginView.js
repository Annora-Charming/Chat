import React from 'react';
import apiService from '../apiService';
import { Formik } from 'formik';

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            error: null
        };
    }

    handleSubmit(values) {
        apiService.auth
            .login(values)
            .then(() => {
                this.setState({ result: 'User authorized successfully' });
                setTimeout(() => this.props.history.push('/profile'), 2000);
            })
            .catch((error) => this.setState({ error: 'Error' + error.response.data.error }));
    }

    render() {
        const { error, result } = this.state;
        return (
            <div className="login-view">
                <h1>Login</h1>
                {error && (
                    <div className="Error">
                        <span style={{ color: 'red' }}>{error}</span>
                    </div>
                )}
                {result && <div className="Result">{result}</div>}
                <Formik
                    initialValues={{ nickname: '', password: '' }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.nickname) {
                            errors.nickname = 'Enter nickname';
                        }
                        if (!values.password) {
                            errors.password = 'Enter password';
                        }
                        if (values.password.length < 7) {
                            errors.password = 'Password length is more then 6 characters';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        this.handleSubmit(values);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            {errors.nickname && touched.nickname && (
                                <div style={{ color: 'red' }}>{errors.nickname}</div>
                            )}
                            <div>
                                <label>
                                    Nick:
                                    <input
                                        type="text"
                                        name="nickname"
                                        value={values.nickname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </label>
                            </div>
                            {errors.password && touched.password && (
                                <div style={{ color: 'red' }}>{errors.password}</div>
                            )}
                            <div>
                                <label>
                                    Password:
                                    <input
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </label>
                            </div>
                            <button type="submit">Log in</button>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}
