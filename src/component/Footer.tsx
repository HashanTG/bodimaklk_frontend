import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3A434B] text-gray-200 px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <div className="font-semibold mb-2 tracking-wide">BODIMAK.LK TEAM</div>
          <ul className="mb-6">
            <li>
              <a href="#" className="hover:text-white block mb-1 text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white block text-sm">
                Work with Us
              </a>
            </li>
          </ul>
         
        </div>

        {/* Right Section: Logo */}
        <div className="flex flex-col items-end">
          <div className="flex items-end">
            <img
              src="/logo.png"
              alt="bodimak.lk logo"
              className="h-18 md:h-30 w-auto select-none"
              draggable={false}
            />
            
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-400 pt-4 text-xs text-gray-400">
        <a href="#" className="hover:text-gray-200 mb-2 md:mb-0">
          Terms of Use &amp; Privacy Policy
        </a>
        <span>©2022 bodimak.lk. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
