import React, { useState, useEffect } from 'react';
import SubjectPage from './Components/SubjectPage';
import ChapterLecturePage from './Components/ChapterLecturePage';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './hooks/getCurrentUser';
import allSubjectsData from './Components/allSubjectsData';
import { useLocation, useNavigate } from 'react-router-dom'; // ✅ import navigate
import Login from './Components/Login';
import SignUp from './Components/Signup';

const Home = () => {
  const [currentPage, setCurrentPage] = useState('subjects'); // 'subjects' or 'chapters'
  const [selectedSubject, setSelectedSubject] = useState(null);
  ;  

  // Navigate to chapters for a selected subject
  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setCurrentPage('chapters');
  };

  // Go back to the subjects list
  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    setCurrentPage('subjects');
  };

  // Fetch current user
  
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center p-2 sm:p-4">
      {/* Header Section */}
      

      {/* Main Content */}
     {currentPage === 'subjects' ? (
        <SubjectPage
            subjects={allSubjectsData}
            onSelectSubject={handleSelectSubject}
        />
        ) : (
        <ChapterLecturePage
            subjectData={selectedSubject}
            onBack={handleBackToSubjects}
        />
    )}


    </div>
  );
};

export default Home;
