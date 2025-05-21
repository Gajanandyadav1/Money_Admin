import React from 'react'; 

const AllUser = () => {
  const users = [
    {
      name: 'AARON',
      username: 'alex',
      userId: '----',
      sponsorId: '----',
      placementId: '----',
      walletBalance: '2.5',
      fundWallet: '50',
      password: '90900',
      mobile: '9999999',
      joiningDate: '2023 09 24 07:14:48',
      activeDate: '2024 10 07 06:48 pm',
      investedAmount: '$0',
      directMember: 1,
      directActive: 1,
      status: 'Active'
    },
    {
      name: 'Rajiv',
      username: 'AK49686',
      userId: 'alex',
      sponsorId: 'alex',
      placementId: 'alex',
      walletBalance: '2.5',
      fundWallet: '75',
      password: '12345',
      mobile: '54849549466',
      joiningDate: '2025 04 09 08:06:55',
      activeDate: '2025 04 09 02:15 pm',
      investedAmount: '$25',
      directMember: 1,
      directActive: 1,
      status: 'Active'
    },
    {
      name: 'Ram',
      username: 'AK66151',
      userId: 'AK49686',
      sponsorId: 'AK49686',
      placementId: 'AK49686',
      walletBalance: '128',
      fundWallet: '0',
      password: '12345',
      mobile: '8565656349',
      joiningDate: '2025 04 09 08:38:05',
      activeDate: '2025 04 09 02:16 pm',
      investedAmount: '$100',
      directMember: 0,
      directActive: 0,
      status: 'Active'
    }
  ];

  return (
    <div className="container my-4">
      <h5 className="fw-semibold mb-3">All Users</h5>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label>Start date:</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-6">
          <label>End date:</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-6">
          <label>Select id status:</label>
          <select className="form-select">
            <option>-- Select --</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <div className="col-md-6">
          <label>Search User:</label>
          <input className="form-control" placeholder="Name,Username,number" />
        </div>
      </div>

      <div className="mb-3">
        <button className="btn btn-success me-2">Search Now</button>
        <button className="btn btn-secondary">Reset</button>
      </div>

      <div className="table-responsive mt-5 ">
        <table className="table table-bordered text-center custom-table">
          <thead>
            <tr>
              <th>SR.No.</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Sponser ID</th>
              <th>Placement ID</th>
              <th>Wallet Balance</th>
              <th>Fund Wallet</th>
              <th>Password</th>
              <th>Mobile Number</th>
              <th>Joining Date</th>
              <th>Active Date</th>
              <th>Invested Amount</th>
              <th>Direct Member</th>
              <th>Direct Active</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.userId}</td>
                <td>{user.placementId}</td>
                <td>{user.walletBalance}</td>
                <td>{user.fundWallet}</td>
                <td>{user.password}</td>
                <td>{user.mobile}</td>
                <td>{user.joiningDate}</td>
                <td>{user.activeDate}</td>
                <td>{user.investedAmount}</td>
                <td>{user.directMember}</td>
                <td>{user.directActive}</td>
                <td>
                  <button className="btn btn-success btn-sm">Active</button>
                </td>
                <td>
                  <button className="btn btn-outline-success btn-sm me-1">
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser; 
