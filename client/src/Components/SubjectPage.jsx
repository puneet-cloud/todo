import React from 'react';
import CountdownTimer from './CountDownTimer.jsx'; // Import the CountdownTimer component

// --- SubjectPage Component ---
// This component displays a list of subjects.
const SubjectPage = ({ subjects, onSelectSubject }) => {
  // Set the target launch date and time to December 23, 2025, at midnight
  const launchDate = '2025-12-23T00:00:00';

  return (
    // Main container with a dark slate background and rounded corners for a premium feel
    <div className="w-full max-w-7xl bg-slate-900 rounded-lg shadow-xl p-4 sm:p-6 flex flex-col items-center">
      {/* Countdown Timer placed at the very top of the page */}
      <CountdownTimer targetDate={launchDate} />

      {/* Attractive Hero Section for the Home Page, still vibrant */}
      {/* <div className="text-center mb-8 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg w-full">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
          Welcome to Your Learning Dashboard!
        </h2>
        <p className="text-lg sm:text-xl font-light opacity-90">
          Select a subject below to dive into your chapters and track your progress.
        </p>
      </div> */}

      {/* Main heading for the subject list */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">Subject-Wise Live Classes</h2>
      
      {/* Responsive grid for subject cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            // Card styling with a dark background and subtle border
            className="bg-slate-800 border border-slate-700 rounded-lg p-4 cursor-pointer 
                       hover:bg-slate-700 hover:border-slate-600 transition-all duration-200 
                       flex items-center justify-between shadow-sm transform hover:scale-105"
            onClick={() => onSelectSubject(subject)}
          >
            <div className="flex items-center">
              {/* Subject initial circle, remains a vibrant blue */}
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-lg font-bold mr-4 shadow-md">
                {subject.name.charAt(0)}
              </span>
              <div>
                {/* Text color updated for the dark theme */}
                <p className="font-semibold text-white text-base sm:text-lg">{subject.name}</p>
                <p className="text-sm text-gray-400">{subject.chapters.length} Chapters</p>
              </div>
            </div>
            {/* Arrow icon with adjusted color for better contrast */}
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectPage;