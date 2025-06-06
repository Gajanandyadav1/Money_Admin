import React, { useEffect, useState } from 'react'; 
import { API_URL } from '../../env';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
const AllUser = () => {
 const [Data, setData]= useState([]);


 const navigat = useNavigate();
 const AllUser =()=>{
  try {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
const requestOptions = {
  method: "GET",
  headers: myHeaders, 
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/users`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.success == true){
      setData(result?.data?.users || []);
      console.log(result?.data?.users || []);
    }
  })
  .catch((error) => console.error(error));
  } catch (error) {
    console.error("Error fetching all users:", error);
  }
 }

 useEffect(() => {

  AllUser()

 }, [])
 

  return (
    <div className="container my-4">
      <h5 className="fw-semibold mb-3">All Users</h5>

      {/* <div className="row g-3 mb-3">
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
      </div> */}

      <div className="table-responsive mt-5 ">
        <table className="table   text-center custom-table p-5">
          <thead>
            <tr>   
               
              <th>SR.No.</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Gender</th>
              <th>Dob</th> 
              <th>Mobile Number</th>
              <th>profile</th>
              <th>walletBalance</th>
              <th>isBlocked</th>
              <th>isDeactivated</th> 
              <th>Status</th> 
              <th>Action</th> 
            </tr>
          </thead>
         <tbody>
  {Array.isArray(Data) && Data.length > 0 ? (
    Data.map((user, idx) => (
      <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{user?.name}</td>
        <td>{user?.username}</td>
        <td>{user?.gender}</td>
        <td>{user?.dob}</td>
        <td>{user?.mobile}</td>
        <td>{user?.profile}</td>
        <td>{user?.walletBalance}</td>
        <td>{user?.isBlocked ? 'Yes' : 'No'}</td>
        <td>{user?.isDeactivated ? 'Yes' : 'No'}</td>
        <td>{user?.status ? 'Active' : 'Inactive'}</td>
        <td>
          <button
            className="btn btn-success btn-sm"
            onClick={() => navigat(`/UserProfile/${user.id}`)}
          >
            Profile
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="12">
        <div className="text-center py-3 animate__animated animate__fadeIn">
          <span className="spinner-border text-primary me-2" role="status" />
          <span>No Data Found</span>
        </div>
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default AllUser; 
