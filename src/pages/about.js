import React from 'react';
import { Link } from 'react-router-dom';

import Prueba from './../components/prueba';
import Form from './../components/forms/formulario';

class About extends React.Component {
    state = {
        form: {
            variableA: '',
            variableB: '',
            variableC: ''
        }
    }
    CambioFormulario = e => {
        const NextForm = this.state.form;
        NextForm[e.target.name] = e.target.value;
        this.setState({
            form: NextForm
            /*form: {
                ... this.state.form,
                [e.target.name]: e.target.value
            }*/
        });
    }
    render() {
        return (<div>
                <p>Ir a</p>
                <Link to="/Contact" className="btn btn-success">Contacto</Link>
                <Prueba
                    saludo="Mierda!"
                    variableA={this.state.form.variableA}
                    variableB={this.state.form.variableB}
                    variableC={this.state.form.variableC}
                />
                <p>Formulario</p>
                <Form
                    cambiosForm={this.CambioFormulario}
                    formValues={this.state.form}
                />
            </div>
        )
    }
}

export default About;