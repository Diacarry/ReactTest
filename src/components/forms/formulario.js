import React from 'react';

class Formulario extends React.Component {
    state = {};
    cajita = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    botoncillo = e => {
        console.log('Boton aprimido');
    }
    formulario = e => {
        e.preventDefault();
        console.log('Esto es lo que se tiene guardado en State');
        console.log(JSON.stringify(this.state));
    }
    render() {
        return (
            <form onSubmit={this.formulario}>
                <input onChange={this.cajita} type="text" name='variableA' value={this.state.variableA} />
                <input onChange={this.cajita} type="text" name='variableB' value={this.state.variableB} />
                <input onChange={this.cajita} type="text" name='variableC' value={this.state.variableC} />
                <button onClick={this.botoncillo}>XD</button>
            </form>
        )
    }
}

export default Formulario;