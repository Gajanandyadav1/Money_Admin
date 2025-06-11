import React, { useEffect, useState } from 'react'
import { API_URL } from '../../env'; 
import { Tabs, Tab, Box, } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  
import Table from 'react-bootstrap/Table';

const IncomeDetails = ({ userId }) => {

    const [selectedUser, setSelectedUser] = useState(null);
 
    // alert({userId})
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [Income, setIncome] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

 const [planIncome, setPlanIncome] = useState([])

    const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const referralAPi = (page = 1) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${API_URL}/api/admin/v1/users/get/referral-incomes?page=${page}&limit=10&userId=${userId}`, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setIncome(result?.data?.incomes || []);
          setCurrentPage(result.data?.currentPage || 1);
          setTotalPages(result.data?.totalPages || 1);
          console.log(result.data?.incomes, "Income Data");
        }
      })
      .catch((error) => console.error(error));
  };










  const PlanIncome =()=>{
    try {
        const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/users/get/plan-incomes?userId=${userId}`, requestOptions)
  .then((response) => response.json())
  .then((result) =>{
        if(result?.success == true){
            setPlanIncome(result?.data?.requests)
        }
  })
  .catch((error) => console.error(error));
    } catch (error) {
      console.log(error)  
    }
  }
  useEffect(() => {
    referralAPi();
    PlanIncome();
  }, []);


 
  return (
    <div>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>


 <Box sx={{ width: "100%", typography: "body1" }}>
      {/* Tabs */}
      <Tabs value={activeTab} onChange={handleChange} >
        <Tab label="Reffrels"   style={{textTransform: 'capitalize', fontSize:'18px'}}/>
        <Tab label="Plan Income"  style={{textTransform: 'capitalize', fontSize:'18px'}}/>
      </Tabs>

      {/* Tab Panels */}
      <Box sx={{ mt: 2 }}>
        {activeTab === 0 && <>
          <div className='MyTable' style={{width: '100%', overflowX: 'scroll'}} >
       {/* <h1>{[userId]}</h1> */}

<table className="table text-nowrap">
  <thead className="thead-light">
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Mobile</th>
      <th>Amount</th>
      <th>Remark</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {Income?.length > 0 ? (
      Income?.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item?.fromUserDetails?.name || 'N/A'}</td>
          <td>{item?.fromUserDetails?.mobile || 'N/A'}</td>
          <td>₹{item?.amount}</td>
          <td>{item?.remark}</td>
          <td>{new Date(item?.createdAt).toLocaleDateString()}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
          No data found
        </td>
      </tr>
    )}
  </tbody>
</table>


<div className="d-flex justify-content-center mt-3 gap-2">
  <button
    className="btn btn-outline-primary btn-sm"
    disabled={currentPage === 1}
    onClick={() => referralAPi(currentPage - 1)}
  >
    Previous
  </button>
  <span className="mt-1">Page {currentPage} of {totalPages}</span>
  <button
    className="btn btn-outline-primary btn-sm"
    disabled={currentPage === totalPages}
    onClick={() => referralAPi(currentPage + 1)}
  >
    Next
  </button>
</div>


            </div>
        </>} 








        {activeTab === 1 &&  <div>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
  <div className='MyTable' style={{width: '100%', overflowX: 'scroll'}} >
                        <table className="table text-nowrap">
  <thead className="thead-light">
    <tr>
      <th>#</th>
      <th>Plan</th>
      <th>Amount</th> 
      <th>Remark</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {planIncome?.length > 0 ? (
      planIncome?.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item?.fromUserDetails?.name  }</td> 
          <td>₹{item?.amount}</td>
          <td>{item?.remark}</td>
          <td>{new Date(item?.createdAt).toLocaleDateString()}</td>
          {/* <td><button className='btn btn-primary' onClick={()=>{handleShow(item?.id)}}>View More</button></td> */}
          <td><button className='btn btn-primary'   onClick={() => {
                       setSelectedUser(item);    handleShow(item?.id);  }}>View More</button></td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
          No data found
        </td>
      </tr>
    )}
  </tbody>
</table>
                    </div>
                    </div>
                </div>
            </div>
            </div>}
      </Box>
    </Box>

            

          
          </div>
        </div>
      </div> 





       <Modal show={show} onHide={handleClose} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
      <Modal.Body>
  {selectedUser && (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Duration</th>
          <th>Daily Income</th>
          <th>Total Income</th>
          <th>Required Referrals</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {
          planIncome
            ?.filter(item => item?.id === selectedUser?.id) // 🔍 Only show selected item
            .map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.planDetails?.name}</td>
                <td>{item?.planDetails?.description}</td>
                <td>₹{item?.planDetails?.price}</td>
                <td>{item?.planDetails?.duration} Days</td>
                <td>₹{item?.planDetails?.dailyIncome}</td>
                <td>₹{item?.planDetails?.totalIncome}</td>
                <td>{item?.planDetails?.requiredReferrals}</td>
                <td>{new Date(item?.planDetails?.createdAt).toLocaleDateString()}</td>
              </tr>
            ))
        }
      </tbody>
    </Table>
  )}
</Modal.Body>

        
      </Modal>

    </div>
  )
}

export default IncomeDetails
