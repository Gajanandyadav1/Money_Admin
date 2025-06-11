import React, { useEffect, useState } from 'react'
import '../../Component/FundSection/Fund.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { API_URL } from '../../env';
import toast, { Toaster } from 'react-hot-toast';
import { Table } from 'react-bootstrap';
import '../../App.css'
const Incomes = () => {
        const [status, setStatus] = useState("Active");
      const [fromDate, setFromDate] = useState("");
      const [toDate, setToDate] = useState("");


      const [amount, setamount] = useState("");
      const [Upi, setUpi] = useState("");
      const [qrcode, setqrcode] = useState("");
      const [Remark, setRemark] = useState("");
      const [Data, setData] = useState([]);
    
       
     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

 



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
        }
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
  IncomeDetails();
}, []);


  return (
    <div>
      
<Toaster/>
      <div className='container'>
        <div className='row g-4'>
  

          <div className='col-lg-2 col-md-6 col-sm-12 '>
 <div className="filters mt-5 pt-3" style={{display:'flex', justifyContent:'center'}}> 
       </div>
      </div>





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
    </div>



     <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Incomes</Modal.Title>
        </Modal.Header>
        <Modal.Body>

 <Table className='text-white'>
          <thead>
            <tr> 
              <th>Sr. No.</th>
           
              <th>Name </th> 
              <th>Profile</th>
              <th>Mobile </th>
               
               
            </tr>
          </thead>
          <tbody>


            {
              Data?.map((res, ind)=>{
                return(
                      <tr>
              <td>{ind + 1}</td>
              <td>{res?.fromUserDetails?.name}</td> 
            <td><img src={res?.fromUserDetails?.name}  style={{width:'60px'}}/></td>
           <td>{res?.fromUserDetails?.mobile}</td> 
            <td><button className='btn-btn-primary' onClick={()=>{handleShow(res?.id)}}>View More</button></td>
                   </tr>
                )
              })
            }
           
          </tbody>
        </Table>

        </Modal.Body>
        
      </Modal>

    </div>
  )
}

export default Incomes
