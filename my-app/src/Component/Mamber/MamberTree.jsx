import React from 'react'
import '../Mamber/Member.css'

const members = {
  name: "alex",
  username: "AARON",
  children: [
    {
      name: "AK45866",
      username: "Rajiv",
      children: [
        { name: "AK6151", username: "Ram" },
        { name: "Open", username: "Open" },
      ],
    },
    {
      name: "Open",
      username: "Open",
      children: [
        { name: "Open", username: "Open" },
        { name: "Open", username: "Open" },
      ],
    },
  ],
};

const MemberNode = ({ member }) => {
  return (
    <li>
      <div className={`member-box ${member.name === "Open" ? "open" : "filled"}`}>
        <img
          src={
            member.name === "Open"
              ? "https://cdn-icons-png.flaticon.com/128/1946/1946429.png"
              : "https://cdn-icons-png.flaticon.com/128/149/149071.png"
          }
          alt="member"
        />
        <div className="member-info">
          <div className="name">{member.name}</div>
          <div className="username">{member.username}</div>
        </div>
      </div>
      {member.children && (
        <ul>
          {member.children.map((child, index) => (
            <MemberNode member={child} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
};

const MamberTree = () => {
  return (
    <div className="container mt-4">
      <div className="tree-header">
        <h5>Member Tree</h5> <br/> <br/>
        {/* <div className="search-box">
          <input type="text" placeholder="alex" />
          <button className="btn btn-primary">Search</button>
        </div> */}
      </div>
      <div className="tree-container">
        <ul className="tree">
          <MemberNode member={members} />
        </ul>
      </div>
    </div>
  );
};


export default MamberTree
