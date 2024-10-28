// src/pages/Maintenance.tsx
import React from "react";

const Maintenance: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-400 via-orange-300 to-yellow-600">
    <div className="bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-md text-center">
      <div className="flex justify-center mb-6">
        {/* Wrench Icon (Heroicons) */}
        <svg className="w-16 h-16 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.293-6.293a6 6 0 11-8.486 8.486L3 21l3.707-3.707a6 6 0 018.486-8.486z" />
        </svg>
      </div>
      <h1 className="text-4xl font-extrabold text-yellow-900 mb-4 drop-shadow-sm">
        Maintenance Mode
      </h1>
      <p className="text-lg text-yellow-800 mb-6">
        We’re currently performing scheduled maintenance.<br />
        Thank you for your patience. Please check back soon!
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        {/* Example social icons */}
        <a href="#" className="text-yellow-700 hover:text-yellow-900 transition">
          {/* Twitter icon */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.79.35-1.64.58-2.53.69a4.23 4.23 0 001.85-2.34 8.36 8.36 0 01-2.67 1.02A4.19 4.19 0 0016.11 4c-2.32 0-4.2 1.88-4.2 4.2 0 .33.04.65.1.96C7.69 8.95 4.07 7.13 1.64 4.15c-.36.62-.56 1.35-.56 2.13 0 1.47.75 2.77 1.9 3.53-.7-.02-1.35-.22-1.92-.53v.05c0 2.06 1.47 3.78 3.42 4.17-.36.1-.75.16-1.15.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.41 8.41 0 012 19.54a11.86 11.86 0 006.29 1.84c7.54 0 11.67-6.25 11.67-11.67 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 4.59a8.21 8.21 0 01-2.36.65 4.2 4.2 0 001.84-2.32z"/></svg>
        </a>
        <a href="#" className="text-yellow-700 hover:text-yellow-900 transition">
          {/* Facebook icon */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .593 23.405 0 22.675 0"/></svg>
        </a>
      </div>
    </div>
  </div>
);

export default Maintenance;
