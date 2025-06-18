/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../env';

const Subscriptions = ({ userId }) => {
const [currentPage, setCurrentPage] = useState(1);
// eslint-disable-next-line no-unused-vars
const [totalPages, setTotalPages] = useState(1);
 const [subscriptions, setsubscriptions] = useState([])

const PlanIncome =()=>{
    
    try {
        const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/users/${userId}`, requestOptions)
  .then((response) => response.json())
  .then((result) =>{
        if (result?.success === true) {
      setsubscriptions(result?.data?.subscriptions || []);

  }  if (result.status === 403) {
          alert("Session expired. Please login again.");
          localStorage.removeItem("token");
          window.location.href = "/";
          return; // stop further execution
        }
  })
  .catch((error) => console.error(error));
    } catch (error) {
      console.log(error)  
    }
  }
 useEffect(() => {
  if (userId) {
    PlanIncome();
  }
}, [userId]);

  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
               <div className='MyTable' style={{width: '100%', overflowX: 'scroll'}} >
                        <table className="table text-nowrap">
  <thead className="thead-light">
    <tr>
      <th>#</th>
      <th>ExpiresAt</th>
      <th>Name</th> 
      <th>Price</th>
      <th>Daily Income</th>
       
    </tr>
  </thead>
 <tbody>

    {
       subscriptions?.map((item,index)=>{
        return(

          <tr key={index}>
        <td>{index + 1}</td>
        <td>{item?.expiresAt}</td>
        <td>{item?.planDetails?.name}</td>
        <td>₹{item?.planDetails?.price}</td>
        <td>₹{item?.planDetails?.dailyIncome}</td>
      </tr>  
        )
       })   
    }
  {subscriptions?.length > 0 ? (
    subscriptions.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item?.expiresAt}</td>
        <td>{item?.planDetails?.name}</td>
        <td>₹{item?.planDetails?.price}</td>
        <td>₹{item?.planDetails?.dailyIncome}</td>
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
    </div>
  )
}

export default Subscriptions
