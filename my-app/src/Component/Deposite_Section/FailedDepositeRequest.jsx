import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Deposite_Section/Deposit.css';

const FailedDepositeRequest = () => {
  return (
    <div className="container mt-4 failed-deposit-container">
      <div className="header mb-3">
        <button className="btn btn-light shadow-sm rounded-pill px-4 fw-semibold">
          Failed Deposite Request
        </button>
      </div>

      <div className="card shadow-sm"   style={{borderRadius:'0'}}>
        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead>
              <tr className="table-header text-white">
                <th>SR. No. </th>
                <th>Username</th>
                <th>Amount in Dollars </th>
                <th>Trnx ID </th>
                <th>Apply Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">Result Not Found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FailedDepositeRequest;
