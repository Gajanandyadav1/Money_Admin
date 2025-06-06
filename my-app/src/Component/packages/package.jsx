import React from 'react'
import '../../Component/packages/Package.css'
const package2 = () => {


 const plans = [
  { amount: "₹500", duration: 35, daily: "₹25", total: "₹750", referral: 1 },
  { amount: "₹1000", duration: 35, daily: "₹52", total: "₹1560", referral: 1 },
  { amount: "₹2000", duration: 35, daily: "₹105", total: "₹3150", referral: 1 },
  { amount: "₹5000", duration: 50, daily: "₹200", total: "₹8600", referral: 2 },
  { amount: "₹10000", duration: 50, daily: "₹430", total: "₹18500", referral: 2 },
  { amount: "₹25000", duration: 50, daily: "₹1095", total: "₹47085", referral: 2 },
  { amount: "₹50000", duration: 60, daily: "₹2020", total: "₹105040", referral: 0 },
  { amount: "₹100000", duration: 60, daily: "₹4155", total: "₹216060", referral: 0 },
  { amount: "₹200000", duration: 60, daily: "₹8654", total: "₹450000", referral: 0 },
];


  return (
    <div>
        
         <div className="container-fluid     py-5">
      <div className="row    g-3" style={{height:'90vh', overflowY:'scroll'}}>
       
        {plans.map((plan, index) => (
          <div key={index} className="col-10 col-sm-6 col-md-4 col-lg-3">
            <div className="card plan-card text-white text-center py-5">
              <div className="card-body">
                <h2 className="card-title mb-3">{plan.amount}</h2>
                
                <p className="card-subtitle mb-2  ">Duration: {plan.duration} Days</p>
                <div className="my-3">
                  <p className="mb-1">Daily Income: {plan.daily}</p>
                  <p className="mb-1">Total Return: {plan.total}</p>
                  <p className="mb-1">Referral Required: {plan.referral}</p>
                </div>
                <div className="footer-text">{plan.duration} DAYS</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div> 
  )
}

export default package2
