import { useState } from "react";
import { HomeIcon, ChartSquareBarIcon, CogIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";

const Sidebar = ({ activeItem, setActiveItem }) => {
  const navItems = [
    { id: "Dashboard", name: "Dashboard", icon: <Dashboard className="h-5 w-5" />, dest : "/dashboard2" },
    { id: "analytics", name: "Analytics", icon: <ChartSquareBarIcon className="h-5 w-5" />, dest : "/" },
    { id: "settings", name: "Settings", icon: <CogIcon className="h-5 w-5" />, dest : "/settings" },
  ];

  return (
    <div className="fixed lg:relative w-64 lg:w-64 bg-gray-900 min-h-screen text-gray-300 lg:sticky top-0">
      <nav className="flex flex-col p-4 space-y-4 mt-12">
        {navItems.map((item) => (
          <Link
           to={item.dest}
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`flex items-center space-x-3 p-2 rounded-md transition-colors duration-200 ${
              activeItem === item.id ? "bg-gray-700 text-white" : "hover:bg-gray-700"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>        
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

