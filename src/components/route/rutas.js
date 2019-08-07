import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../general/layout';

import About from './../../pages/about';
import Contact from './../../pages/contact';

import NotFound from './../../pages/notfound';

function Rutas () {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default Rutas;