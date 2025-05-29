import React, { useState } from "react";
import "./profile.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add password validation and API call
    console.log("Submitted:", formData);
  };

  return (
    <div className="change-password-container">
      <h6 className="page-title m-4">Change Password</h6>
      <form className="password-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Old Password</label>
          <input
            type="password"
            placeholder="Old Password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Re-Enter New Password</label>
          <input
            type="password"
            placeholder="Re-Enter New Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ChangePassword;

 
