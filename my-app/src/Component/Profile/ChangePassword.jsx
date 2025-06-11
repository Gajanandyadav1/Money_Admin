import React, { useState } from "react";
import "./profile.css";
import { API_URL } from "../../env";
import toast, { Toaster } from "react-hot-toast";

const ChangePassword = () => {
  const [oldPassword, setoldPassword] = useState();

  const [newPassword, setnewPassword] = useState()
  const [confirmPassword, setconfirmPassword] = useState()

 

const UpdatePassword = ()=>{

  try {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);
 

const raw = JSON.stringify({
  "current_password": oldPassword,
  "new_password": newPassword,
  "confirm_new_password": confirmPassword,
});

const requestOptions = {
  method: "PATCH",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`${API_URL}/api/admin/v1/auth/password`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.success === true){
      toast.success(result.message)

      setTimeout(()=>{
        setoldPassword('')
        setnewPassword('')
setconfirmPassword('')
      },2500)
    }else{
       toast.error(result?.error?.explanation[0])
    }
  })
  .catch((error) => console.error(error));
  } catch (error) {
    
  }
}



  return (
    <div className="change-password-container">

      <Toaster/>
      <h6 className="page-title m-4">Change Password</h6>
      <div className="password-form"  >
        <div className="form-group">
          <label>Old Password</label>
          <input
            type="password"
            placeholder="Old Password"
            name="oldPassword"
            value={oldPassword}
            onChange={(e)=>{setoldPassword(e.target.value)}}
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={newPassword}
            onChange={(e)=>{setnewPassword(e.target.value)}}
          />
        </div>
        <div className="form-group">
          <label>Re-Enter New Password</label>
          <input
            type="password"
            placeholder="Re-Enter New Password"
            name="confirmPassword"
             value={confirmPassword}
            onChange={(e)=>{setconfirmPassword(e.target.value)}}
          />
        </div>
        <button type="submit" className="submit-btn" onClick={()=>{UpdatePassword()}}>Update Password</button>
      </div>
    </div>
  );
};

export default ChangePassword;

 
