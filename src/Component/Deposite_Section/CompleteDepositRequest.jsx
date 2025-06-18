import React from 'react';
import '../Deposite_Section/Deposit.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompleteDepositRequest = () => {
  return (
    <div className="container mt-4 complete-deposit-container">
      <div className="header mb-3">
        <button className="btn btn-light shadow-sm rounded-pill px-4 fw-semibold">
          Complete Deposite Request
        </button>
      </div>


      <div className="card "  style={{borderRadius:'0'}}>
        <div className="table-responsive">
          <table className="table   mb-0">
            <thead>
              <tr className="table-header  ">
                <th>SR. No.</th>
                <th>Username</th>
                <th>Amount in Dollars</th>
                <th>Trnx ID</th>
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

export default CompleteDepositRequest;
