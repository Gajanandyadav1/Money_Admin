/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../env';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';

const PendingRequest = () => {

  const [show, setShow] = useState(false);
  const [show3, setShow3] = useState(false);
 const [reason, setrejectionReason] = useState(); 
  const [selectedIdResion, setSelectedIdResion] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
const [data, setdata] = useState()
const [selectedUser, setSelectedUser] = useState(null);
const [searchUsername, setSearchUsername] = useState("");
 const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page); // This will trigger useEffect → fetchData(page)
  }
};


  const WithdrawRequest =(page = 1)=>{

    try {
      const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/withdraw?status=Pending&page=${page}&username=${searchUsername}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
      if (result.status === 403) {
          alert("Session expired. Please login again.");
          localStorage.removeItem("token");
          window.location.href = "/";
          return; // stop further execution
        }
        
setdata(result?.data?.requests)
   setTotalPages(result.totalPages);
      setCurrentPage(result.currentPage);
  } )
  .catch((error) => console.error(error));
    } catch (error) {
      console.log(error)
    }
  }





    const RequestApprove =(id,status,reason)=>{
      try {
          const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "requestId": id,
    "status": status,
    "rejectionReason": reason,
  });
  
  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch(`${API_URL}/api/admin/v1/withdraw/approve-reject`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
     
      if(result.success === true){
           toast.success(result.message);
         
           setTimeout(()=>{
            WithdrawRequest()
            
          },1000)
      }
      else{ 
          toast.error(result.error.explanation);
          
      }
    })
    .catch((error) => console.error(error));
      } catch (error) {
           console.log(error)
      }
    }






   useEffect(() => {
    WithdrawRequest(currentPage);
  }, [currentPage]);

 
  return (
    <div>
      

      <Toaster/>
       <div className="container mt-4">
      <h5 className="fw-bold mb-4">  Withdraw Request</h5>

      <div className="card p-4"  >
         

                    <input
  type="text"
  className="form-control  mb-3 p-2 searchinputbox "
  placeholder="Search by UserId"
  value={searchUsername}
  onChange={(e) => setSearchUsername(e.target.value)}  style={{width:'50%'}}
/>

        <div className="table-responsive "   style={{height:'70vh', overflowY:'scroll'}}  >
          <table className="table table-bordered">
            <thead>
              <tr style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', color: 'white' }}>
                <th>SR. No.</th>
                <th>Amount</th>
                <th>Ac Number</th>
                <th>bankName  </th>
                <th>ifscCode  </th>
                <th>Remark</th>
                <th>status</th> 
                <th>Action</th> 
              </tr>
            </thead>
            <tbody>

              {
                data?.map((res,index)=>{
                  return(
                   <tr className='text-center'>
                <td>{index+1}</td>
                <td> <del> {res?.amount}</del> <br/> {res?.payableAmount}</td>
                <td>{res?.userDetails?.userDetails?.accountNumber}</td>
                <td>{res?.userDetails?.userDetails?.bankName}</td>
                <td>{res?.userDetails?.userDetails?.ifscCode}</td> 
                <td>{res?.remark}</td>
                <td>{res?.status}</td>
                <td>
                  {/* <button className='btn btn-primary'   onClick={()=>{handleShow(res?.id)}}>View More</button> */}
                  <button className='btn btn-primary'     onClick={() => {
    setSelectedUser(res);      // set selected user
    handleShow(res?.id);       // open modal
  }}>View More</button>
                
                 <button className='btn btn-success mx-2'  onClick={() => RequestApprove(res.id, "Approve")}>Approve </button>
<button   className='btn btn-danger '  onClick={() => {   handleShow3(res?.id); setSelectedIdResion(res.id);  }}>
  Reject
</button>
                </td>
            
              </tr>
                  )
                })
              }
              
            </tbody>
           
          </table>





          <ul className="pagination mt-5"  style={{display:'flex', justifyContent:'center'}}>
  <li className={`page-item ${currentPage === 1 && "disabled"}`}>
    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
  </li>

  {[...Array(totalPages)].map((_, index) => (
    <li key={index} className={`page-item ${currentPage === index + 1 && "active"}`}>
      <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
    </li>
  ))}

  <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
  </li>
</ul>

        </div>
      </div>
    </div>

 

      <Modal show={show} onHide={handleClose}  size='lg'>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
  {selectedUser && (
    <table className="table table-bordered">
      <thead>
        <tr style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', color: 'white' }}>
          <th>SR. No.</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{selectedUser?.userDetails?.name}</td>
          <td>{selectedUser?.userDetails?.mobile}</td>
          <td>
            <img
              src='https://avatars.githubusercontent.com/u/131365821?v=4'
              alt="profile image"
              style={{ width: '50px' }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )}
</Modal.Body>

      
      </Modal>







<Modal show={show3} onHide={handleClose3} size="lg">
        <Modal.Header closeButton>
          <Modal.Title> </Modal.Title>
        </Modal.Header>
        <Modal.Body>

 
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Rejection Reason</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=' Enter Rejection Reason.....' 
                 onChange={(e)=>{setrejectionReason(e.target.value)}}></textarea>
                </div>
                        <button
                        className="btn btn-success w-100 my-4 py-2"
                        onClick={() => RequestApprove(selectedIdResion, "Reject", reason)}
                        >
                        Submit
                        </button>
                        
               

        </Modal.Body> 
      </Modal>
    </div>
  )
}

export default PendingRequest
