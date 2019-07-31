import React from 'react';

class Formulario extends React.Component {
    cajita = (e) => {
        console.log('XD => '+JSON.stringify({
            a: e.target.value,
            b: e.target.name
        }));
    }
    botoncillo = (e) => {
        console.log('Boton aprimido');
    }
    formulario = (e) => {
        e.preventDefault();
        console.log('Entro a funcion de envio de formulario que no envia nada aun XD');
    }
    render() {
        return (
            <form onSubmit={this.formulario}>
                <input onChange={this.cajita} name='variableA' />
                <button onClick={this.botoncillo}>XD</button>
            </form>
        )
    }
}

export default Formulario;