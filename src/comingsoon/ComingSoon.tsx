import React from "react";
import { CountdownTimer } from "../component/CountdownTimer";

const LAUNCH_DATE = new Date("2025-05-27T12:00:00+05:30").getTime();

const ComingSoon: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-700">
    <div className="bg-slate-900/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center max-w-lg w-full">
      <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
        Coming Soon
      </h1>
      <p className="text-lg text-indigo-200 mb-8">
        Our site is launching soon. Stay tuned and mark your calendar!
      </p>
      <CountdownTimer targetDate={LAUNCH_DATE} />
      <div className="mt-8 flex justify-center">
        <input
          type="email"
          className="px-4 py-2 rounded-l bg-white/80 focus:outline-none text-gray-800"
          placeholder="Enter your email"
        />
        <button className="px-4 py-2 rounded-r bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
          Notify Me
        </button>
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <a href="#" className="text-indigo-300 hover:text-white">
          {/* Social Icon SVG */}
        </a>
        <a href="#" className="text-indigo-300 hover:text-white">
          {/* Social Icon SVG */}
        </a>
      </div>
    </div>
  </div>
);

export default ComingSoon;
