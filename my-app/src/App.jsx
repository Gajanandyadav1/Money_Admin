import React, { useState } from 'react'; 
import './App.css';
import Header from './Header';
import Sidebar from './Component/SideBar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Component/Home';
import Transaction from './Component/Transaction';
import AllUser from './Component/UserSections/AllUser';
import WalletBalance from './Component/UserSections/walletBalance';
import AllActiveUsers from './Component/UserSections/AllActiveUsers';
import AllinActive from './Component/UserSections/AllinActive' ;
import BlockMember from './Component/UserSections/BlockMember' ;
import PayoutSummary from './Component/PayoutSum/PayoutSummary' ;
import ReferralIncome from './Component/IncomeReport/ReferralIncome'; 
import TeamIncome from './Component/IncomeReport/TeamIncome';
import DailyIncome from './Component/IncomeReport/DailyIncome';
import Reward from './Component/IncomeReport/Reward'; 
import Fund_Transfer from './Component/FundSection/Fund_Transfer';
import AdminFundTransfer from './Component/FundSection/AdminFundTransfer';
import DepositRequest from './Component/Deposite_Section/DepositeRequest';
import CompleteDepositRequest from './Component/Deposite_Section/CompleteDepositRequest';
import FailedDepositeRequest from './Component/Deposite_Section/FailedDepositeRequest';
import PendingRequest from './Component/WithdrawSection/PendingRequest'; 
import CompelteWithdraw from './Component/WithdrawSection/CompelteWithdraw';
import RejectWithdraw from './Component/WithdrawSection/RejectWithdraw';
import HelpCenter from './Component/HelpCenter_Section/HelpCenter';
import MamberTree from './Component/Mamber/MamberTree';
import ChangePassword from './Component/Profile/ChangePassword';
import Profile from './Component/Profile/profile';
import WalletSettings from './Component/Setting/WalletSettings'; 
import News from './Component/Setting/News';
import Login from './Component/RegisterLogin/Login';
import UserRequest from './Component/UserRequest/UserRequest';
import Plan from './Component/Plan/Plan';
import Package2 from './Component/packages/package';
import PublicRoute from './Component/ProtectedRoute/PublicRoute';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  // agar path "/" ho, matlab login page hai
  const isLoginPage = location.pathname === '/';
  return (
   <div className="container-fluid">
  <div className="row ">
       {!isLoginPage && (
      <div className={collapsed ? 'col-auto sidebar-container px-0' : 'col-md-2 col-sm-3 sidebar-container px-0'}>
        <Sidebar collapsed={collapsed} />
      </div>
    )}

 
    <div className={isLoginPage ? 'col-12 px-0' : (collapsed ? 'col ps-0' : 'col-md-10 col-sm-9 g-0 g-1')}>
 
      {!isLoginPage && <Header toggleSidebar={() => setCollapsed(!collapsed)} />}
         <Routes>
        <Route path="/" element={<PublicRoute> <Login/></PublicRoute>}/>

        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/alluser" element={<AllUser/>}/>
        <Route path="/UserProfile/:id" element={<WalletBalance/>}/>
        <Route path="/activeusers" element={<AllActiveUsers/>}/>
        <Route path="/activein" element={<AllinActive/>}/>
        <Route path="/blockusers" element={<BlockMember/>}/>
        <Route path="/payout" element={<PayoutSummary/>}/>
        <Route path="/SponsorIncome" element={<ReferralIncome/>}/>
        <Route path="/LevelIncome" element={<TeamIncome/>}/>
        <Route path="/dailyIncome" element={<DailyIncome/>}/>
        <Route path="/reward_income" element={<Reward/>}/>
        <Route path="/fund_transfer" element={<Fund_Transfer/>}/>
        <Route path="/fund-history" element={<AdminFundTransfer/>}/>
        <Route path="/View-deposite-request" element={<DepositRequest/>}/>
        <Route path="/Compelte-deposite-Request" element={<CompleteDepositRequest/>}/>
        <Route path="/reject-Request" element={<FailedDepositeRequest/>}/>
        <Route path="/withdraw_pending" element={<PendingRequest/>}/>
        <Route path="/Compelte-Withdraw" element={<CompelteWithdraw/>}/>
        <Route path="/reject-Withdraw" element={<RejectWithdraw/>}/>
        <Route path="/help" element={<HelpCenter/>}/>
        <Route path="/tree" element={<MamberTree/>}/>
        <Route path="/updatepassword" element={<ChangePassword/>}/>
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="/wallet" element={<WalletSettings/>}/> */}
        <Route path="/news" element={<News/>}/>
        <Route path="/User_req" element={<UserRequest/>}/>
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/package" element={<Package2/>}/>
 
        </Routes> 
    </div>
  </div>
</div>

  );
};

export default App;
