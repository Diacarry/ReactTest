import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div className="container-fluid">
            <Link className="Navbar__brand" to="/index">
              <span className="font-weight-light">Mist</span>
              <span className="font-weight-bold">erio</span>
            </Link>
          </div>
        </React.Fragment>
      );
    }
}
  
export default Navbar;