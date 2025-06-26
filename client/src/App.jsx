import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex max-h-screen overflow-hidden custom-scrollbar">
      <div className="flex flex-col flex-1 overflow-auto custom-scrollbar">
        <header className="w-full bg-white shadow-md rounded-lg p-3 mb-4 sm:p-4 sm:mb-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 md:mb-0">
              <a href="#" className="text-red-600 hover:text-red-700">ADDA247</a>
            </h1>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-2 sm:space-x-4 text-xs sm:text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 rounded-md px-2 py-1 sm:px-3 sm:py-2 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 rounded-md px-2 py-1 sm:px-3 sm:py-2 font-medium">My Purchases</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 rounded-md px-2 py-1 sm:px-3 sm:py-2 font-medium">Foundation batch</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 rounded-md px-2 py-1 sm:px-3 sm:py-2 font-medium">Live Classes</a>
            </nav>
          </div>
        </header>

        <main className="flex-1 bg-gray-100 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
