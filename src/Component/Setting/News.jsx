/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, image_URL } from '../../env';
import Form from 'react-bootstrap/Form';
import toast, { Toaster } from 'react-hot-toast';

const News = () => {
  const [news, setNews] = useState('');


  const [canWithdraw, setCanWithdraw] = useState(false);
  const [isPlanIncomeActivated, setIsPlanIncomeActivated] = useState(false);
const [adminMessageToUsers, setadminMessageToUsers] = useState('');


 const handleWithdrawChange = () => {
  setCanWithdraw((prev) => {
    const newValue = !prev;
    console.log("Withdraw toggled:", newValue); // 👈 Check this in console
    return newValue;
  });
};

const handlePlanIncomeChange = () => {
  setIsPlanIncomeActivated((prev) => {
    const newValue = !prev;
    console.log("Plan Income toggled:", newValue); // 👈 Check this in console
    return newValue;
  });
};

  const SettingAPi =()=>{
    try {
      const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/settings`, requestOptions)
  .then((response) => response.json())
  .then((result) => {

    if(result.success == true){

      setNews(result?.data)
       setadminMessageToUsers(result?.data?.adminMessageToUsers);
    }
  })
  .catch((error) => console.error(error));
    } catch (error) {
      console.log(error)
    }
  }






const UpdateSetting = () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    const payload = {
      withdrawalPercentage: Number(news.withdrawalPercentage),
      referralPercentage: Number(news.referralPercentage),
      canWithdraw: news.canWithdraw,
      isPlanIncomeActivated: news.isPlanIncomeActivated,
      adminMessageToUsers: adminMessageToUsers,
       upi: news.upi,
    };

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: "follow",
    };

    fetch(`${API_URL}/api/admin/v1/settings`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          toast.success(result.message);
        } else {
          toast.error(result.error || "Update failed");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong");
      });
  } catch (error) {
    console.error(error);
    toast.error("Unexpected error occurred");
  }
};

  useEffect(()=>{
SettingAPi()
  },[])

 
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);

      const formData = new FormData();
      formData.append('qr_code', file);

      try {
        const response = await fetch(`${API_URL}/api/admin/v1/settings/qr`, {
          method: 'PATCH',
          body: formData,
        });

        const result = await response.json();

        if (result.success == true) {
          toast.success(result.message );
          SettingAPi()

          setTimeout(()=>{
setFileName('')
          },[3000])
        } else {
          toast.error(result.message || 'Something went wrong!');
          console.error('API Error:', result);
        }
      } catch (error) {
        toast.error('Network error occurred!');
        console.error('Network Error:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <Toaster/>
      <div className="mb-3">
        <h5 >settings</h5>
      </div>

      <div className="card p-4 shadow-sm">
        <div className="mb-3">

          <div className='row g-4'>
            <div className='col-lg-5'>
                 <label className='mb-3'>Withdrawal Percentage </label>
<input
  type="text"
  className="form-control"
  value={news.withdrawalPercentage}
  onChange={(e) =>
    setNews((prev) => ({ ...prev, withdrawalPercentage: e.target.value }))
  }
/>



            </div>


            <div className='col-lg-5'>
    <label  className='mb-3'>Referral Percentage </label>
              <input
  type="text"
  className="form-control"
  value={news.referralPercentage}
  onChange={(e) =>
    setNews((prev) => ({ ...prev, referralPercentage: e.target.value }))
  }
/>




            </div>

           <div className="row mt-4">
      <div className="col-lg-5">
        <label>Withdraw </label>
  <Form.Check
  type="switch"
  id="canWithdraw-switch"
  checked={news.canWithdraw}
  onChange={(e) =>
    setNews((prev) => ({ ...prev, canWithdraw: e.target.checked }))
  } style={{fontSize:'40px'}}
/>
      </div>

      <div className="col-lg-5">
        <label>Plan Income Activated</label>
        <Form.Check
  type="switch"
  id="planIncome-switch"
  checked={news.isPlanIncomeActivated}
  onChange={(e) =>
    setNews((prev) => ({ ...prev, isPlanIncomeActivated: e.target.checked }))
  }
  style={{fontSize:'40px'}}
/>
      </div>



      <div className="col-lg-5 mt-4">
         <label  className='mb-3'>upi </label>
              <input
  type="text"
  className="form-control"
  value={news.upi}
  onChange={(e) =>
    setNews((prev) => ({ ...prev, upi: e.target.value }))

  }
/>

      </div>


      <div className="col-lg-1 mt-4"></div>
      <div className="col-lg-3 mt-4">
         <h6   className='text-center'>QR Code </h6>
   
     <img  src={news?.qr_code ? `${image_URL}/${news.qr_code}` : "https://avatars.githubusercontent.com/u/131365821?v=4"}
     style={{width:'100%'}}/>



   <div className='mt-4'>
      {fileName && (
        <p><strong>Uploaded File:</strong> {fileName}</p>
      )}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <button className='btn btn-primary p-2' onClick={handleButtonClick}>
        Update Qr_code
      </button>
    </div>
      </div>





      
    </div>


<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label " >Send messge to users</label>
  <textarea class="form-control" id="exampleFormControlTextarea1"      value={adminMessageToUsers}
    rows="3"
    onChange={(e) => setadminMessageToUsers(e.target.value)}></textarea>
</div>

  <div style={{display:'flex', justifyContent:'center'}}>
          <button className="btn btn-success me-2 w-50" onClick={()=>{UpdateSetting()}}>Update</button>
       
        </div>
            
          </div>
         
        </div>

        
      </div>
    </div>
  );
};
 


export default News
