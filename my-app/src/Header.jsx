import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import './App.css'; 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Header = ({ toggleSidebar }) => {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className=" ">
      

      <div className='container-fluid pt-2 px-0 bg-danger px-0' >
        <div className='row'>
            <div className='col-lg-12'>
                <div className='row'>
                    <div className='col-lg-2 col-2 DesktopView1010'>
                      <div className=''> 
                         <LuMenu  onClick={toggleSidebar}   style={{fontSize:'28px',  cursor:'pointer', }} /> 
                         </div>
                          
                    </div>
                    <div className='col-lg-2 col-2 MobileView1010'>
                       
                         <div className=' '>

                       <CiMenuBurger className='mt-1'  style={{fontSize:'28px',  cursor:'pointer', }}  onClick={handleShow}/> 
                         </div>
                    </div>

                    <div className='col-lg-8 col-sm-6 col-md-6 col-9'>
                        <h4 className='mt-2 text-center'>Welcome Admin</h4>
                    </div>
                    <div className='col-lg-2 col-sm-6 col-md-6'> 
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
