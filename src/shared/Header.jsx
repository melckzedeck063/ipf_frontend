import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 p-6 sticky top-0 z-100 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link style={{fontSize : '2rem'}} to="/" className="text-3xl font-bold text-white">
          MovieStream
        </Link>
        
        <div className="relative w-1/2 max-w-lg mx-4 flex ">
          <input
            type="text"
            placeholder="Search movies, shows, genres..."
            className="w-full bg-gray-800 text-gray-200 rounded-full py-2 pl-10 pr-10 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 left-2 top-3 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1012 19.5a7.5 7.5 0 004.65-1.85z" />
            </svg>
          </button>
        </div>

        <nav className="flex items-center space-x-4">
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-200 ease-in-out"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-200 ease-in-out"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
