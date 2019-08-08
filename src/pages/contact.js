import React from 'react';
import { Link } from 'react-router-dom';

import Listado from './../components/general/lists';

class Contact extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {
        results: []
      }
    };
  }
  componentDidMount () {
    this.RecorrerPersonajes ();
  }
  componentDidUpdate (prevProps, prevState) {
    console.log({
      prevProps: prevProps,
      prevState: prevState
    });
    console.log({
      prevProps: this.props,
      prevState: this.state
    });
  }
  componentWillUnmount () {
    clearTimeout (this.timeoutId);
  }
  RecorrerPersonajes = async () => {
    this.setState ({
      loading: true,
      error: null
    });
    try {
      const respuesta = await fetch ('https://rickandmortyapi.com/api/character/');/* LLamado que se debe esperar */
      const info = await respuesta.json(); /** Extrae la informacion de la llamada anterior y convertirla en formato .json */
      this.setState({
        loading: false,
        data: info
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }
  render() {
    if (this.state.error) {
      return `Maldita sea, Algo salio mal!!!, y este fue: ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <p>Ir a</p>
        <Link to="/About" className="btn btn-primary">About</Link>
        <h2>Llamado a un Api</h2>
        <p>Acontinuacion se listan la de personajes</p>
        <Listado info={this.state.data.results} />
        { this.state.loading && (
          <p>Cargando</p>
        )}
      </React.Fragment>
    )
  }
}

export default Contact