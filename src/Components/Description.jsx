import React from "react";
import RightImg from "../Assets/Images/Card.png";
import google from "../Assets/Images/Header/Google.png";
import facebook from "../Assets/Images/Header/fce.png";
import youtube from "../Assets/Images/Header/ytube.png";
import pinterest from "../Assets/Images/Header/pinterest.png";
import twitch from "../Assets/Images/Header/twitch.png";

const ResponsiveHero = () => {
  return (
    <div className="bg-[#f0f0f7] mt-[-70px]">
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-2">
          <div className="bg-[#FF3E54] text-white rounded-[26px] w-full lg:w-2/3 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#FFFFFF80]">
                Organize.
              </h1>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#FFFFFFCC] mt-2">
                Achieve.<br />Relax.
              </h1>

              <p className="mt-10 text-sm sm:text-base md:text-lg text-white font-medium max-w-[500px]">
                Turn clutter into clarity, chaos into control, and dreams into done. Bold visions into market success.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition w-full sm:w-auto">
                Get Started Today
              </button>
              <button className="bg-[#FFFFFF1A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5b6d] transition w-full sm:w-auto">
                Discover Features
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex items-center justify-center">
            <img
              src={RightImg}
              alt="Demo"
              className="w-full max-w-xs sm:max-w-sm rounded-[24px] shadow-md object-cover"
            />
          </div>

        </div>
      </section>

      
      <div className="bg-[#f0f0f7] py-6">
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center items-center gap-10 sm:gap-16 md:gap-20 lg:gap-24 px-4">
          {[google, facebook, youtube, pinterest, twitch].map((logo, i) => (
            <img key={i} src={logo} alt="Brand" className="h-6 sm:h-8 object-contain" />
          ))}
        </div>
      </div>
         </div>
  );
};

export default ResponsiveHero;
