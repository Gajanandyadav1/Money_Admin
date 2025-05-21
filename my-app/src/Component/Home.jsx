import React from 'react'
import '../Component/Home.css'
const Home = () => {
  return (
    <div >
      <div className="container pt-4   ">
      <div className="row mblView"  style={{height:'90vh', overflowY:'scroll'}}>
        {/* Member Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className="card-header custom-header">
              👥 Member Detail
            </div>
            <div className="card-body teja  ">
              <div className='px-2'>
              <p>Total Member <span>3</span></p> 
              <p>Active Member <span>3</span></p>
              <p>In-Active Member <span>0</span></p>
              <p>Blocked Member <span>0</span></p>
            </div>
            </div>
          </div>
        </div>

        {/* Withdraw Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className="card-header custom-header">
              Withdraw Detail
            </div>
            <div className="card-body teja">
              <p>Pending Withdraw <span>17.00$</span></p>
              <p>Complete Withdraw <span>0.00$</span></p>
              <p>Reject Withdraw <span>0.00$</span></p>
              <p>Complete Withdraw <span>0.00$</span></p>
            </div>
          </div>
        </div>

        {/* User Income Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className="card-header custom-header">
              User Income Detail
            </div>
            <div className="card-body teja">
              
              {/* <p>Team Income <span>0.00$</span></p> */}
              <p>Daily income <span>160.00$</span></p>
              <p>Referral income <span>12.50$</span></p>
              <p>Reward Income <span>0.00$</span></p>
              <p>Total Income <span>172.50$</span></p>
            </div>
          </div>
        </div>





        {/* User Today Income Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className="card-header custom-header">
              User Today Income Detail
            </div>
            <div className="card-body teja">
              <p>Daily income <span>5.00$</span></p>
              <p>Referral income <span>0.00$</span></p>
              <p>Team Income <span>0.00$</span></p>
              <p>Reward Income <span>0.00$</span></p>
              <p>Total Income <span>5.00$</span></p>
            </div>
          </div>
        </div>



        {/* Deposit Detail */}
        <div className="col-lg-4 col-md-6">
          <div className="card custom-card">
            <div className="card-header custom-header">
              Deposit Details
            </div>
            <div className="card-body teja">
              <p>Today Deposit <span>0.00$</span></p>
              <p>Total Deposit <span>0.00$</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Home
