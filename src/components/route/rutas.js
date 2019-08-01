import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './../../pages/about';
import Contact from './../../pages/contact';

function Rutas () {
    return (
        <BrowserRouter>
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
        </BrowserRouter>
    );
}

export default Rutas;