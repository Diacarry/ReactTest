import React from 'react';

import Prueba from './../components/prueba';
import Form from './../components/forms/formulario';

class About extends React.Component {
    render() {
        return (
            <div>
                <p>COMA</p>
                <Prueba saludo="Mierda!" />
                <p>Formulario</p>
                <Form />
            </div>
        )
    }
}

export default About;