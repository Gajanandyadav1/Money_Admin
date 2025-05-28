import React, { useState } from 'react';
import '../App.css';
import { MdDashboard } from "react-icons/md";
import { FaChevronDown, FaDollarSign } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { RiFundsBoxLine } from "react-icons/ri";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";

const Sidebar = ({ collapsed }) => {
  const [active, setActive] = useState('dashboard');

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const [openDropdown, setOpenDropdown] = useState('');
  const [openDropdown2, setOpenDropdown2] = useState('');
  // const [openDropdown3, setOpenDropdown3] = useState('');
  const [openDropdown4, setOpenDropdown4] = useState('');
  const [openDropdown5, setOpenDropdown5] = useState('');
  const [openDropdown6, setOpenDropdown6] = useState('');
  const [openDropdown7, setOpenDropdown7] = useState('');
  const [openDropdown8, setOpenDropdown8] = useState('');

  const handleClick1 = (menu) => {
    setActive(menu);
    setOpenDropdown(openDropdown === menu ? '' : menu);
  };
  const handleClick2 = (menu) => {
    setActive(menu);
    setOpenDropdown2(openDropdown2 === menu ? '' : menu);
  };
  // const handleClick3 = (menu) => {
  //   setActive(menu);
  //   setOpenDropdown3(openDropdown3 === menu ? '' : menu);
  // };
  const handleClick4 = (menu) => {
    setActive(menu);
    setOpenDropdown4(openDropdown4 === menu ? '' : menu);
  };
  const handleClick5 = (menu) => {
    setActive(menu);
    setOpenDropdown5(openDropdown5 === menu ? '' : menu);
  };
  const handleClick6 = (menu) => {
    setActive(menu);
    setOpenDropdown6(openDropdown6 === menu ? '' : menu);
  };
  const handleClick7 = (menu) => {
    setActive(menu);
    setOpenDropdown7(openDropdown7 === menu ? '' : menu);
  };
  const handleClick8 = (menu) => {
    setActive(menu);
    setOpenDropdown8(openDropdown8 === menu ? '' : menu);
  };

  return (
   <>
   <div className='hDark' >
   <div className='container-fluid DeskTopView'  style={{boxShadow: '0px 0px 3px 0px #f97316',  }}>
    <div className="row">
      <div className='col-lg-12 col-sm-12 ps-0 ms-0'>

        <div>
          <h4 className='text-center pt-4'>Logo</h4>
        </div >
         <div className={`sidebar  ${collapsed ? 'collapsed' : ''}`}>
     <NavLink  to="/" style={{textDecoration:'none',color:'#000'}}><div className={`menu-item ${active === 'dashboard' ? 'active' : ''}`} onClick={() => handleClick('dashboard')}>
        <span><MdDashboard className='fs-5'/></span> {!collapsed && <span className="ms-2">Dashboard</span>}
      </div></NavLink> 
{/* ******************************************************************************************************************************** */}
       <div> 
      <div
        className={`menu-item ${active === 'general1' ? 'active' : ''}`}
        onClick={() => handleClick1('general')}
      >
        <span><FaUser /></span>
        {!collapsed && (
          <>
            <span className="ms-2">General List</span>
           <span className={`ms-auto rotate-icon ${openDropdown === 'general' ? 'rotate' : ''}`}>
  {<FaChevronDown />}
</span>

          </>
        )}
      </div>

     
      <div
        className={`submenu-container ${openDropdown === 'general' && !collapsed ? 'open' : ''}`}
      >
       <NavLink to="/transaction" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Transaction</div> </NavLink>
       
      </div>
    </div> 

{/* ************************************************************************************************************************************ */}



        <div>
      {/* General List (Dropdown) */}
      <div
        className={`menu-item ${active === 'general1' ? 'active' : ''}`}
        onClick={() => handleClick2('general')}
      >
        <span><FaUser /></span>
        {!collapsed && (
          <>
            <span className="ms-2">Users Section</span>
           <span className={`ms-auto rotate-icon ${openDropdown2 === 'general' ? 'rotate' : ''}`}>
  {<FaChevronDown />}
</span>

          </>
        )}
      </div>

      {/* Smooth dropdown */}
      <div
        className={`submenu-container ${openDropdown2 === 'general' && !collapsed ? 'open' : ''}`}
      >
       <NavLink to="/alluser" style={{textDecoration:'none'}}>  <div className="submenu-item">➤  All Users</div> </NavLink>
       <NavLink to="/walletbalance" style={{textDecoration:'none'}}>  <div className="submenu-item">➤  Wallet Balance</div> </NavLink>
       <NavLink to="/activeusers" style={{textDecoration:'none'}}>  <div className="submenu-item">➤  Active Balance</div> </NavLink>
       <NavLink to="/activein" style={{textDecoration:'none'}}>  <div className="submenu-item">➤  In-Active Balance</div> </NavLink>
       <NavLink to="/blockusers" style={{textDecoration:'none'}}>  <div className="submenu-item">➤  Block Balance</div> </NavLink>
       
      </div>
    </div> 

{/* ************************************************************************************************************************************ */}
            <NavLink to="/payout" style={{textDecoration:'none',color:'#000'}}><div className={`menu-item ${active === 'Payout' ? 'active' : ''}`} onClick={() => handleClick('Payout')}>
      <span><FaDollarSign  /></span> {!collapsed && <span className="ms-2">Payout Summary</span>}
      </div>
</NavLink>
        

{/* ************************************************************************************************************************************ */}



        <div>
      {/*   List (Dropdown) */}
      <div
        className={`menu-item ${active === 'general1' ? 'active' : ''}`}
        onClick={() => handleClick4('general')}
      >
        <span><FaDollarSign /></span>
        {!collapsed && (
          <>
            <span className="ms-2">Income Report</span>
           <span className={`ms-auto rotate-icon ${openDropdown4 === 'general' ? 'rotate' : ''}`}>
  {<FaChevronDown />}
</span>

          </>
        )}
      </div>

      {/* Smooth dropdown */}
      <div
        className={`submenu-container ${openDropdown4 === 'general' && !collapsed ? 'open' : ''}`}
      >
       <NavLink to="/SponsorIncome" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Referral Income</div> </NavLink>
       <NavLink to="/LevelIncome" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Team Income</div> </NavLink>
       <NavLink to="/dailyIncome" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Daily Income</div> </NavLink>
       <NavLink to="/reward_income" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Reward Income</div> </NavLink>
       
      </div>
    </div> 

{/* ************************************************************************************************************************************ */}


        <div> 
      <div
        className={`menu-item ${active === 'general1' ? 'active' : ''}`}
        onClick={() => handleClick5('general')}
      >
        <span><RiFundsBoxLine /></span>
        {!collapsed && (
          <>
            <span className="ms-2">Fund Section</span>
           <span className={`ms-auto rotate-icon ${openDropdown5 === 'general' ? 'rotate' : ''}`}>
  {<FaChevronDown />}
</span>

          </>
        )}
      </div>

      {/* Smooth dropdown */}
      <div
        className={`submenu-container ${openDropdown5 === 'general' && !collapsed ? 'open' : ''}`}
      >
       <NavLink to="/fund_transfer" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Fund Transfer</div> </NavLink>
       <NavLink to="/fund-history" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Admin History</div> </NavLink>
       
      </div>
    </div> 

{/* ************************************************************************************************************************************ */}

        <div> 
      <div
        className={`menu-item ${active === 'general1' ? 'active' : ''}`}
        onClick={() => handleClick6('general')}
      >
        <span><FaLongArrowAltLeft  /></span>
        {!collapsed && (
          <>
            <span className="ms-2">Deposit Section</span>
           <span className={`ms-auto rotate-icon ${openDropdown6 === 'general' ? 'rotate' : ''}`}>
  {<FaChevronDown />}
</span>

          </>
        )}
      </div>

      {/* Smooth dropdown */}
      <div
        className={`submenu-container ${openDropdown6 === 'general' && !collapsed ? 'open' : ''}`}
      >
       <NavLink to="/View-deposite-request" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Pending Deposite</div> </NavLink>
       <NavLink to="/Compelte-deposite-Request" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Complete Deposite</div> </NavLink>
       <NavLink to="/reject-Request" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Reject Deposite</div> </NavLink>
       
       
      </div>
    </div> 

{/* ************************************************************************************************************************************ */}


        <div> 
      <div
        className={`menu-item ${active === 'general1' ? 'active' : ''}`}
        onClick={() => handleClick7('general')}
      >
        <span><FaBitcoin   /></span>
        {!collapsed && (
          <>
            <span className="ms-2">Withdrawal Request</span>
           <span className={`ms-auto rotate-icon ${openDropdown7 === 'general' ? 'rotate' : ''}`}>
  {<FaChevronDown />}
</span>

          </>
        )}
      </div>

      {/* Smooth dropdown */}
      <div
        className={`submenu-container ${openDropdown7 === 'general' && !collapsed ? 'open' : ''}`}
      >
      <NavLink to="/withdraw_pending" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Pending Withdraw</div> </NavLink>
       <NavLink to="/Compelte-Withdraw" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Complete Withdraw</div> </NavLink>
       <NavLink to="/reject-Withdraw" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Reject Withdraw</div> </NavLink>
      </div>
    </div> 

{/* ************************************************************************************************************************************ */}


 

  <div> 
      <div
        className={`menu-item ${active === 'general11' ? 'active' : ''}`}
        onClick={() => handleClick8('general11')}
      >
        <span><FaBitcoin   /></span>
        {!collapsed && (
          <>
            <span className="ms-2">Setting</span>
           <span className={`ms-auto rotate-icon ${openDropdown8 === 'general11' ? 'rotate' : ''}`}>
  {<FaChevronDown />}
</span>

          </>
        )}
      </div>

      {/* Smooth dropdown */}
      <div
        className={`submenu-container ${openDropdown8 === 'general11' && !collapsed ? 'open' : ''}`}
      >
      <NavLink to="/withdraw_pending" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Pending Withdraw</div> </NavLink>
       <NavLink to="/Compelte-Withdraw" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Complete Withdraw</div> </NavLink>
       <NavLink to="/reject-Withdraw" style={{textDecoration:'none'}}>  <div className="submenu-item">➤ Reject Withdraw</div> </NavLink>
      </div>
    </div> 




      <NavLink to="/help" style={{textDecoration:'none', color:'#212529'}} ><div className={`menu-item ${active === 'users' ? 'active' : ''}`} onClick={() => handleClick('users')}>
         <span><IoIosSpeedometer /></span> {!collapsed && <span className="ms-2">Help Center  </span> 
        }
      </div>
        </NavLink>


        <NavLink to="/tree"  style={{textDecoration:'none', color:'#212529'}}>
      <div className={`menu-item ${active === 'payout' ? 'active' : ''}`} onClick={() => handleClick('payout')}>
        <span><IoIosLogIn /></span> {!collapsed && <span className="ms-2">Mamber-Tree</span>}
      </div></NavLink>
    </div>


      </div>
    </div>
   </div>
   </div>
   </>
  );
};

export default Sidebar;
