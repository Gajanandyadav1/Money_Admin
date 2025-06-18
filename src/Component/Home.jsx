import React, { useEffect, useState } from 'react'
import '../Component/Home.css'
import { API_URL } from '../env';
const Home = () => {

const [Data, setData] = useState()

const DashboardApi = ()=>{

  try {
    const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer  ${localStorage.getItem('token')}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/dashboard`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
   setData(result.data)
  })
  .catch((error) => console.error(error));
  } catch (error) {
    console.log(error)
  }
}





useEffect(()=>{
  DashboardApi()
},[])

  return (
    <div >
      <div className="container pt-4   ">
      <div className="row mblView"  style={{height:'90vh', overflowY:'scroll'}}>
        {/* Member Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className=" custom-header">
                 Member Details
            </div>
            <div className="card-body teja  ">
              <div className='px-2'>
              <p>Total User <span>{Data?.users?.totalUsers}</span></p> 
              <p>Total Active Users <span>{Data?.users?.totalActiveUsers}</span></p>
              <p> Total In-Active User <span>{Data?.users?.totalInActiveUsers}</span></p>
              <p>Total Blocked Users <span>{Data?.users?.totalBlockedUsers}</span></p>
            </div>
            </div>
          </div>
        </div>

        {/* Withdraw Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className="  custom-header">
              Withdraw Details
            </div>
            <div className="card-body teja">
              <p>Pending Withdraw <span>{Data?.withdraw?.pending} ₹</span></p>
              <p>Approved Withdraw <span>{Data?.withdraw?.approved} ₹</span></p>
              <p>Reject Withdraw <span>{Data?.withdraw?.rejected} ₹</span></p>
          
            </div>
          </div>
        </div>

        {/* Withdraw Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className="  custom-header">
              Withdraw Today
            </div>
            <div className="card-body teja">
              <p>Pending Withdraw <span>{Data?.withdrawToday?.pending} ₹</span></p>
              <p>Approved Withdraw <span>{Data?.withdrawToday?.approved} ₹</span></p>
              <p>Reject Withdraw <span>{Data?.withdrawToday?.rejected} ₹</span></p>
          
            </div>
          </div>
        </div>

        {/* User Income Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className=" custom-header">
              User Income Detail
            </div>
            <div className="card-body teja">
              
              {/* <p>Team Income <span>0.00$</span></p> */}
              <p>Daily income <span>{Data?.userIncomes?.dailyIncome} ₹</span></p>
              <p>Referral income <span>{Data?.userIncomes?.referralIncome} ₹</span></p>
              <p>Rank Income <span>{Data?.userIncomes?.rankIncome} ₹</span></p>
             
            </div>
          </div>
        </div>





        {/* User Today Income Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className=" custom-header">
              User Today Income Detail
            </div>
            <div className="card-body teja">
              <p>Daily income <span>{Data?.userTodayIncomes?.dailyIncome} ₹</span></p>
              <p>Referral income <span>{Data?.userTodayIncomes?.referralIncome} ₹</span></p>
              {/* <p>Team Income <span>0 ₹</span></p> */}
              <p>Rank Income <span>{Data?.userTodayIncomes?.rankIncome} ₹ </span></p>
              <p>Total Income <span>{Data?.userTodayIncomes?.totalIncome}₹</span></p>
            </div>
          </div>
        </div>



        {/* Deposit Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className=" custom-header">
              Deposit Details
            </div>
            <div className="card-body teja">
              <p>Today Deposit <span>{Data?.depositDeatils?.todayDeposit}₹</span></p>
              <p>Total Deposit <span>{Data?.depositDeatils?.totalDeposit} ₹</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Home
