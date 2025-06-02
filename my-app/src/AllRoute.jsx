import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from  './Component/Home'; 
import SideBar from './Component/SideBar';
import App from './App' ;



const AllRoute = () => {
  return (
    <div>




      
{/* <App/> */}
      {/* <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2 col-md-2 col-sm-12'>
            <SideBar/>
          </div>

          <div className='col-lg-10 col-md-10 col-sm-12'>
              <BrowserRouter>
         <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        </Routes>
     </BrowserRouter>
          </div>
        </div>
      </div>
       */}
    </div>
  )
}

export default AllRoute
