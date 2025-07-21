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
import UserRequest from './Component/UserRequest/UserRequest' ;
import Plan from './Component/Plan/Plan';
import Package2 from './Component/packages/package';
import PublicRoute from './Component/ProtectedRoute/PublicRoute';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import Incomes  from './Component/Income/Incomes'
import WithdrawHistory from './Component/WithdrawSection/WIthdrawHistory';
import Support from './Component/Support/Support';
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
        <Route path="/transaction" element={ <ProtectedRoute> <Transaction/> </ProtectedRoute>}/>
        <Route path="/alluser" element={<ProtectedRoute> <AllUser/> </ProtectedRoute>}/>
        <Route path="/UserProfile/:id" element={<ProtectedRoute> <WalletBalance/> </ProtectedRoute>}/>
        <Route path="/activeusers" element={<ProtectedRoute> <AllActiveUsers/> </ProtectedRoute>}/>
        <Route path="/activein" element={<ProtectedRoute> <AllinActive/> </ProtectedRoute>}/>
        <Route path="/blockusers" element={<ProtectedRoute> <BlockMember/> </ProtectedRoute>}/>
        <Route path="/payout" element={<ProtectedRoute> <PayoutSummary/> </ProtectedRoute>}/>
        {/* <Route path="/SponsorIncome" element={<ProtectedRoute> <ReferralIncome/></ProtectedRoute>}/> */}
        {/* <Route path="/LevelIncome" element={<ProtectedRoute> <TeamIncome/> </ProtectedRoute>}/> */}
        {/* <Route path="/dailyIncome" element={<ProtectedRoute> <DailyIncome/> </ProtectedRoute>}/> */}
        {/* <Route path="/reward_income" element={<ProtectedRoute> <Reward/> </ProtectedRoute>}/> */}
        <Route path="/fund_transfer" element={<ProtectedRoute> <Fund_Transfer/></ProtectedRoute>}/>
        <Route path="/fund-history" element={<ProtectedRoute> <AdminFundTransfer/></ProtectedRoute>}/>
        <Route path="/View-deposite-request" element={<ProtectedRoute> <DepositRequest/> </ProtectedRoute>}/>
        <Route path="/Compelte-deposite-Request" element={<ProtectedRoute> <CompleteDepositRequest/> </ProtectedRoute>}/>
        <Route path="/reject-Request" element={<ProtectedRoute> <FailedDepositeRequest/> </ProtectedRoute>}/>
        <Route path="/withdraw_pending" element={<ProtectedRoute> <PendingRequest/> </ProtectedRoute>}/>
        <Route path="/Compelte-Withdraw" element={<ProtectedRoute> <CompelteWithdraw/> </ProtectedRoute>}/>
        <Route path="/reject-Withdraw" element={<ProtectedRoute> <RejectWithdraw/> </ProtectedRoute>}/>
        <Route path="/help" element={<ProtectedRoute><HelpCenter/> </ProtectedRoute>}/>
        <Route path="/tree" element={<ProtectedRoute><MamberTree/> </ProtectedRoute>}/>
        <Route path="/updatepassword" element={<ProtectedRoute> <ChangePassword/> </ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute> <Profile/> </ProtectedRoute>}/>
        {/* <Route path="/wallet" element={<WalletSettings/>}/> */}
        <Route path="/news" element={<ProtectedRoute> <News/> </ProtectedRoute>}/>
        <Route path="/User_req" element={<ProtectedRoute> <UserRequest/> </ProtectedRoute>}/>
        <Route path="/plan" element={<ProtectedRoute><Plan/> </ProtectedRoute>}/>
        <Route path="/package" element={<ProtectedRoute><Package2/></ProtectedRoute>}/>
        <Route path="/income" element={<ProtectedRoute><Incomes/></ProtectedRoute>}/>
        <Route path="/withdraw_history" element={<ProtectedRoute><WithdrawHistory/></ProtectedRoute>}/>
        <Route path="/support" element={<ProtectedRoute><Support/></ProtectedRoute>}/>
 
        </Routes> 
    </div>
  </div>
</div>

  );
};

export default App;
