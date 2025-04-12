/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import AccountBalance from './AccountBalance';
import './Credits.css'; 

const Debits = ({ debits, accountBalance, addDebit }) => {

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
    const debit = {
      description: description.trim(),
      amount: parseFloat(amount),
      date,
    };
    addDebit(debit);
    setDescription('');
    setAmount('');
  };

  const renderDebits = () => {
    return debits.slice().reverse().map((debit, index) => (
      <li key={debit.id || index} className="credit-card">
        <div className="credit-amount">-${parseFloat(debit.amount).toFixed(2)}</div>
        <div className="credit-description">{debit.description}</div>
        <div className="credit-date">{debit.date.slice(0, 10)}</div>
      </li>
    ));
  };


  // // Create the list of Debit items
  // let debitsView = () => {
  //   const { debits } = props;
  //   return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
  //     let date = debit.date.slice(0,10);
  //     return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
  //   });
  // }
  // Render the list of Debit items and a form to input new Debit item
  return (
    <div className="home-container">

      < Navbar/>
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
            <button type="submit" className="form-button">Add Debit</button>
          </form>

          <div className="credit-history">
            <h3>Debit History</h3>
            <ul className="credit-list">{renderDebits()}</ul>
          </div>
        </div>
      </main>
</div>
  );
};

export default Debits;