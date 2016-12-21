import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
export  class userList extends Component {
  renderUser = (user) => {
     return (
       <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <h4 className="card-text">{user.company.name}</h4>
        <a className="btn btn-primary" href = {user.website}>Email</a>
       </div>

    );
  };
componentWillMount() {
  this.props.fetchUsers();
}
  render() {
  //  console.log(this.props.fetchUsers());
     return (
       <div>
       {this.props.users.map(this.renderUser)}
       </div>

   );
}

}

const mapStateToProps = (state) => {
  console.log(state);
  return { users: state.usersReducer };
};

export default connect(mapStateToProps, actions)(userList);
