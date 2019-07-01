import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signin as signinAction } from './store/actions';

import {
    MainWrapper,
    Form,
    TitleStyle,
} from './index.style';

import Input from '../../components/input';

function Login(props) {
    const {
        signin,
        auth,
    } = props;

    const {
        loading,
        authorized,
        error,
    } = auth;

    const [email, setEmail] = useState('');

    if (authorized) {
        return (
            <Redirect
                to={{
                    pathname: '/',
                }} />
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signin(email);
    };

    const handleChange = (e) => {
        const { target } = e;
        setEmail(target.value);
    };

    return (
        <MainWrapper>
            <Form onSubmit={handleSubmit}>
                <TitleStyle>
                    THE IDDOG
                </TitleStyle>
                <Input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    loading={loading}
                    error={!!error}
                    placeholder="Your email" />
            </Form>
        </MainWrapper>
    );
}

Login.propTypes = {
    signin: PropTypes.func.isRequired,
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
        signin: (params) => {
            return dispatch(signinAction(params));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
