import React from 'react';
import { Link } from 'react-router-dom';

import Listado from './../components/general/lists';

class Contact extends React.Component {
  constructor (props) {
    super(props);
    console.log('1 - Entrada al constructor()');
    this.state = {
      data: []
    };
  }
  componentDidMount () {
    console.log('3 - Entrada al componentDidMount()');
    this.timeoutId = setTimeout (() => {
      this.setState({
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ]
      })
    } ,3000)
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('5 - Entro al componentDidUpdate()');
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
    console.log('6 - Entro al componentWillUnmount()');
    clearTimeout (this.timeoutId);
  }
  render() {
    console.log('2/4 - Entrada al render()')
    return (
      <React.Fragment>
        <p>Ir a</p>
        <Link to="/About" className="btn btn-primary">About</Link>
        <h2>Pagina de contacto</h2>
        <p>aca deben ir mas cosas</p>
        <Listado info={this.state.data} />
      </React.Fragment>
    )
  }
}

export default Contact