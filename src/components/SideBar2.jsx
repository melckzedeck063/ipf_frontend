import React from 'react';
import { Link } from 'react-router-dom';
import { ContactMail, Dashboard, DashboardRounded, GraphicEqRounded, Group, Settings } from '@mui/icons-material';

const Sidebar2 = () => {
  const navItems = [
    { name: 'Dashboard', icon: Dashboard, path: '/dashboard2' },
    { name: 'Settings', icon: Settings, path: '/settings' }
  ];

  return (
    <div className="h-screen sticky top-0 w-64 bg-gray-900 text-gray-100 shadow-lg">
  <div className="flex items-center justify-center h-16 bg-gray-800 text-2xl font-bold">
   MovieStream
  </div>
  <nav className="mt-10">
    {navItems.map((item) => (
      <Link
        key={item.name}
        to={item.path}
        className="flex items-center px-4 py-2 mt-4 text-gray-300 hover:bg-gray-500 hover:text-white" // Background changes to grey when hovered
        style={{ textDecoration: 'none', color: 'inherit' }} // Keeps link color from turning blue
      >
        <span className="text-xl"> <item.icon /> </span>
        <span className="mx-4 font-medium">{item.name}</span>
      </Link>
    ))}
  </nav>
 </div>

  );
};

export default Sidebar2;
