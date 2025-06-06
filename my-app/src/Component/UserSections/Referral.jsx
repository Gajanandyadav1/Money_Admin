import React, { useEffect, useState } from 'react'
import { API_URL } from '../../env';
import { useParams } from 'react-router-dom';

const Referral = () => {

const {id} = useParams()

  const [referralData, setReferralData] = useState([]) 
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

  const referralAPi =(page = 1)=>{
    try {
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

 
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/users/referrals/${id}?page=${page}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if (result.success === true) {
      setReferralData(result?.data?.users)
      console.log(result?.data?.users,"gajju babau")
setCurrentPage(result?.data?.currentPage || 1);
          setTotalPages(result?.data?.totalPages || 1);
      console.log(result.data);
    }
  }
    )
  .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
referralAPi()
  },[])
  return (
    <div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>

            <div className='MyTable' style={{width: '100%', overflowX: 'scroll'}} >
       

<table class="table text-nowrap"  >
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">UserName</th>
      <th scope="col">Gender</th>
      <th scope="col">Dob</th>
      <th scope="col">Mobile</th>
      <th scope="col">profile</th>
      <th scope="col">walletBalance</th> 
      <th scope="col">Blocked</th> 
      <th scope="col">Deactivated</th> 
      <th scope="col">Status</th> 
    </tr>
  </thead>
 <tbody>
  {referralData?.length > 0 ? (
    referralData?.map((item, index) => (
      <tr key={index} className='MyText'>
        <td scope="row">{index + 1}</td>
        <td>{item?.name}</td>
        <td>{item?.username}</td>
        <td>{item?.gender}</td>
        <td>{item?.dob}</td>
        <td>{item?.mobile}</td>
        <td>{item?.profile}</td>
        <td>{item?.isBlocked}</td>
        <td>{item?.walletBalance}</td>
        <td>{item?.isDeactivated}</td>
        <td>{item?.status}</td>
      </tr>
    ))
  ) : (
    <tr  className='pulse-text'>
      <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Referral
