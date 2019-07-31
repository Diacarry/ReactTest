    import React from 'react';

class Formulario extends React.Component {
    /*state = {};*/
    /*cajita = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }*/
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
                <input onChange={this.props.cambiosForm} type="text" name='variableA' value={this.props.formValues.variableA} />
                <input onChange={this.props.cambiosForm} type="text" name='variableB' value={this.props.formValues.variableB} />
                <input onChange={this.props.cambiosForm} type="text" name='variableC' value={this.props.formValues.variableC} />
                <button onClick={this.botoncillo}>XD</button>
            </form>
        )
    }
}

export default Formulario;