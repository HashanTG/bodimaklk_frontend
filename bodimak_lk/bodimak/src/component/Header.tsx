import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/Vector7.png"
        alt=""
        className="pointer-events-none select-none absolute top-0 right-[260px] w-[350px] md:w-[450px] lg:w-[550px] z-0"
        aria-hidden="true"
      />

      <img
        src="/Vector7.png"
        alt=""
        className="pointer-events-none select-none absolute top-0 right-[310px] w-[350px] md:w-[450px] lg:w-[550px] z-0"
        aria-hidden="true"
      />

      <img
        src="/Vector7.png"
        alt=""
        className="pointer-events-none select-none absolute top-0 right-[360px] w-[350px] md:w-[450px] lg:w-[550px] z-0"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between px-4 md:px-12">
        <img src="/logo.png" alt="logo" className="w-32 h-auto md:w-40" />

        <div className="flex gap-3 md:gap-5">
          <button className="px-6 py-2 rounded-full bg-[#2E4750] text-white font-medium text-base md:text-lg">
            Sign in
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-[#2E4750] text-[#2E4750] bg-white font-medium text-base md:text-lg">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
