import React from 'react'; 
import '../../App.css';
const AllActiveUsers = () => {
  const users = [
    {
      name: 'AARON',
      username: 'alex',
      password: '90000',
      mobile: '99999999',
      joiningDate: '2023-09-24 07:14:48',
      activeDate: '2024-10-07 06:48 pm',
      invested: '$0',
      directMember: 1,
      directActive: 1,
      sponsorId: '----',
      status: 'Active'
    },
    {
      name: 'Rajiv',
      username: 'AK49686',
      password: '12345',
      mobile: '54849549466',
      joiningDate: '2025-04-09 08:06:55',
      activeDate: '2025-04-09 02:15 pm',
      invested: '$25',
      directMember: 1,
      directActive: 1,
      sponsorId: 'alex',
      status: 'Active'
    },
    {
      name: 'Ram',
      username: 'AK66151',
      password: '12345',
      mobile: '8565656349',
      joiningDate: '2025-04-09 08:38:05',
      activeDate: '2025-04-09 02:16 pm',
      invested: '$100',
      directMember: 0,
      directActive: 0,
      sponsorId: 'AK49686',
      status: 'Active'
    }
  ];

  return (
    <div className="container my-4">
      <h5 className="fw-semibold mb-3">All Active Users</h5>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label>Start date:</label>
          <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
        </div>
        <div className="col-md-6">
          <label>End date:</label>
          <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
        </div>
        <div className="col-md-6">
          <label>Select id status:</label>
          <select className="form-select">
            <option>----Select----</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
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

      <div className="table-responsive mt-4 pt-4">
        <table className="table table-bordered text-center custom-table">
          <thead>
            <tr>
              <th>SR. No.</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Password</th>
              <th>Mobile Number</th>
              <th>Joining Date</th>
              <th>Active Date</th>
              <th>Invested Amount</th>
              <th>Direct Member</th>
              <th>Direct Active</th>
              <th>Sponser ID</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.mobile}</td>
                <td>{user.joiningDate}</td>
                <td>{user.activeDate}</td>
                <td>{user.invested}</td>
                <td>{user.directMember}</td>
                <td>{user.directActive}</td>
                <td>{user.sponsorId}</td>
                <td>
                  <button className="btn btn-success btn-sm">Active</button>
                </td>
                <td>
                  <button className="btn btn-outline-success btn-sm">
                    <i className="bi bi-box-arrow-in-right me-1"></i> Login
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

export default AllActiveUsers;

 
