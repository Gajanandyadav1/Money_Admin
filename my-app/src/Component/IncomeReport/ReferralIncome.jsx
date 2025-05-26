import React from 'react'

const ReferralIncome = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
                   <div className="container py-4">
      <h4 className="mb-4 fw-bold">Referral Income</h4>

      <div className="bg-white p-4 shadow rounded">
        <div className="row mb-3">
          <div className="col-md-4">
            <label>Start date:</label>
            <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
          </div>
          <div className="col-md-4">
            <label>End date:</label>
            <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
          </div>
          <div className="col-md-4">
            <label>Search User</label>
            <input type="text" className="form-control" placeholder="Name,Username,number" />
          </div>
        </div>

        <div className="mb-3 d-flex gap-2">
          <button className="btn btn-success">Search Now</button>
          <button className="btn btn-info text-white">Reset</button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-header">
              <tr>
                <th>Sr. No.</th>
                <th>User Id</th>
                <th>User Name</th>
                <th>Details</th>
                <th>Receive From</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>AK49686</td>
                <td>Rajiv</td>
                <td>10 Is Credit To Your Account For Refer Income</td>
                <td>AK66151</td>
                <td>$10.00</td>
                <td>2025-04-09</td>
                <td>14:16:00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>alex</td>
                <td>AARON</td>
                <td>2.5 Is Credit To Your Account For Refer Income</td>
                <td>AK49686</td>
                <td>$2.50</td>
                <td>2025-04-09</td>
                <td>14:15:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralIncome
