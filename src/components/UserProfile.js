/*==================================================
src/components/UserProfile.js

The UserProfile component is used to demonstrate the use of Route and Link.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';


class UserProfile extends Component {
  render() {
    return (

      <div className="home-container"> 
      <Navbar /> 

      <main className="home-content">
      <div className="profile-card">
        <h1 className="profile-heading">User Profile</h1>

        <div className="profile-item">
          <span className="label">Username: </span> {this.props.userName}</div>
          <div className="profile-item">
          <span className="label">Member Since:</span>  {this.props.memberSince}</div>
  
          <Link className="profile-link" to="/">← Return to Home</Link>
      </div>
      </main>
      </div>
    );
  }
}

export default UserProfile;