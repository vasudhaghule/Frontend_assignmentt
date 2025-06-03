import React from "react";
import heroImg from "../Assets/Images/Organizing.png"; 
const HeroSection = () => {
  return (
    <div className="w-full px-4 md:px-16 py-12 bg-white mt-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
       
        <div className="w-full md:w-1/2">
          <img
            src={heroImg}
            alt="Product Screenshot"
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

      
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Start Organizing Your Life Today
          </h2>
          <p className="text-lg text-black mb-6">
           Join us now and transform your productivity with our intuitive to-do list platform!
          </p>
          
        
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <button className="px-6 py-2 bg-[#FF3E54] text-white font-semibold rounded hover:bg-[#e53348] transition">
              Sign Up
            </button>
            <button className="px-6 py-2 border border-[#FF3E54] text-[#FF3E54] font-semibold rounded hover:bg-[#ffe8eb] transition">
              Learn More
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
