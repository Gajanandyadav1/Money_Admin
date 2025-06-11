import React, { useEffect, useState } from 'react'; 
import { API_URL } from '../../env';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
const AllUser = () => {
 const [Data, setData]= useState([]); 
const [searchTerm, setSearchTerm] = useState("");
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1); 

 const navigate = useNavigate();
 const AllUser =(name)=>{
  try {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
const requestOptions = {
  method: "GET",
  headers: myHeaders, 
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/users?name=${name}&page=${page}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.success == true){
      setData(result?.data?.users || []);
     setTotalPages(result?.data?.totalPages || 1); 
    }
  })
  .catch((error) => console.error(error));
  } catch (error) {
    console.error("Error fetching all users:", error);
  }
 }

 useEffect(() => {

  AllUser(searchTerm,page)

 }, [searchTerm,page])
 

  return (
    <div className="container my-4">
      <h5 className="fw-semibold mb-3">All Users</h5>

       <div className="row g-3 mb-3">
         
        <div className="col-md-6">
          <label>Search Name </label>
          <input className='form-control mt-2 py-2'
            type="text"
            placeholder="Search user by name"
            value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            onChange={(e) => { const value = e.target.value;
  setSearchTerm(value);    setPage(1);   AllUser(value, 1);      
}}
          />
        </div>
      </div>

      

     <div className="table-responsive mt-4   "   style={{height:'70vh', overflowY:'scroll'}}>
        <table className="table text-center custom-table p-5" >
          <thead>
            <tr>
              <th>SR.No.</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Mobile Number</th>
              <th>Profile</th>
              <th>Wallet Balance</th>
              <th>Is Blocked</th>
              <th>Is Deactivated</th>
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
                  <td>{user?.mobile}</td>
                  <td>
                    <img
                      src="https://avatars.githubusercontent.com/u/131365821?v=4"
                      style={{ width: "50px", borderRadius: "10px" }}
                    />
                  </td>
                  <td>{user?.walletBalance}</td>
                  <td>{user?.isBlocked ? "Yes" : "No"}</td>
                  <td>{user?.isDeactivated ? "Yes" : "No"}</td>
                  <td>{user?.status ? "Active" : "Inactive"}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => navigate(`/UserProfile/${user.id}`)}
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
                    <span
                      className="spinner-border text-primary me-2"
                      role="status"
                    />
                    <span>No Data Found</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>



        <div className="d-flex justify-content-center gap-2 mt-3">
  <button
    className="btn btn-primary"
    disabled={page === 1}
    onClick={() => setPage(page - 1)}
  >
    Previous
  </button>

  <span className="  align-self-center">Page {page}</span>

  <button
    className="btn btn-primary"
    disabled={page === totalPages}
    onClick={() => setPage(page + 1)}
  >
    Next
  </button>
</div>

      </div>
    </div>
  );
};

export default AllUser; 
