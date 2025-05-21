import React, { useState } from 'react'; 
import './App.css';
import Header from './Header';
import Sidebar from './Component/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Transaction from './Component/Transaction';
import AllUser from './Component/UserSections/AllUser';
import WalletBalance from './Component/UserSections/walletBalance';
import AllActiveUsers from './Component/UserSections/AllActiveUsers';
import AllinActive from './Component/UserSections/AllinActive';
import BlockMember from './Component/UserSections/BlockMember';
import PayoutSummary from './Component/PayoutSum/PayoutSummary';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
   <div className="container-fluid">
  <div className="row ">
    <div className={collapsed ? 'col-auto sidebar-container px-0' : 'col-md-2 col-sm-3 sidebar-container px-0'}>
      <Sidebar collapsed={collapsed} />
    </div>

    <div className={collapsed ? 'col ps-0' : 'col-md-10 col-sm-9 g-0 g-1'}>
      <Header toggleSidebar={() => setCollapsed(!collapsed)} />
  
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/alluser" element={<AllUser/>}/>
        <Route path="/walletbalance" element={<WalletBalance/>}/>
        <Route path="/activeusers" element={<AllActiveUsers/>}/>
        <Route path="/activein" element={<AllinActive/>}/>
        <Route path="/blockusers" element={<BlockMember/>}/>
        <Route path="/payout" element={<PayoutSummary/>}/>
       
        </Routes> 
    </div>
  </div>
</div>

  );
};

export default App;
