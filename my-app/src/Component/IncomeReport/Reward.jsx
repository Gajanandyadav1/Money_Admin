import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Reward = () => {
  return (
    <div className="container mt-4 reward-income-container">
      <div className="reward-header mb-3">
        <button className="btn btn-light shadow-sm rounded-pill px-4 fw-semibold">Reward Income</button>
      </div>
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead>
              <tr className="reward-header-row text-white">
                <th>ID</th>
                <th>Username</th>
                <th>Details</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="text-start ps-3 text-muted">Result Not Found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reward;
