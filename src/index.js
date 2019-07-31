import React from 'react';
import ReactDOM from 'react-dom';

import Prueba from './components/prueba';

const contenedor = document.getElementById('root');

ReactDOM.render(
    <Prueba
        saludo="Que dicen los"
    />,
    contenedor
);