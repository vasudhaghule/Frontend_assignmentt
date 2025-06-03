import React from "react";
import Logo from "../Assets/Images/Header/Logo.png";
import Facebook from "../Assets/Images/Social/Facebook.png";
import Instagram from "../Assets/Images/Social/Instagram.png";
import X from "../Assets/Images/Social/X.png";
import LinkedIn from "../Assets/Images/Social/LinkedIn.png";
import YouTube from "../Assets/Images/Social/Youtube.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#1A1A1A] px-6 md:px-16 pt-12 pb-6 border-t border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        
        <div className="space-y-4">
          <img src={Logo} alt="Logo" className="w-[100px]" />
          <p className="text-sm">
            Subscribe to our newsletter for the latest features and updates delivered to you.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 mt-4">
            <input
              type="email"
              placeholder="Your email here"
              className="flex-1 px-4 py-2 text-sm border border-[#333333] rounded placeholder:text-[#777777] outline-none min-w-[200px]"
            />
            <button
              type="submit"
              className="bg-[#FF455B] text-white text-sm px-6 py-2 rounded-md"
            >
              Join
            </button>
          </form>

          <p className="text-xs text-[#333333] mt-2">
            By subscribing, you consent to our <a href="/" className="underline">Privacy Policy</a> and agree to receive updates.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/">Home Page</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Blog Posts</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>
        </div>

  
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/">Help Center</a></li>
            <li><a href="/">User Guide</a></li>
            <li><a href="/">Community Forum</a></li>
            <li><a href="/">Feedback</a></li>
            <li><a href="/">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect With Us</h4>
          <div className="flex flex-col space-y-3 text-sm">
            {[
              { img: Facebook, name: "Facebook" },
              { img: Instagram, name: "Instagram" },
              { img: X, name: "X" },
              { img: LinkedIn, name: "LinkedIn" },
              { img: YouTube, name: "YouTube" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={item.img} alt={item.name} className="w-5 h-5" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-[#131212] pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-[#333] gap-4">
        <p>© 2024 Osumare. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" className="hover:underline">Privacy Policy</a>
          <a href="/" className="hover:underline">Terms of Service</a>
          <a href="/" className="hover:underline">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
