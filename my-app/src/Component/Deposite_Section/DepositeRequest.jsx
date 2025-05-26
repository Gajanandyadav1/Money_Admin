import React, { useState } from 'react';
import '../Deposite_Section/Deposit.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DepositRequest = () => {
  const [status, setStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
     console.log({ status, searchTerm });
  };

  const handleReset = () => {
    setStatus('');
    setSearchTerm('');
  };

  return (
    <div className="container mt-4 deposit-request-container">
      <div className="deposit-header mb-3">
        <button className="btn btn-light shadow-sm rounded-pill px-4 fw-semibold">Deposite Request</button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSearch}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Select status</label>
                <select
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">----Select----</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Search User</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name,Username,number"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex gap-2 justify-content-center">
              <button type="submit" className="btn btn-success px-4">Search Now</button>
              <button type="button" onClick={handleReset} className="btn btn-info text-white px-4">Reset</button>
            </div>
          </form>
        </div>
      </div>

      <div className="card shadow-sm mt-4" style={{borderRadius: '0px'}}>
        <div className="table-responsive">
          <table className="table   mb-0">
            <thead>
              <tr className="table-header  ">
                <th>SR. No.</th>
                <th>Username</th>
                <th>Amount in Dollars</th>
                <th>Trnx Id</th>
                <th>Trnx Status</th>
                <th>Trnx Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7">Result Not Found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepositRequest;
 
