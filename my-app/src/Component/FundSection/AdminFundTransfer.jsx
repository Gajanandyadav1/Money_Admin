import React, { useState } from 'react';
import '../FundSection/Fund.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminFundTransfer = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ startDate, endDate, searchTerm });
    // You can filter the data here
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setSearchTerm('');
  };

  return (
    <div className="container mt-4 admin-transfer-container">
      <div className="admin-header mb-3">
        <button className="btn btn-light shadow-sm rounded-pill px-4 fw-semibold">Admin Fund Transfer</button>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSearch}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Start date:</label>
                <input
                  type="date"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="dd-mm-yyyy"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">End date:</label>
                <input
                  type="date"
                  className="form-control"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="dd-mm-yyyy"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Search To User</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name,Username,number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="d-flex gap-2 justify-content-center">
              <button type="submit" className="btn btn-success px-4">Search Now</button>
              <button type="button" onClick={handleReset} className="btn btn-info text-white px-4">Reset</button>
            </div>
          </form>
        </div>
      </div>

      <div className="card shadow-sm mt-4">
        <div className="table-responsive">
          <table className="table   mb-0">
            <thead>
              <tr className="admin-table-header text-white">
                <th>SR. No.</th>
                <th>From</th>
                <th>To</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Admin</td>
                <td>alex</td>
                <td>AARON</td>
                <td>$250.00</td>
                <td>2025-04-09</td>
                <td>14:10:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminFundTransfer;
