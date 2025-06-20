/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'; 
import { API_URL, image_URL } from '../../env';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import toast, { Toaster } from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AllUser = () => {
 const [Data, setData]= useState([]); 
const [searchTerm, setSearchTerm] = useState("");
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1); 

 const navigate = useNavigate();
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 const AllUser =(value, page = 1)=>{
  try {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
const requestOptions = {
  method: "GET",
  headers: myHeaders, 
  redirect: "follow"
};

// fetch(`${API_URL}/api/admin/v1/users?username=${name}&page=${page}`, requestOptions)
    fetch(`${API_URL}/api/admin/v1/users?user=${value}&username=${value}&page=${page}`, requestOptions)

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
 












 const BlogUnblock = (userId) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${API_URL}/api/admin/v1/users/block/unblock/${userId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          toast.success(result.message);
          AllUser();  
        } else {
          toast.error(result.error?.explanation  );
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  } catch (error) {
    console.error("Try-catch error:", error);
  }
};

const [showModal, setShowModal] = useState(false);
const [selectedUserId, setSelectedUserId] = useState(null);
const [newPassword, setNewPassword] = useState("");


const handleChangePassword = () => {
  if (!selectedUserId || !newPassword) {
    alert("User ID or password missing");
    return;
  }

  // alert(`Changing password for user ID: ${selectedUserId}`);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    `Bearer ${localStorage.getItem("token")}` // use dynamic token
  );

  const raw = JSON.stringify({
    user: selectedUserId,
    password: newPassword,
  });

  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${API_URL}/api/admin/v1/users/update/password`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success == true) {
        toast.success(result?.message) 
        setShowModal(false);
      } else {
      toast.error(result?.message)
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred.");
    });
};

  return (
    <div className="container my-4">

      <Toaster/>
      <h5 className="fw-semibold mb-3">All Users</h5> 
       <div className="row g-3 mb-3"> 
        <div className="col-md-6 ">
          <label>Search User ID </label>
          <input
  className="form-control mt-2 py-2"
  type="text"
  placeholder="Search by User ID or Username"
  value={searchTerm}
  onChange={(e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setPage(1);
    AllUser(value, 1);
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
              <th>User ID</th>
              <th>Mobile Number</th>
              <th>Profile</th>
              <th>Joining Date</th>
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
                      src={user?.profile ? `${image_URL}/${user.profile}` : "https://avatars.githubusercontent.com/u/131365821?v=4"}
                      style={{ width: "50px", borderRadius: "10px" }}
                    />
                  </td>
                <td>{new Date(user?.createdAt).toLocaleDateString()}</td>
                  <td>{user?.isBlocked ? "Yes" : "No"}</td>
                  <td>{user?.isDeactivated ? "Yes" : "No"}</td>
                  <td>{user?.status ? "Active" : "Inactive"}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm p-2"
                      onClick={() => {navigate(`/UserProfile/${user.id}`);handleShow()}}
                    >
                      Profile
                    </button>
   <button
  className={`btn btn-sm mx-2 p-2 ${user.isBlocked ? 'btn-success' : 'btn-danger'}`}
  onClick={() => BlogUnblock(user.id, user.isBlocked)}
>
  {user.isBlocked ? 'Unblock' : 'Block'}
</button>
   <button
  className={`btn btn-sm mx-2 p-2 ${user.isBlocked ? 'btn-success' : 'btn-danger'}`}
  onClick={() => {
    setSelectedUserId(user.id);
    setShowModal(true);
    setNewPassword(""); // Clear previous password input
  }}
>
 Change Password
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




<Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Change Password</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleChangePassword();
      }}
    >
      <div className="mb-3">
        <label htmlFor="newPassword" className="form-label">
          New Password
        </label>
        <input
          type="text"
          className="form-control"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Change Password
      </button>
    </form>
  </Modal.Body>
</Modal>

    </div>
  );
};

export default AllUser; 
