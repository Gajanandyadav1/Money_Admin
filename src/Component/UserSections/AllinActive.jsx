import React from 'react'; 
import '../../App.css';
const AllinActive = () => {
  const users = []; // No inactive users

  return (
    <div className="container my-4">
      <h5 className="fw-semibold mb-3">All In-Active</h5>

      <div className="row g-3 mb-3">
        <div className="col-md-3">
          <label>Start date:</label>
          <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
        </div>
        <div className="col-md-3">
          <label>End date:</label>
          <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
        </div>
        <div className="col-md-3">
          <label>Select id status:</label>
          <select className="form-select">
            <option>----Select----</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>Search User</label>
          <input type="text" className="form-control" placeholder="Name,Username,number" />
        </div>
      </div>

      <div className="mb-3">
        <button className="btn btn-success me-2">Search Now</button>
        <button className="btn btn-info text-white">Reset</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered text-center custom-table">
          <thead>
            <tr>
              <th>SR.No.</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Password</th>
              <th>Mobile Number</th>
              <th>Joining Date</th>
              <th>Active Date</th>
              <th>Direct Member</th>
              <th>Direct Active</th>
              <th>Sponser ID</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="12" className="text-start ps-4">Result Not Found</td>
              </tr>
            ) : (
              users.map((user, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.mobile}</td>
                  <td>{user.joiningDate}</td>
                  <td>{user.activeDate}</td>
                  <td>{user.directMember}</td>
                  <td>{user.directActive}</td>
                  <td>{user.sponsorId}</td>
                  <td>{user.status}</td>
                  <td>{/* Actions */}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllinActive;

 
