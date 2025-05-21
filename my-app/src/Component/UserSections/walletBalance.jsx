import React, { useState } from 'react'; 

const WalletBalance = () => {
  const [users] = useState([
    { name: 'AARON', userId: 'alex', mobile: '99999999', balance: 2.5 },
    { name: 'Rajiv', userId: 'AK49686', mobile: '5484949466', balance: 25 },
    { name: 'Ram', userId: 'AK66151', mobile: '8565656349', balance: 128 },
  ]);

  return (
    <div className="container my-4">
      <div className="card shadow rounded">
        <div className="card-body">
          <h5 className="mb-4 wallet-title">Users Wallet Balance</h5>

          <div className="row mb-3">
            <div className="col-md-3 mb-2">
              <label>Start date:</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3 mb-2">
              <label>End date:</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-6 mb-2">
              <label>Search User</label>
              <input type="text" className="form-control" placeholder="Name, Username, Number" />
            </div>
          </div>

          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-success">Search Now</button>
            <button className="btn btn-outline-primary">Reset</button>
          </div>

          <div className="table-responsive mt-5">
            <table className="table table-bordered text-center">
              <thead className="wallet-table-header text-white">
                <tr>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>User Id</th>
                  <th>Mobile Number</th>
                  <th>Wallet Balance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.userId}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.userId}</td>
                    <td>{user.mobile}</td>
                    <td>{user.balance}</td>
                    <td>
                      <button className="btn btn-info btn-sm text-white">Withdraw</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WalletBalance;

 
