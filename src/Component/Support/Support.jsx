/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { API_URL, image_URL } from '../../env'; 
import Table from 'react-bootstrap/Table';
import {  Pagination, Spinner } from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../App.css'
import '../../../src/Component/Home.css'
const Support = () => {

 
  // eslint-disable-next-line no-unused-vars
  const [description, setdescription] = useState();
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

const [selectedTicketId, setSelectedTicketId] = useState(null);
const [PendingData, setPendingData] = useState([]);

 


const [assetImages, setAssetImages] = useState([]);
const [show8, setShow8] = useState(false);

const handleClose8 = () => setShow8(false);


const [assetImages2, setAssetImages2] = useState([]);
const [show9, setShow9] = useState(false);

const handleClose9 = () => setShow9(false);

const [selectedImage, setSelectedImage] = useState(null);
const [previewImage, setPreviewImage] = useState(null);




const [show2, setShow2] = useState(false);

const handleShow2 = (ticketObj) => {
    //  alert(`Selected Ticket ID: ${ticketObj.id}`); 
  setSelectedTicketId(ticketObj.id); 
  setShow2(true);
};
const handleClose2 = () => {
  setShow2(false);
  setresole('');
  setSelectedTicketId(null);
};

   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
 const [selectedTicket, setSelectedTicket] = useState(null);
 const [resole , setresole ] = useState('');

const [username, setUsername] = useState('');
   const handleShow = (ticket) => {
    setSelectedTicket(ticket);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedTicket(null);
    setShow(false);
  };

    const TicketAdd =  async () =>{
        
        try {
            const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')} `);


const raw = JSON.stringify({
  "ticket": selectedTicketId,
  "response": resole,
});
const requestOptions = {
  method: "PATCH",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/tickets`, requestOptions)
  .then((response) => response.json())
  .then((result) =>  {

    if(result?.success == true){
        toast.success(result?.message)
               
        //  GetResolved()
         GetPending()
         handleClose2()
    }
    else{
       toast.error(result?.error?.explanation)
    }
  })
  .catch((error) => console.error(error));
        } catch (error) {
            console.log(error)
        }
    }

    const TicketGetAPi = async (page = 1) =>{

        try {
            const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/tickets?page=${page}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.success == true){

        setTickets(result?.data?.requests) 
      setTotalPages(data?.totalPages);
      setCurrentPage(data?.currentPage);
    }
  })
  .catch((error) => console.error(error));
        } catch (error) {
         console.log(error)   
        }
    }

    useEffect(() => {
    TicketGetAPi(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

    const [activeTab, setActiveTab] = useState("Pending");
const [searchUsername, setSearchUsername] = useState("");

 
    const GetPending = (page = 1) =>{
      try {
        const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch( `${API_URL}/api/admin/v1/tickets?page=${page}&status=true&username=${searchUsername}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.success == true){
setPendingData(result?.data?.requests)
setTotalPages(result.totalPages || 1); // ✅ based on API response
            setCurrentPage(page); 

              handleClose()
 
            setTimeout(() => {
              setresole('') 
            }, 4000);
    }
  })
  .catch((error) => console.error(error));
      } catch (error) {
         console.log(error)
      }
    }




    const [Resolved, setResolved] =useState([])
    const GetResolved = (page = 1) =>{
      try {
        const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/tickets?page=${page}&status=false&username=${searchUsername}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.success == true){
setResolved(result?.data?.requests)
setTotalPages(result.totalPages || 1); // ✅ based on API response
            setCurrentPage(page); 
          
    }
  })
  .catch((error) => console.error(error));
      } catch (error) {
         console.log(error)
      }
    }

  const handlePageChange2 = (page) => {
    if (page >= 1 && page <= totalPages) {
      GetPending(page);
    }
  };
    useEffect(()=>{
      GetPending()
      
    },[searchUsername])
  return (
    <div>

        <Toaster/>
     
 <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Tab Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() =>{ setActiveTab("Pending"); GetPending()  }}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: activeTab === "Pending" ? "#f97316" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Pending
        </button>

        <button
          onClick={() =>{ setActiveTab("Resolved");GetResolved()}}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "Resolved" ? "#f97316" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}  
        >
          Resolved
        </button>
      </div>

      {/* Tab Content */}
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {activeTab === "Pending" && (
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

            <input
  type="text"
  className="form-control  mb-3 p-2 searchinputbox "
  placeholder="Search by UserId"
  value={searchUsername}
  onChange={(e) => setSearchUsername(e.target.value)}  style={{width:'50%'}}
/>


                <div className="history-table"   >
                  <Table striped hover className="text-dark text-center">
                    <thead className="bg-warning text-dark text-center">
                      <tr>
                        <th>#</th>
                        <th>TicketId</th>
                        <th>UserId</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Response</th>
                        <th>Status</th>
                        <th>Assets</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                   <tbody>
  {PendingData && PendingData.length > 0 ? (
    PendingData.map((res, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{res?.ticketId}</td>
        <td>{res?.userDetails.username}</td>
      
        <td>{res?.category}</td>
        <td>{res?.description}</td>
        <td>{res?.response}</td>
        <td>
          {res?.status === true
            ? "Pending"
            : res?.status === false
            ? "Resolved"
            : "-"}
        </td>


        <td>
  <button
    className="btn btn-primary"
   onClick={() => {
  let assetArray = [];

  if (typeof res.assets === "string") {
    try {
      assetArray = JSON.parse(res.assets);
    } catch (e) {
      console.error("Error parsing assets JSON:", e);
      assetArray = [];
    }
  } else if (Array.isArray(res.assets)) {
    assetArray = res.assets;
  }

  const filenames = assetArray.map((filename) => filename.trim());

  setAssetImages(filenames);
  setShow8(true);
}}

  >
    Assets
  </button>
</td>


        <td>
          <div style={{ display: 'flex' }}>
            <button
              className="btn btn-primary text-nowrap"
              onClick={() => handleShow(res)}
            >
              User Details
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => handleShow2(res)}
            >
              Resolve
            </button>
          </div>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="9" className="text-center">
        No Data Found
      </td>
    </tr>
  )}
</tbody>

                  </Table>
                </div>


                 {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="secondary"
          onClick={() => handlePageChange2(currentPage - 1)}
          disabled={currentPage === 1}
          className="me-2"
        >
          Prev
        </Button>

        {[...Array(totalPages)].map((_, idx) => (
          <Button
            key={idx}
            variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
            onClick={() => handlePageChange2(idx + 1)}
            className="me-2"
          >
            {idx + 1}
          </Button>
        ))}

        <Button
          variant="secondary"
          onClick={() => handlePageChange2(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Resolved" && 
        
        <>
        
         <div className="container">
            <div className="row">
              <div className="col-lg-12">


            <input
  type="text"
  className="form-control  mb-3 p-2 searchinputbox "
  placeholder="Search by UserId"
  value={searchUsername}
  onChange={(e) => setSearchUsername(e.target.value)}  style={{width:'50%'}}/>

    
                <div className="history-table">
                  <Table striped hover className="text-dark text-center">
                    <thead className="bg-warning text-dark text-center">
                      <tr>
                        <th>#</th>
                        <th>TicketId</th>
                        <th>UserId</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Response</th>
                        <th>Assets</th>
                        <th>Status </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                   <tbody>
  {Resolved && Resolved.length > 0 ? (
    Resolved.map((res, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{res?.ticketId}</td>
        <td>{res?.userDetails.username}</td>
        <td>{res?.category}</td>
        <td>{res?.description}</td>
        <td>{res?.response}</td>
        <td>
          {res?.status === true
            ? "Pending"
            : res?.status === false
            ? "Resolved"
            : "-"}
        </td>

          
        <td>
  <button
    className="btn btn-primary"
   onClick={() => {
  let assetArray = [];

  if (typeof res.assets === "string") {
    try {
      assetArray = JSON.parse(res.assets);
    } catch (e) {
      console.error("Error parsing assets JSON:", e);
      assetArray = [];
    }
  } else if (Array.isArray(res.assets)) {
    assetArray = res.assets;
  }

  const filenames = assetArray.map((filename) => filename.trim());

  setAssetImages2(filenames);
  setShow9(true);
}}

  >
    Assets
  </button>
</td>
        <td>
          <button
            className="btn btn-primary text-nowrap"
            onClick={() => handleShow(res)}
          >
            View Details
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="9" className="text-center">
        No Data Found
      </td>
    </tr>
  )}
</tbody>

                  </Table>
                </div>


                 {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="secondary"
          onClick={() => handlePageChange2(currentPage - 1)}
          disabled={currentPage === 1}
          className="me-2"
        >
          Prev
        </Button>

        {[...Array(totalPages)].map((_, idx) => (
          <Button
            key={idx}
            variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
            onClick={() => handlePageChange2(idx + 1)}
            className="me-2"
          >
            {idx + 1}
          </Button>
        ))}

        <Button
          variant="secondary"
          onClick={() => handlePageChange2(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
              </div>
            </div>
          </div>
          
          
          </>}
      </div>
    </div>

      <div className='container mt-4'>
        <div className='row'>
            <div className='col-lg-12'>
 
 

 
            </div>
        </div>
      </div>

 


       <> 
 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTicket?.userDetails ? (
            <div >
              <p className='ps-3'><strong>Name :</strong> {selectedTicket.userDetails.name}</p>
              <hr/>
              <p className='ps-3'><strong>Mobile :</strong> {selectedTicket.userDetails.mobile}</p><hr/>
              <p className='ps-3'><strong>User ID :</strong> {selectedTicket.userDetails.username}</p>
            </div>
          ) : (
            <p>No user details available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>





<>
<Modal show={show2} onHide={handleClose2}>
  <Modal.Header closeButton>
    <Modal.Title>Enter Resolution</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
       {show2 && (
  <div className="modal show d-block" tabIndex="-1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Resolve Ticket</h5>
          <button type="button" className="btn-close" onClick={() => setShow2(false)}></button>
        </div>
        <div className="modal-body">
          <textarea
            value={resole}
            onChange={(e) => setresole(e.target.value)}
            placeholder="Enter your response"
            className="form-control"
          ></textarea>


          <div>  <button className="btn btn-primary mt-4" onClick={TicketAdd}>
            Submit Response
          </button>
            </div>
        </div>
        <div className="modal-footer">
           
        
        </div>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  </Modal.Body>
</Modal>
















    {/* pending Asset Image  */}
    
    
    
   <Modal show={show8} onHide={handleClose8} size="xl" centered>
  <Modal.Header closeButton>
    <Modal.Title>Ticket Assets</Modal.Title>
  </Modal.Header>
<Modal.Body>
  {assetImages.length > 0 ? (
    <div className="d-flex flex-wrap gap-4 justify-content-around">
      {assetImages.map((filename, index) => (
        <img
          key={index}
          src={`${image_URL}${filename}`}
          alt={`asset-${index}`}
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setPreviewImage(filename)}
        />
      ))}
    </div>
  ) : (
    <p>No assets found for this ticket.</p>
  )}
</Modal.Body>

   
</Modal>

{previewImage && (
  <div
    onClick={() => setPreviewImage(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "zoom-out",
    }}
  >
    <img
      src={`${image_URL}${previewImage}`}
      alt="Full Preview"
      style={{
        width: "80vw",
        height: "60vh",
        objectFit: "contain",
      }}
    />
  </div>
)}


    {/* Resolved Asset Image  */}
    
    
    
   <Modal show={show9} onHide={handleClose9} size="xl" centered>
  <Modal.Header closeButton>
    <Modal.Title>Ticket Assets</Modal.Title>
  </Modal.Header>
<Modal.Body>
  {assetImages2.length > 0 ? (
    <div className="d-flex flex-wrap gap-4 justify-content-around">
      {assetImages2.map((filename, index) => (
        <img
          key={index}
          src={`${image_URL}${filename}`}
          alt={`asset-${index}`}
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setPreviewImage(filename)}
        />
      ))}
    </div>
  ) : (
    <p>No assets found for this ticket.</p>
  )}
</Modal.Body>


   
</Modal>

{previewImage && (
  <div
    onClick={() => setPreviewImage(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "zoom-out",
    }}
  >
    <img
      src={`${image_URL}${previewImage}`}
      alt="Full Preview"
      style={{
        width: "80vw",
        height: "60vh",
        objectFit: "contain",
      }}
    />
  </div>
)}


</>

    </div>
  )
}

export default Support;
