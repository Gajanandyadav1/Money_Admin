import React, { useEffect, useState } from 'react'
import { API_URL } from '../../env'; 
import { Tabs, Tab, Box } from "@mui/material";
const IncomeDetails = ({ userId }) => {

     
    // alert({userId})
const [Income, setIncome] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

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

  useEffect(() => {
    referralAPi();
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
        <Tab label="Income"  style={{textTransform: 'capitalize', fontSize:'18px'}}/>
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
      Income.map((item, index) => (
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
        {activeTab === 1 &&  <h5>Data not Found</h5>}
      </Box>
    </Box>

            

          
          </div>
        </div>
      </div>  
    </div>
  )
}

export default IncomeDetails
