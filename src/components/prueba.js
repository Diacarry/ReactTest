import React from 'react';

class Prueba extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.saludo}</h2>
                <h4>{this.props.variableA}</h4>
                <h4>{this.props.variableB}</h4>
                <h4>{this.props.variableC}</h4>
            </div>
        )
    }
}

export default Prueba;