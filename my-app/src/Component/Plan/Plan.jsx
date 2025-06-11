import React, { useEffect, useState } from 'react'
import { API_URL } from '../../env';
import '../../App.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';
const Plan = () => {


    const [Data, setData] = useState([]);
const [show, setShow] = useState(false);
const [show2, setShow2] = useState(false);

  const [name, setName] = useState( );
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [dailyIncome, setDailyIncome] = useState("");
  const [totalIncome, setTotalIncome] = useState("");
  const [requiredReferrals, setRequiredReferrals] = useState("");



  const [upname, setUpname] = useState()
  const [upplan, setUplan] = useState()
  const [upprice, setUpprice] = useState()
  const [upduration, setUpduration] = useState()
  const [updailyIncome, setUpdailyIncome] = useState()
  const [uptotalIncome, setUptotalIncome] = useState()
  const [uprequiredReferrals, setUprequiredReferrals] = useState()
   const [upstatus, setupstatus] = useState();
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const handleClose2 = () => setShow2(false);
  const handleShow2= () => setShow2(true);



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
     setupstatus(result?.data?.status)
     console.log(result.data);
    }
  })
  .catch((error) => console.error(error));
}



const AddPlan =()=>{
  try {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization",  `Bearer ${localStorage.getItem(token)}`);

const raw = JSON.stringify({
  "name":name,
  "price": price,
  "duration": duration,
  "dailyIncome": dailyIncome,
  "totalIncome": totalIncome,
  "requiredReferrals": requiredReferrals
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/plans`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.success == true){
      toast.success(result?.message)

      PlanApi()

      setTimeout(() => {
        handleClose()
      }, 1500);
    }
    else{
      toast.error(result?.error?.explanation)
    }
  })
  .catch((error) => console.error(error));
  } catch (error) {
    
  }
}


const UpdatePlan =()=>{
  try {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", `Bearer ${localStorage.getItem(token)}`);

const raw = JSON.stringify({
  "plan": upplan,
  "name": upname,
  "price": upprice,
  "duration": upduration,
  "dailyIncome":updailyIncome,
  "totalIncome": uptotalIncome,
  "requiredReferrals": uprequiredReferrals,
  status: true
});

const requestOptions = {
  method: "PATCH",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/plans`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.success == true){
      toast.success(result.message)



 PlanApi()

      setTimeout(() => {
         setUpname ('')
          setUplan('')
          setUpprice('')
          setUpduration('')
            setUpdailyIncome('')
          setUptotalIncome('')
            setUprequiredReferrals('')
            

    handleClose2()
      }, 1500);

       


    }else{
            toast.error(result?.error?.explanation)

    }
  })
  .catch((error) => console.error(error));
  } catch (error) {
    
  }
}





useEffect(()=>{
PlanApi()
},[])
  return (
    <div>

      <Toaster/>
        
      <div className="container pt-4   ">
<button className='btn btn-primary w-25 mb-4 py-2'  onClick={handleShow}>Add Plan</button>
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
      <button className="start-btn"  onClick={()=>{handleShow2(item?.id  )}}> update plan </button>
    </div>



     
          
          </div>
        ))}
        </div>
        </div>



         <Modal show={show} onHide={handleClose}  size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add Plan </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          


 
<input type='text'  className="form-control mb-3 py-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Plan Name" />
      <input type='number'  className="form-control mb-3 py-2"  value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <input type='number'   className="form-control mb-3 py-2"  value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" />
      <input type='number'  className="form-control mb-3 py-2"  value={dailyIncome} onChange={(e) => setDailyIncome(e.target.value)} placeholder="Daily Income" />
      <input type='number'  className="form-control mb-3 py-2"   value={totalIncome} onChange={(e) => setTotalIncome(e.target.value)} placeholder="Total Income" />
      <input type='number'  className="form-control mb-3 py-2"  value={requiredReferrals} onChange={(e) => setRequiredReferrals(e.target.value)} placeholder="Required Referrals" />
    

        <button type="button" className='btn btn-primary py-3 w-100' onClick={()=>{AddPlan()}}>
          Create Plan
        </button>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>











         <Modal show={show2} onHide={handleClose2}  size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          


 
  <input type='text'  className="form-control mb-3 py-2" value={upname} onChange={(e) => setUpname(e.target.value)} placeholder="  Name" />
  <input type='text'  className="form-control mb-3 py-2" value={upplan} onChange={(e) => setUplan(e.target.value)} placeholder="Plan " />
      <input type='number'  className="form-control mb-3 py-2"  value={upprice} onChange={(e) => setUpprice(e.target.value)} placeholder="Price" />
      <input type='number'   className="form-control mb-3 py-2"  value={upduration} onChange={(e) => setUpduration(e.target.value)} placeholder="Duration" />
      <input type='number'  className="form-control mb-3 py-2"  value={updailyIncome} onChange={(e) => setUpdailyIncome(e.target.value)} placeholder="Daily Income" />
      <input type='number'  className="form-control mb-3 py-2"   value={uptotalIncome} onChange={(e) => setUptotalIncome(e.target.value)} placeholder="Total Income" />
      <input type='number'  className="form-control mb-3 py-2"  value={uprequiredReferrals} onChange={(e) => setUprequiredReferrals(e.target.value)} placeholder="Required Referrals" />
    



<button className='btn btn-primary py-3 w-100 '  onClick={()=>{UpdatePlan()}}>Update Plan</button>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  )
}

export default Plan
