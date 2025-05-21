import React from 'react';
import './PayoutSummary.css';

const PayoutSummary = () => {
  const data = [
    { date: '2025-05-21', userId: 'AK6615I', username: 'Ram', trade: '$4.00', sponsor: '$0.00', match: '$0.00', total: '$4.00' },
    { date: '2025-05-21', userId: 'AK49686', username: 'Rajiv', trade: '$1.00', sponsor: '$0.00', match: '$0.00', total: '$1.00' },
    { date: '2025-05-20', userId: 'AK6615I', username: 'Ram', trade: '$4.00', sponsor: '$0.00', match: '$0.00', total: '$4.00' },
    { date: '2025-05-20', userId: 'AK49686', username: 'Rajiv', trade: '$1.00', sponsor: '$0.00', match: '$0.00', total: '$1.00' },
    { date: '2025-05-19', userId: 'AK6615I', username: 'Ram', trade: '$4.00', sponsor: '$0.00', match: '$0.00', total: '$4.00' },
    { date: '2025-05-19', userId: 'AK49686', username: 'Rajiv', trade: '$1.00', sponsor: '$0.00', match: '$0.00', total: '$1.00' },
    { date: '2025-05-17', userId: 'AK6615I', username: 'Ram', trade: '$4.00', sponsor: '$0.00', match: '$0.00', total: '$4.00' }
  ];

  return (
    <div className="container my-4">
      <h5 className="fw-semibold mb-3">Payout Summary</h5>

      <div className="row g-3 mb-3">
        <div className="col-md-3">
          <label>Start date:</label>
          <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
        </div>
        <div className="col-md-3">
          <label>End date:</label>
          <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
        </div>
        <div className="col-md-6">
          <label>Search User</label>
          <input type="text" className="form-control" placeholder="Name,Username,number" />
        </div>
      </div>

      <div className="mb-3">
        <button className="btn btn-success me-2">Search Now</button>
        <button className="btn btn-info text-white">Reset</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered text-center custom-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Date</th>
              <th>User Id</th>
              <th>Username</th>
              <th>Trade Income</th>
              <th>Sponsor Income</th>
              <th>Matching Income</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{row.date}</td>
                <td>{row.userId}</td>
                <td>{row.username}</td>
                <td>{row.trade}</td>
                <td>{row.sponsor}</td>
                <td>{row.match}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayoutSummary;
