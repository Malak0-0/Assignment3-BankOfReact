/*==================================================
src/components/UserProfile.js

The UserProfile component is used to demonstrate the use of Route and Link.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import './Userprofile.css';


class UserProfile extends Component {
  render() {
    return (

      <div className="home-container"> 
      <Navbar /> 

      <main className="home-content">
      <div className="profile-card">
        
        <h1 className="profile-title">User Profile</h1>

        <div className="profile-info">
              <div className="info-row">
                <span className="label">Username:</span>
                <span>{this.props.userName}</span>
              </div>

              <div className="info-row">
                <span className="label">Member Since:</span>
                <span>{this.props.memberSince}</span>
              </div>
              </div>
           
        </div>
      </main>
      </div>
    );
  }
}

export default UserProfile;