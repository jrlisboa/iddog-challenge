/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Shell({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                (props) => {
                    const componentProps = { ...rest, ...props };
                    const {
                        authorized,
                    } = componentProps;

                    if (authorized) {
                        return (
                            <Component {...props} />
                        );
                    }

                    return (
                        <Redirect to={
                            {
                                pathname: '/signup',
                                state: {
                                    from: props.location,
                                },
                            }
                        } />
                    );
                }
            } />
    );
}

Shell.propTypes = {
    location: PropTypes.object.isRequired,
    component: PropTypes.any,
    authorized: PropTypes.bool.isRequired,
};

Shell.defaultProps = {
    component: <div />,
};

function mapStateToProps({ auth }) {
    return {
        authorized: (auth || {}).authorized,
    };
}

export default connect(mapStateToProps)(Shell);
