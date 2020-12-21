import React from 'react';
import apiService from '../apiService';
import { Formik } from 'formik';

export default class RegistrationView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            error: null
        };
    }

    handleSubmit(values) {
        apiService.user
            .create(values)
            .then(() => {
                this.setState({ result: 'User registered successfully' });
                setTimeout(() => this.props.history.push('/login'), 2000);
            })
            .catch((error) => this.setState({ error: 'Error' + error.response.data.error }));
    }

    render() {
        const { error, result } = this.state;
        return (
            <>
                <h1>Registration</h1>
                <div>{error && <span style={{ color: 'red' }}>{error}</span>}</div>
                {result}
                <Formik
                    initialValues={{ nickname: '', password: '' }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.nickname) {
                            errors.nickname = 'Input nickname';
                        }
                        if (!values.password) {
                            errors.password = 'Input password';
                        }
                        if (!values.password.length < 7) {
                            errors.password = 'Password length should be more then 6 characters';
                        }
                        return error;
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
                                    <inpit
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </label>
                            </div>
                            <button type="submit">Create user</button>
                        </form>
                    )}
                </Formik>
            </>
        );
    }
}
