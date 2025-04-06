/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
  
      <div className="home-container">
        <nav className="navbar">

        <h1>Bank of React</h1>
        <div className="nav-links">

        <Link to="/userProfile">User Profile</Link>
     
        <Link to="/login">Login</Link>

        <Link to="/credits">Credits </Link>

        <Link to="/debits">Debits </Link>
</div>
</nav>

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