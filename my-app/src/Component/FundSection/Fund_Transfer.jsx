import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../FundSection/Fund.css'

const Fund_Transfer = () => {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fund Transfer:', { userId, amount });
    // Handle fund transfer logic here
  };

  return (
    <div className="container mt-4 fund-transfer-container">
      <div className="fund-header mb-3">
        <button className="btn btn-light shadow-sm rounded-pill px-4 fw-semibold">Fund Transfer</button>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userId" className="form-label fw-semibold">User ID</label>
              <input
                type="text"
                className="form-control"
                id="userId"
                placeholder="Enter Your User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="amount" className="form-label fw-semibold">Amount $</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success px-4">Fund Transfer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fund_Transfer;
