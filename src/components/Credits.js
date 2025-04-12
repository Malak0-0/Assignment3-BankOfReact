/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
//import {Link} from 'react-router-dom';
import React, { useState } from 'react';
//import AccountBalance from './AccountBalance';
import './Credits.css';
//import Navbar from './Navbar';




const Credits = ({ credits, accountBalance, addCredit }) => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');


  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    if (name === 'description') setDescription(value);
    else if (name === 'amount') setAmount(value);

};






  return (
    <div>
      <h1>Credits</h1>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
};


export default Credits;