import React from 'react';
import { LogoutIcon, SearchIcon, UserIcon } from "@heroicons/react/solid";
import { LogoutRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const TopNav = () => {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('ipf-token');

    setTimeout(() => {
      navigate("/")
    }, 1000);

  };


  return (
    <div className="sticky top-0 bg-gray-800 text-white w-full h-16 flex flex-row justify-between px-4 shadow-md z-10">
      <h1 className="text-xl font-bold mt-4">Dashboard</h1>
      <div className="flex flex-row justify-between items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-6 py-1 rounded-full outline-none focus:ring focus:ring-indigo-500"
          />
          <SearchIcon className="absolute right-2 top-2 left-1 h-5 w-5 text-gray-400" />
        </div>
        <LogoutRounded onClick={() => logout()}  className="h-12 w-12 bg-red-400 hover:cursor-pointer rounded-md hover:bg-red-500 text-red-400" />
      </div>
    </div>
  );
};

export default TopNav;
