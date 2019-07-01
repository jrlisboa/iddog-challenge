/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Shell from './shell';

import Login from './features/login';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/login"
                    component={Login} />

                <Shell
                    exact
                    path="/"
                    component={() => {
                        return (
                            <div>
                                Dash
                            </div>
                        );
                    }} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
