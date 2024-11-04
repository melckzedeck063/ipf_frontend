import React, { useState } from 'react'
import Sidebar from './SideBar';
import TopNav from './DashboardHeader';
import DashboardContainer from '../components/DashboardContainer';
const DashboardLayout = ({ children }) => {
    const [activeItem, setActiveItem] = useState("home");
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    return (
      <div className="min-h-screen flex bg-gray-800">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} className="sticky top-0" />
        <div className="flex flex-col w-full">
          <TopNav className="w-full" />
          <DashboardContainer className="flex-grow">{children}</DashboardContainer>
        </div>
      </div>
    );
  };
  
  export default DashboardLayout;
  

