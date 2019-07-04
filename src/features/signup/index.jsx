import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup as signupAction } from './store/actions';

import {
    MainWrapper,
    InputWrapper,
    ButtonStyle,
    Form,
} from './index.style';

import Input from '../../components/input';
import Title from '../../components/title';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function Login(props) {
    const {
        signup,
        auth,
    } = props;

    const {
        loading,
        authorized,
        error,
    } = auth;

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    if (authorized) {
        return (
            <Redirect
                to={{
                    pathname: '/feed',
                }} />
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            return setEmailError(true);
        }
        return signup(email);
    };

    const handleChange = (e) => {
        const { target } = e;
        setEmail(target.value);
    };

    return (
        <MainWrapper>
            <Form onSubmit={handleSubmit}>
                <Title />
                <InputWrapper>
                    <Input
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        loading={loading}
                        error={!!error || emailError}
                        placeholder="Your email" />
                    <ButtonStyle
                        onClick={handleSubmit}
                        focus={!!email}
                        type="submit">
                        GO
                    </ButtonStyle>
                </InputWrapper>
            </Form>
        </MainWrapper>
    );
}

Login.propTypes = {
    signup: PropTypes.func.isRequired,
    auth: PropTypes.shape({
        loading: PropTypes.bool,
        authorized: PropTypes.bool,
        error: PropTypes.object,
    }).isRequired,
};

function mapStateToProps({ auth }) {
    return {
        auth,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signup: (params) => {
            return dispatch(signupAction(params));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
