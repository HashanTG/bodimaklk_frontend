import React from "react";

const Hero: React.FC = () => {
  return (
      <div>
          {/* Main Section */}
<div className="bg-[#F6C90E] w-full flex flex-col md:flex-row items-center px-4 md:px-12 py-8 relative overflow-hidden">

  {/* Left: Form & Heading */}
  <div className="w-full h-[500px] md:w-1/2 flex flex-col justify-center ml-[112px]">
    <h1 className="text-2xl md:text-4xl font-bold mb-6 text-[#2E4750]">
      "Find, Rent, Manage – Your Space, Your Way"
    </h1>
    <form className="w-full max-w-lg space-y-4">
      <div>
        <label className="block text-base md:text-lg font-small mb-1 text-black" htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="Enter a state, locality or area"
          className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700 placeholder-gray-400"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-base font-small mb-1 text-black" htmlFor="type">Type</label>
          <select id="type" className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700">
            <option>All types</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block text-base font-small mb-1 text-black" htmlFor="bedrooms">Bedrooms</label>
          <select id="bedrooms" className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700">
            <option>Any</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-base font-small mb-1 text-black" htmlFor="minPrice">Min price</label>
          <select id="minPrice" className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700">
            <option>No Min</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block text-base font-small mb-1 text-black" htmlFor="maxPrice">Max price</label>
          <select id="maxPrice" className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700">
            <option>No Max</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-md bg-[#2E4750] text-white font-semibold text-lg mt-2"
      >
        Search
      </button>
    </form>
  </div>

  {/* Right: Illustration */}
  <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
    <img
      src="/rb_2148653817 1.png"
      alt="Illustration"
      className="w-64 md:w-[600px] h-auto"
    />
  </div>
</div>
    </div>
  );
};

export default Hero;
