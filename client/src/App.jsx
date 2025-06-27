import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex min-h-screen custom-scrollbar bg-slate-950 text-white">
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="w-full bg-gradient-to-r from-slate-950 to-gray-900 shadow-2xl rounded-b-lg p-3 mb-4 sm:p-4 sm:mb-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Brand */}
            <h1 className="text-xl sm:text-2xl font-bold text-white mb-2 md:mb-0">
              <Link to="/" className="text-red-500 hover:text-red-400 transition-colors">
                ADDA247
              </Link>
            </h1>

            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center md:justify-end space-x-1 sm:space-x-2 text-xs sm:text-sm">
              <Link
                to="/"
                className="text-gray-300 hover:text-white hover:bg-slate-800 rounded-md px-2 py-1 sm:px-3 sm:py-2 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/progress"
                className="text-gray-300 hover:text-white hover:bg-slate-800 rounded-md px-2 py-1 sm:px-3 sm:py-2 font-medium transition-colors"
              >
                My Progress
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-white hover:bg-slate-800 rounded-md px-2 py-1 sm:px-3 sm:py-2 font-medium transition-colors"
              >
                Foundation batch
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-white hover:bg-slate-800 rounded-md px-2 py-1 sm:px-3 sm:py-2 font-medium transition-colors"
              >
                Live Classes
              </Link>
            </nav>
          </div>
        </header>

        {/* Routed Page Content */}
        <main className="flex-1 px-4 sm:px-6 md:px-8 pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
