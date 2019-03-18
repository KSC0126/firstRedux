import React from 'react';
import App from './App';
import Componentone from './Componentone';
import { Route } from 'react-router';

import { BrowserRouter, HashRouter, Switch } from 'react-router-dom';

export default class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact="true" component={App} />
                    <Route path="/componentone" exact="true" component={Componentone} />

                </Switch>


            </HashRouter>
        )
    }
}