/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import AccountBalance from './AccountBalance';
import './Credits.css';
import Navbar from './Navbar';


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
  return credits.slice().reverse().map((credit, index) => (
    <li key={index} className="credit-card">
      <div className="credit-amount">${credit.amount.toFixed(2)}</div>
      <div className="credit-description">{credit.description}</div>
      <div className="credit-date">{credit.date.slice(0, 10)}</div>
    </li>
  ));
};


  return (
<div className="home-container">
      <Navbar />

      <main className="home-content">
        <div className="credit-card-container">
          <h2 className="credit-balance-title">
            <AccountBalance accountBalance={accountBalance} />
          </h2>

          <form onSubmit={handleSubmit} className="credit-form">
            <div className="form-row">
              <label htmlFor="amount" className="form-label">Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={amount}
                onChange={handleFieldChange}
                className="form-input"
                required
                min="0.01"
                step="0.01"
              />
            </div>

            <div className="form-row">
              <label htmlFor="description" className="form-label">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={handleFieldChange}
                className="form-input"
                required
              />
            </div>

            <button type="submit" className="form-button">Add Credit</button>
          </form>

          <div className="credit-history">
            <h3>Credit History</h3>
            <ul className="credit-list">{renderCredits()}</ul>
          </div>

          <Link className="profile-link" to="/">← Return to Home</Link>
        </div>
      </main>
    </div>
  );
};

export default Credits;