import React from 'react';

const dummyData = [
  { userId: 'AK66151', username: 'Ram', description: '4 Amount Is Credit To Your Account For Daily Income', amount: '$4.00', date: '2025-05-26 01:00:05' },
  { userId: 'AK49686', username: 'Rajiv', description: '1 Amount Is Credit To Your Account For Daily Income', amount: '$1.00', date: '2025-05-26 01:00:05' },
  { userId: 'AK66151', username: 'Ram', description: '4 Amount Is Credit To Your Account For Daily Income', amount: '$4.00', date: '2025-05-24 01:00:06' },
  { userId: 'AK49686', username: 'Rajiv', description: '1 Amount Is Credit To Your Account For Daily Income', amount: '$1.00', date: '2025-05-24 01:00:06' },
  { userId: 'AK66151', username: 'Ram', description: '4 Amount Is Credit To Your Account For Daily Income', amount: '$4.00', date: '2025-05-22 01:00:05' },
  { userId: 'AK49686', username: 'Rajiv', description: '1 Amount Is Credit To Your Account For Daily Income', amount: '$1.00', date: '2025-05-22 01:00:05' },
];

const DailyIncome = () => {
  return (
    <div className="container py-4">
      <h4 className="fw-bold mb-4">Daily income</h4>

      <div className="bg-white p-4 shadow rounded mb-4">
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Start date:</label>
            <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
          </div>
          <div className="col-md-6">
            <label>End date:</label>
            <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
          </div>
        </div>

        <div className="mb-3">
          <label>Search User</label>
          <input type="text" className="form-control" placeholder="Name,Username,number" />
        </div>

        <div className="mb-3 d-flex gap-2">
          <button className="btn btn-success">Search Now</button>
          <button className="btn btn-info text-white">Reset</button>
        </div>
      </div>

      <div className="bg-white p-3 shadow rounded">
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-header">
              <tr>
                <th>Sr. No.</th>
                <th>User Id</th>
                <th>Username</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.userId}</td>
                  <td>{item.username}</td>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DailyIncome;
 
