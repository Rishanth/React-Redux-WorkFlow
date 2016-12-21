import React, { Component, PropTypes } from 'react';
import Header from './Header';
import UserList from './userList';
export default class App extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  render() {
    return (
      <div>
        <Header />
        <UserList />
        { this.props.children }
      </div>
    );
  }
}
