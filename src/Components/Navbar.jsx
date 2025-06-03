import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const alldate = useSelector((state) => state.app.users);

  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4 sm:gap-0">
          
          
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              TodoApp
            </Link>
          </div>


          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <Link to="/" className="hover:text-gray-300 transition">
              Create Post
            </Link>
            <Link to="/read" className="hover:text-gray-300 transition">
              All Post ({alldate.length})
            </Link>
          </div>

          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              className="w-full sm:w-[220px] px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
