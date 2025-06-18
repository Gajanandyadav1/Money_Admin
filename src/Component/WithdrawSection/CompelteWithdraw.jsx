import React from 'react'

const CompelteWithdraw = () => {
  return (
    <div>
         <div className="container my-4">
      <div className="box p-4 rounded shadow-sm mb-4 bg-white">
        <h5 className="fw-bold mb-3">Completed Withdraw</h5>




        

        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label">Start date:</label>
            <input type="date" className="form-control" />
          </div>

          <div className="col-md-3">
            <label className="form-label">End date:</label>
            <input type="date" className="form-control" />
          </div>

          <div className="col-md-3">
            <label className="form-label">Select status</label>
            <select className="form-select">
              <option>----Select----</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">Search User</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name, Username, number"
            />
          </div>
        </div>

        <div className="mt-3 d-flex flex-wrap gap-2">
          <button className="btn btn-success">Search Now</button>
          <button className="btn btn-info text-white">Reset</button>
          <button className="btn btn-danger">Export In Excel</button>
        </div>
      </div>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-bordered text-center">
          <thead className="table-header">
            <tr>
              <th>SR. No.</th>
              <th>Name</th>
              <th>Username</th>
              <th>Amount $</th>
              <th>Detail</th>
              <th>Request Date</th>
              <th>Tranfer Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8">Result Not Found</td>
            </tr>
          </tbody>
        </table>
        <div className="table-footer d-flex justify-content-between px-3 py-2 fw-bold bg-light">
          <span>Total Amount</span>
          <span>$ 0.00</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CompelteWithdraw
