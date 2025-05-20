import React, { useState } from 'react';
import '../App.css';

const Sidebar = ({ collapsed }) => {
  const [active, setActive] = useState('dashboard');

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
   <>
   <div className='container-fluid DeskTopView'  style={{boxShadow: '0px 0px 5px 0px #000000'}}>
    <siv className="row">
      <div className='col-lg-12 col-sm-12 ps-0 ms-0'>
         <div className={`sidebar  ${collapsed ? 'collapsed' : ''}`}>
      <div className={`menu-item ${active === 'dashboard' ? 'active' : ''}`} onClick={() => handleClick('dashboard')}>
        <span>🏠</span> {!collapsed && <span className="ms-2">Dashboard</span>}
      </div>
      <div className={`menu-item ${active === 'general' ? 'active' : ''}`} onClick={() => handleClick('general')}>
        <span>📃</span> {!collapsed && <span className="ms-2">General List</span>}
      </div>
      <div className={`menu-item ${active === 'users' ? 'active' : ''}`} onClick={() => handleClick('users')}>
        <span>👥</span> {!collapsed && <span className="ms-2">Users Section</span>}
      </div>
      <div className={`menu-item ${active === 'payout' ? 'active' : ''}`} onClick={() => handleClick('payout')}>
        <span>💵</span> {!collapsed && <span className="ms-2">Payout Summary</span>}
      </div>
    </div>
      </div>
    </siv>
   </div>
   </>
  );
};

export default Sidebar;
