import React, { useEffect, useState } from 'react'
import '../../Component/FundSection/Fund.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { API_URL } from '../../env';
// eslint-disable-next-line no-unused-vars
import toast, { Toaster } from 'react-hot-toast';
import { Table } from 'react-bootstrap';
import '../../App.css'
const Incomes = () => {
        // eslint-disable-next-line no-unused-vars
        const [status, setStatus] = useState("Active");
      const [fromDate, setFromDate] = useState("");
      // eslint-disable-next-line no-unused-vars
      const [toDate, setToDate] = useState("");


      const [amount, setamount] = useState("");
      const [Upi, setUpi] = useState("");
      const [qrcode, setqrcode] = useState("");
      const [Remark, setRemark] = useState("");
      const [Data, setData] = useState([]);
    
       
     const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 const [selectedUser, setSelectedUser] = useState(null);
const [showModal, setShowModal] = useState(false);

const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

   const [selectedData, setSelectedData] = useState(null);

 const handleShow = (id) => {
  const found = Data.find(item => item.id === id);
  if (found?.fromRequestDetails?.userDetails) {
    setSelectedUser(found.fromRequestDetails.userDetails);
    setShowModal(true);
  }
};

  const handleClose = () => {
    setSelectedData(null);
  };



 const IncomeDetails = ( ) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${API_URL}/api/admin/v1/incomes`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setData(result?.data?.items ); 
           setCurrentPage(result.data.currentPage);
          setTotalPages(result.data.totalPages);
        }
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
   IncomeDetails(currentPage);
}, [currentPage]);


  return (
    <div>
      
<Toaster/>
      <div className='container'>
        <div className='row g-4'>
  

          <div className='col-lg-2 col-md-6 col-sm-12 '>
 <div className="filters mt-5 pt-3" style={{display:'flex', justifyContent:'center'}}> 
       </div>
      </div>


 <div className="history-container">
    
      
      <div className="history-table  w-100"  >
        <Table className='text-white'>
          <thead>
            <tr> 
              <th>Sr. No.</th>
           
              <th>Amount </th> 
              <th>Remark</th>
              <th>Date </th>
              <th>Action </th>
               
            </tr>
          </thead>
      <tbody>
  {Data && Data.length > 0 ? (
    Data.map((res, ind) => (
      <tr key={ind}>
        <td>{ind + 1}</td>
        <td>{res?.amount}</td>
        <td>{res?.remark}</td>
        <td>{new Date(res?.createdAt).toLocaleString()}</td>
        <td>
          <button className="btn btn-primary" onClick={() => handleShow(res?.id)}>
            View More
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center py-5">
        <div className="animated-no-data">
          
          <p className="text-muted fs-4">No Data Found</p>
        </div>
      </td>
    </tr>
  )}
</tbody>

        </Table>


       

      </div>

      <div className="pagination d-flex justify-content-center mt-3">
  <button
    className="btn btn-secondary mx-2"
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  <span className="align-self-center">Page {currentPage} of {totalPages}</span>

  <button
    className="btn btn-secondary mx-2"
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>

    </div>


      </div>
      </div>
       


<Modal show={showModal} onHide={() => setShowModal(false)} size='lg'>
  <Modal.Header closeButton>
    <Modal.Title>User Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {selectedUser ? (
      <Table className='text-white'>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Profile</th>
            <th>Mobile</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{selectedUser.name}</td>
            <td>
              <img
                src={selectedUser.profile || 'https://via.placeholder.com/60'}
                alt="profile"
                style={{ width: '60px' }}
              />
            </td>
            <td>{selectedUser.mobile}</td>
            <td>{selectedUser.username}</td>
          </tr>
        </tbody>
      </Table>
    ) : (
      <p>No user details found.</p>
    )}
  </Modal.Body>
</Modal>


    </div>
  )
}

export default Incomes
