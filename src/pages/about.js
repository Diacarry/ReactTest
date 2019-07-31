import React from 'react';

import Prueba from './../components/prueba';

class About extends React.Component {
    render() {
        return (
            <div>
                <p>COMA</p>
                <Prueba saludo="Mierda!" />
                <p>Severo</p>
                <Prueba saludo="GIL" />
            </div>
        )
    }
}

export default About;