import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [profile, setProfile] = useState({
    name: "Moneyking",
    email: "admin@gmail.com",
    mobile: "12345",
    status: "ON",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    // You can add your API logic here
  };

  return (
    <div className="profile-container">
      <h6 className="profile-title">My Profile</h6>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>

        <div className="profile-group">
          <label>E-Mail Id</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>

        <div className="profile-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={profile.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="profile-group">
          <label>Withdrawal Request Status</label>
          <select name="status" value={profile.status} onChange={handleChange}>
            <option value="ON">ON</option>
            <option value="OFF">OFF</option>
          </select>
        </div>

        <div className="btn-container">
          <button type="submit" className="update-btn">Update Profile</button>
        </div>
      </form>
    </div>
  );
}; 

export default Profile
