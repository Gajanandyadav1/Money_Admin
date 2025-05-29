import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import './App.css'; 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaUserAlt } from "react-icons/fa"; 
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';


const Header = ({ toggleSidebar }) => {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className=" ">
      

      <div className='container-fluid   '  style={{borderBottom:'2px solid red'}} >
        <div className='row '>
            <div className='col-lg-12 py-2'>
                <div className='row'>
                    <div className='col-lg-2 col-2 DesktopView1010'>
                      <div className=''> 
                         <LuMenu  onClick={toggleSidebar}   style={{fontSize:'24px',  cursor:'pointer', }} /> 
                         </div>
                          
                    </div>
                    <div className='col-lg-2 col-2 MobileView1010'>
                       
                         <div className=' '>

                       <CiMenuBurger className='mt-1'  style={{fontSize:'24px',  cursor:'pointer', }}  onClick={handleShow}/> 
                         </div>
                    </div>

                    <div className='col-lg-8 col-sm-6 col-md-6 col-8'>
                      <div className='text-center col-lg-8 col-md-6 d-none d-md-block'> 
                        <span className=' text-center'>Welcome Admin</span>
                      </div>
                    </div>
                    <div className='col-lg-2 col-sm-6 col-md-6 col-2'> 
                      <div style={{display:'flex', justifyContent:'center', }}>

                         <Dropdown>
      <Dropdown.Toggle variant="white"  style={{outline:'none', border:'none'}}>
        <FaUserAlt id="dropdown-basic" />
      </Dropdown.Toggle>

      <Dropdown.Menu >
       <NavLink to="/profile">  <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item> </NavLink>
       <NavLink to="/updatepassword">   <Dropdown.Item href="#/action-2">Change Password </Dropdown.Item> </NavLink>
        <Dropdown.Item href="#/action-3">Logout  </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                      </div>

                    </div>
                </div>
         
 
            </div>
        </div>
      </div>





      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          

      <Offcanvas show={show} onHide={handleClose} style={{width:'80%'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Header;




