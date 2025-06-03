import React from "react";
import testimonialImg from "../Assets/Images/Testimonials.png";
import Img1 from "../Assets/Images/Groupp.png";

const Testimonial = () => {
  return (
    <div className="w-full px-4 py-12 md:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-start gap-10">

        <div className="relative w-full md:w-[40%] h-auto md:h-[450px] bg-white">
          <div className="hidden md:block absolute inset-0 border-t-[12px] border-b-[12px] border-l-[12px] border-[#FF3E54]" />
          <div className="hidden md:block absolute top-0 right-0 h-12 border-r-[12px] border-[#FF3E54]" />
          <div className="hidden md:block absolute bottom-0 right-0 h-12 border-r-[12px] border-[#FF3E54]" />

          <div className="relative md:absolute md:top-1/2 md:right-[-45%] md:transform md:-translate-y-1/2 text-left w-full md:w-[125%] px-4 md:px-0">
            <p className="text-xl md:text-3xl font-bold text-black leading-relaxed mb-6 ml-0 md:ml-20">
              "Using this website has made my tasks so much easier! I can't imagine my day without it."
            </p>

            <div className="flex items-center justify-start gap-3 mb-6 ml-0 md:ml-20">
              <img src={Img1} alt="User Icon" className="w-12 h-12 object-contain" />
              <div className="text-start">
                <h4 className="text-sm font-bold text-black">Sherri Cronin</h4>
                <p className="text-xs text-black">Project Manager, TechCorp</p>
              </div>
            </div>

            <div className="flex justify-start gap-3 ml-0 md:ml-20">
              <button className="w-8 h-8 rounded-full border-2 border-[#FF3E54] text-black font-bold flex items-center justify-center hover:bg-[#ffe8eb]">
                &lt;
              </button>
              <button className="w-8 h-8 rounded-full bg-[#FF3E54] text-white font-bold flex items-center justify-center hover:bg-[#ff5c6c]">
                &gt;
              </button>
            </div>
          </div>
        </div>


        <div className="relative w-full md:w-[35%] h-[370px] md:ml-60">
          <img
            src={testimonialImg}
            alt="Customer"
            className="w-[348px] h-[370px] object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
