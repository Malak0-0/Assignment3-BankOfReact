import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => (
  <nav className="navbar">
    <h1 className="bank-name">Bank of React</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/userProfile">User Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/credits">Credits</Link>
      <Link to="/debits">Debits</Link>
    </div>
  </nav>
);

export default Navbar;
