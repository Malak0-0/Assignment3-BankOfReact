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



const handleSubmit = (e) => {
  e.preventDefault();
  const date = new Date().toISOString().slice(0, 10);

  // new credit object
  const credit = {
    description: description.trim(),  
    amount: parseFloat(amount),       
    date
  };

  // Call App.js function passed via props
  addCredit(credit);

  // reset fields
  setDescription('');
  setAmount('');
};

// Render credit history to be displayed 
const renderCredits = () => {
  return credits.slice().reverse().map((credit) => (
    <li key={credit.id} className="credit-item">
      <div className="credit-info">
        <div className="credit-amount">{credit.amount}</div>
        <div className="credit-description">{credit.description}</div>
        <div className="credit-date">{credit.date.slice(0, 10)}</div>
      </div>
    </li>
  ));
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