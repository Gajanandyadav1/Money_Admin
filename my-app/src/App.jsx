import React, { useState } from 'react'; 
import './App.css';
import Header from './Header';
import Sidebar from './Component/SideBar';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="container-fluid ">
      <div className="row">
        {/* Sidebar */}
        <div className={collapsed ? 'col-auto sidebar-container px-0' : 'col-md-2 col-sm-3 sidebar-container px-0'}>
          <Sidebar collapsed={collapsed} />
        </div>

        {/* Main Content */}
        <div className={collapsed ? 'col ' : 'col-md-10 col-sm-9 '}>
          <Header toggleSidebar={() => setCollapsed(!collapsed)} />
          <div className="main-content p-4">
            <section  className="section-box mb-5">Dashboard Section</section>
            <section  className="section-box mb-5">General List Section</section>
            <section  className="section-box mb-5">Users Section</section> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
