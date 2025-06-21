import React, {   useEffect, useState } from 'react'; 
import { API_URL, image_URL } from '../../env';
import '../../App.css';
import Referral from './Referral';
import { useParams } from 'react-router-dom';
import IncomeDetails from './IncomeDetails';
import Subscriptions from './subscriptions';
// import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';



const WalletBalance = () => {
 
 

 const [activeTab, setActiveTab] = useState(0);
 

const {id} =useParams()

const tabs = ["Referral Users", "Income", "subscriptions" ];
const tabComponents = [<Referral  />, <IncomeDetails userId={id}/>, <Subscriptions userId={id}/>]
 
  const [referralData, setReferralData] = useState([])

  const referralAPi =()=>{
    try {
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

 

const requestOptions = {
  method: "GET",
  headers: myHeaders, 
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/users/${id}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if (result.success === true) {
       setReferralData(result?.data);

      console.log(result.data);
    }  if (result.status === 403) {
          alert("Session expired. Please login again.");
          localStorage.removeItem("token");
          window.location.href = "/";
          return; // stop further execution
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
    <div className="container my-4">

      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12'>


           <div className="profile-container">
      <div className="profile-card">
        <div className="header">
         
          <img
             src={referralData?.profile ? `${image_URL}/${referralData.profile}` : "https://avatars.githubusercontent.com/u/131365821?v=4"}
           alt="profile" className="avatar"  style={{width:'120px', height:'100px'}}/>
          <div>
            <h4>{referralData?.name}</h4>
            {/* <p>yourname@gmail.com</p> */}
          </div>
          <button className="close-btn" style={{opacity:'0'}}>×</button>
        </div>

        <hr />

        <div className="info-row">
          <span>Name</span>
          <span>{referralData?.name}</span>
        </div>
       
        <div className="info-row">
          <span>Mobile number</span>
          <span className="text-muted">{referralData?.mobile}</span>
        </div>
       
        <div className="info-row">
          <span>UserName</span>
          <span>{referralData?.username}</span>
        </div>
       
        <div className="info-row">
          <span>Mobile</span>
          <span>{referralData?.mobile}</span>
        </div>
       
        <div className="info-row">
          <span>walletBalance</span>
          <span>{referralData?.walletBalance}</span>
        </div>
       
        
        <div className="info-row">
          <span>Referrer Name</span>
        <span>{referralData?.referrer?.name ? referralData.referrer.name : "No referrer"}</span>

        </div>

        <div className="info-row">
          <span>Referrer Mobile</span>
        <span>{referralData?.referrer?.mobile ? referralData.referrer.mobile : "No referrer"}</span>

        </div>

        {referralData?.userDetails && (
  <>
    <div className="info-row">
      <span>Bank Name</span>
      <span>{referralData.userDetails.bankName}</span>
    </div>
    <div className="info-row">
      <span>Account Number</span>
      <span>{referralData.userDetails.accountNumber}</span>
    </div>
    <div className="info-row">
      <span>IFSC Code</span>
      <span>{referralData.userDetails.ifscCode}</span>
    </div>
  </>
)}


<button
  className={`btn btn-sm p-2 w-100 mt-4 ${referralData?.isBlocked ? 'btn-success' : 'btn-danger'}`}
>
  {referralData?.isBlocked ? 'Unblock' : 'Block'}
</button>

       
   
      </div>
    </div>

          
    

        </div>

        <div className='col-lg-8 col-md-6 col-sm-12'>
       

  <div className="card  ">
        <div className="card-body">
    

    <div className="tabs-box">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
        <div
          className="underline"
          style={{ transform: `translateX(${activeTab * 100}%)` }}
        />
      </div>

      <div className="tab-body">
        <div key={activeTab} className="tab-content fade-in">
          {/* <h2>{tabs[activeTab]} Tab</h2> */}
             {tabComponents[activeTab]}  

          
        </div>
      </div>
    </div>

        </div>
      </div>
        </div>
      </div>
    
    </div>
  );
};

export default WalletBalance;

 
