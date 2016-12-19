import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
export  class Header extends Component {

   authButton = () => {
     if (this.props.Authenticated) {
       return <button onClick = {() => this.props.authenticate(false)}>LogOut</button>;
     }
     else {
       return <button onClick = {() => this.props.authenticate(true)}>Login</button>;
     }
   }
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
             <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Resources">Resources</Link>
          </li>
          <li className="nav-item">
             {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = (state) => (
  { Authenticated : state.authenticationReducer }
// console.log(state)
);


export default connect(mapStateToProps,actions)(Header);
