import React from 'react'

const PendingRequest = () => {
  return (
    <div>
       <div className="container mt-4">
      <h4 className="fw-bold mb-4" style={{ borderRadius: '25px', padding: '10px 20px', backgroundColor: '#f8f9fa', display: 'inline-block' }}>Pending Withdraw</h4>

      <div className="card p-4">
        <div className="row mb-3">
          <div className="col-md-3">
            <label>Start date:</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-3">
            <label>End date:</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-3">
            <label>Select status</label>
            <select className="form-select">
              <option>----Select----</option>
            </select>
          </div>
          <div className="col-md-3">
            <label>Search User</label>
            <input type="text" className="form-control" placeholder="Name,Username,number" />
          </div>
        </div>

        <div className="d-flex gap-2 mb-3">
          <button className="btn btn-success">Search Now</button>
          <button className="btn btn-info text-white">Reset</button>
          <button className="btn btn-danger ms-auto">Export In Excel</button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', color: 'white' }}>
                <th>SR. No.</th>
                <th>Name</th>
                <th>Username</th>
                <th>Amount $</th>
                <th>Detail</th>
                <th>Wallet Type</th>
                <th>Request Date</th>
                <th>Transfer Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Rajiv</td>
                <td>AK49686</td>
                <td>$ 17</td>
                <td className="text-center"><i className="bi bi-info-circle"></i></td>
                <td>Invested Wallet</td>
                <td>2025-04-19</td>
                <td>2025-04-19</td>
                <td><span className="badge bg-warning text-dark">Pending</span></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="fw-bold">Total Amount</td>
                <td className="fw-bold">$ 17.00</td>
                <td colSpan="5"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PendingRequest
