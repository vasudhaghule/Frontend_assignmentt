import React from "react";
import logo from "../Assets/Images/Header/Logo.png";


const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-4 md:px-8 lg:px-20 bg-white shadow-sm fixed top-0 left-0 z-50">
      
      <div className="flex items-center">
        <img src={logo} alt="Osumare Logo" className="h-8 md:h-12 lg:h-[90px] w-auto object-contain" />
      </div>

      <div className="hidden md:flex items-center justify-end flex-grow space-x-10">
        
        <nav className="flex space-x-6 lg:space-x-10 text-sm lg:text-lg font-medium text-gray-800">
          <a href="/" className="hover:text-blue-600">About Us</a>
          <a href="/" className="hover:text-blue-600">Features</a>
          <a href="/" className="hover:text-blue-600">More Option</a>
          <a href="/" className="hover:text-blue-600">Contact</a>
        </nav>

       
        <div className="flex space-x-3 lg:space-x-6 ml-6">
          <button className="px-5 py-1.5 border border-[#FF3E54] text-[#FF3E54] rounded-md text-sm hover:bg-red-50 transition">Log In</button>
          <button className="px-5 py-1.5 bg-[#FF3E54] text-white rounded-md text-sm hover:bg-red-600 transition">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
