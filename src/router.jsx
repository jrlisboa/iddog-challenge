/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Shell from './shell';

import Login from './features/signup';
import Feed from './features/feed';
import NotFound from './components/404';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/signup"
                    component={Login} />

                <Shell
                    exact
                    path="/feed"
                    component={Feed} />
            </Switch>
            <Route
                component={NotFound} />
        </BrowserRouter>
    );
}

export default Router;
