import React, {   useEffect, useState } from 'react'; 
import { API_URL } from '../../env';
import '../../App.css';
import Referral from './Referral';
import { useParams } from 'react-router-dom';
import IncomeDetails from './IncomeDetails';
// import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';



const WalletBalance = () => {
 
 

 const [activeTab, setActiveTab] = useState(0);
 

const {id} =useParams()

const tabs = ["Referral Users", "Income", "Settings", "Contact", "About"];
const tabComponents = [<Referral  />, <IncomeDetails userId={id}/>]
 
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

fetch(`${API_URL}/api/admin/v1/users/referrals/${id}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if (result.success === true) {
       setReferralData(result?.data?.users || []);

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
    <div className="container my-4">

      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12'>


           <div className="profile-container">
      <div className="profile-card">
        <div className="header">
          <img src={referralData[0]?.profile} alt="profile" className="avatar" />
          <div>
            <h4>{referralData[0]?.name}</h4>
            {/* <p>yourname@gmail.com</p> */}
          </div>
          <button className="close-btn">×</button>
        </div>

        <hr />

        <div className="info-row">
          <span>Name</span>
          <span>{referralData[0]?.name}</span>
        </div>
        <div className="info-row">
          <span>Date of Birth</span>
          <span>{referralData[0]?.dob}</span>
        </div>
        <div className="info-row">
          <span>Mobile number</span>
          <span className="text-muted">{referralData[0]?.mobile}</span>
        </div>
        <div className="info-row">
          <span>Gender</span>
          <span>{referralData[0]?.gender}</span>
        </div>
        <div className="info-row">
          <span>UserName</span>
          <span>{referralData[0]?.username}</span>
        </div>

        {/* <button className="save-btn">Save Change</button> */}
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

 
