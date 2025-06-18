/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { API_URL } from '../../env';
import '../../App.css'
import '../FundSection/Fund.css'

import toast, { Toaster } from 'react-hot-toast';

function UserRequest() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const [reason, setrejectionReason] = useState(); 
  const [selectedIdResion, setSelectedIdResion] = useState(null);
const [show, setShow] = useState(false);
const [show2, setShow2] = useState(false);
const [show3, setShow3] = useState(false);
const [selectedPlanItem, setSelectedPlanItem] = useState(null);
const [selectedUserItem, setSelectedUserItem] = useState(null);
const [selectedUserItem2, setSelectedUserItem2] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${API_URL}/api/admin/v1/userpurchases/requests?page=${currentPage}&limit=10&status=Pending`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const result = await res.json();
      setData(result?.data?.requests || []);
    //   setPlanDetails(result?.data?.requests?.planDetails || []);
      setTotalPages(result?.data?.totalPages || 1);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };




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

fetch(`${API_URL}/api/admin/v1/userpurchases/requests`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
   
    if(result.success === true){
         toast.success(result.message);
        fetchData();  

        setTimeout(()=>{
          handleShow3()
          setrejectionReason('')
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
    fetchData();
  }, [currentPage]);

  return (
    <div className="container mt-4">
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <h4 className="mb-3">Purchase Requests</h4>
      <div className="table-responsive">
        <table className="table  table-striped">
          <thead className=" text-center p-4" style={{ backgroundColor: '#f8f9fa' , borderRadius: '5px' }}>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>UserID</th>
              <th>Plan</th>
              <th>Price</th>
              <th>UTR</th>
              <th>Evidence</th>
               <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item.id}>
                <td>{(currentPage - 1) * 10 + index + 1}</td>
                <td>{item.userDetails?.name}</td>
                <td>{item.userDetails?.username }</td>
                <td>{item.planDetails?.name}</td>
                <td>₹ {item.planDetails?.price}</td>
                <td>{item.utr} </td>
               <td>
  <img
    src={item.purchaseEvidence}
    alt="Proof"
    width="60"
    height="40"
    style={{ objectFit: 'cover', borderRadius: '5px' }}
  />
</td>

      <td >  {item?.status}  </td>

      <td >  <button className='btn btn-success'  onClick={() => RequestApprove(item.id, "Approve")}>Approve </button>
<button   className='btn btn-danger ms-2'  onClick={() => {   handleShow3(item?.id); setSelectedIdResion(item.id);  }}>
  Reject
</button>
            
 <button   className="btn btn-primary mx-2"
  onClick={() => {   setSelectedPlanItem(item);   handleShow(item?.id);      // show the modal
  }}
>
  Plan Details
</button> 
    {/* <button className='btn btn-primary ms-2'  onClick={()=>{handleShow2(item?.id)}}>User Details</button> */}
   <button
  className='btn btn-primary ms-2'
  onClick={() => {
    setSelectedUserItem2(item);
    handleShow2(item?.id);
  }}
>
  User Details
</button>

  </td>




              </tr>




            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <button  className="btn btn-primary"   disabled={currentPage === 1}  onClick={() => setCurrentPage((prev) => prev - 1)}   style={{cursor:'pointer'}}   >
          Prev
        </button>
        <span className='mx-3'>Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-primary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
       style={{cursor:'pointer'}} >
          Next
        </button>
      </div>




    

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Plan Details</Modal.Title>
        </Modal.Header>
       <Modal.Body>
  {selectedPlanItem && (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>name</th>
          <th>description</th>
          <th>price</th>
          <th>duration</th>
          <th>dailyIncome</th>
          <th>totalIncome</th>
          <th>requiredReferrals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{selectedPlanItem?.planDetails?.name}</td>
          <td>{selectedPlanItem?.planDetails?.description}</td>
          <td>{selectedPlanItem?.planDetails?.price}</td>
          <td>{selectedPlanItem?.planDetails?.duration}</td>
          <td>{selectedPlanItem?.planDetails?.dailyIncome}</td>
          <td>{selectedPlanItem?.planDetails?.totalIncome}</td>
          <td>{selectedPlanItem?.planDetails?.requiredReferrals}</td>
        </tr>
      </tbody>
    </table>
  )}
</Modal.Body>
 
      </Modal>
      


       <Modal show={show2} onHide={handleClose2} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
      <Modal.Body>
  {selectedUserItem2 && (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{selectedUserItem2?.userDetails?.name}</td>
          <td>{selectedUserItem2?.userDetails?.mobile}</td>
          <td>{selectedUserItem2?.userDetails?.profile}</td>
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
  );
} 


export default UserRequest
