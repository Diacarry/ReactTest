import React from 'react';

class Prueba extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.saludo}</h1>
                <p>COMPONENTES</p>
            </div>
        )
    }
}

export default Prueba;