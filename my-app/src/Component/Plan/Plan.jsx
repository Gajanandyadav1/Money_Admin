import React, { useEffect, useState } from 'react'
import { API_URL } from '../../env';
import '../../App.css';

const Plan = () => {


    const [Data, setData] = useState([]);

    const PlanApi =() =>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/plans`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.success == true){
     setData(result.data);
     console.log(result.data);
    }
  })
  .catch((error) => console.error(error));
}


useEffect(()=>{
PlanApi()
},[])
  return (
    <div>
        
      <div className="container pt-4   ">
      <div className="row  "  style={{height:'90vh', overflowY:'scroll'}}>


       

        {/* Member Detail */}
        {Data?.map((item, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>



              <div className="plan-card">
      <h2>{item?.name} </h2>
      <h3>Price: {item?.price}</h3>
      <p className="billed"> </p>
      <ul className="features">
        <li><span className="check">✔</span> Duration: {item?.duration}</li>
        <li><span className="check">✔</span>DailyIncome: {item?.dailyIncome}</li>
        <li><span className="check">✔</span> TotalIncome : {item?.totalIncome}  </li>
        <li><span className="check">✔</span> Required Referrals : {item?.requiredReferrals}</li>
        {/* <li><span className="cross">✔</span> status : {item?.status}</li> */}
        {/* <li><span className="cross">✖</span> Priority Support</li> */}
      </ul>
      {/* <button className="start-btn">Get Started</button> */}
    </div>



     
          
          </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Plan
