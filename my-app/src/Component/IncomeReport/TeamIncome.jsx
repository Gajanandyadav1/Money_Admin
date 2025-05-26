import React from 'react';

const TeamIncome = () => {
  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Team Income</h4>

      <div className="bg-white p-4 shadow rounded">
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Pick a start date:</label>
            <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
          </div>
          <div className="col-md-6">
            <label>Pick a end date:</label>
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

        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-header">
              <tr>
                <th>SR. No.</th>
                <th>Username</th>
                <th>Details</th>
                <th>Receive From</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Time</th>
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

export default TeamIncome;
