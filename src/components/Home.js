/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';


class Home extends Component {
  render() {
    return (
  
      <div className="home-container">
              <Navbar /> 
<main className="home-content">
  <div className="card-container">
    <h2>Welcome back!</h2>
    <AccountBalance accountBalance={this.props.accountBalance} />
  </div>
</main>

        
      </div>
    );
  }
}

export default Home;