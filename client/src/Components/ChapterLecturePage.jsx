import React, { useState, useEffect } from 'react';
// Assuming allSubjectsData is used elsewhere or will be.
// import allSubjectsData from './allSubjectsData'; 
// Assuming lectureProgressAPI.js is correctly implemented.
import { getLectureProgress, markLectureComplete } from '../api/lectureProgressAPI.js';

// --- ChapterLecturePage Component ---
// This component displays chapters and lectures for a specific subject.
const ChapterLecturePage = ({ subjectData, onBack }) => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [completedLectures, setCompletedLectures] = useState({});

  useEffect(() => {
    // Set the initial selected chapter to the first one available
    if (subjectData && subjectData.chapters.length > 0) {
      setSelectedChapter(subjectData.chapters[0]);
    } else {
      setSelectedChapter(null);
    }

    console.log("subjectData: ", subjectData, selectedChapter);

    // Function to fetch lecture progress from the API
    const fetchLectureProgress = async () => {
      try {
        const subjectId = subjectData?.id;
        if (!subjectId) return; // Ensure subjectData and id exist

        const response = await getLectureProgress({ subjectId });
        console.log('Fetched lecture progress:', response); 
        // Convert the API response structure into a more usable map
        const progressMap = {};
        response?.status?.forEach((chapter) => {
          const chapterId = chapter.id;
          if (!progressMap[chapterId]) progressMap[chapterId] = {};
          chapter.lectures.forEach((lecture) => {
            progressMap[chapterId][lecture.id] = lecture.completed;
          });
        });

        setCompletedLectures(progressMap);
      } catch (error) {
        console.error('Error fetching lecture progress:', error);
      }
    };

    fetchLectureProgress();
  }, [subjectData]); // Re-run effect when subjectData changes

  // Handles checking/unchecking a lecture checkbox
  const handleCheckboxChange = async (chapterId, lectureId) => {
    // Determine the new completion status
    const newStatus = !(completedLectures[chapterId]?.[lectureId] || false);

    try {
      const subjectId = subjectData.id;
      // Call the API to update lecture completion status
      await markLectureComplete({ subjectId, chapterId, lectureId, completed: newStatus });

      // Optimistically update the local state for immediate UI feedback
      setCompletedLectures((prev) => ({
        ...prev,
        [chapterId]: {
          ...(prev[chapterId] || {}),
          [lectureId]: newStatus,
        },
      }));
    } catch (error) {
      console.error('Error updating lecture completion:', error);
      // Optionally, revert the UI state if the API call fails
    }
  };

  // Render a placeholder if no subject data is provided
  if (!subjectData) {
    return (
      <div className="w-full max-w-7xl bg-slate-800 rounded-lg shadow-xl flex items-center justify-center min-h-[70vh] p-4 text-gray-300 text-lg">
        Please select a subject to view its chapters and lectures.
      </div>
    );
  }

  return (
    // Main container with dark background, responsive flex layout
    <div className="w-full max-w-7xl bg-slate-900 rounded-lg shadow-xl flex flex-col md:flex-row min-h-[70vh]">
      {/* Left Sidebar - Chapters */}
      <aside className="w-full md:w-1/4 bg-slate-800 border-b md:border-b-0 md:border-r border-slate-700 p-4 sm:p-6 rounded-t-lg md:rounded-l-lg md:rounded-t-none
                          max-h-[calc(100vh-140px)] md:max-h-[calc(100vh-200px)] overflow-y-auto">
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Chapters in {subjectData.name}</h2>
        <nav>
          {subjectData.chapters.map((chapter) => {
            // Calculate completed lectures for the current chapter
            const completedCount = Object.values(completedLectures[chapter.id] || {}).filter(Boolean).length;
            return (
              <div
                key={chapter.id}
                className={`flex items-center justify-between p-3 mb-2 rounded-lg cursor-pointer transition-colors duration-200 
                            ${selectedChapter?.id === chapter.id
                                ? 'bg-blue-800 text-white font-semibold shadow-inner'
                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                            }`}
                onClick={() => setSelectedChapter(chapter)}
              >
                <div className="flex items-center">
                  <span
                    className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-white text-xs sm:text-sm font-bold mr-2 sm:mr-3 
                                ${selectedChapter?.id === chapter.id ? 'bg-blue-600' : 'bg-gray-600'
                                }`}
                  >
                    {chapter.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm">{chapter.name}</p>
                    <p className="text-xs text-gray-400">
                      {chapter.lectures.length} {chapter.lectures.length === 1 ? 'Class' : 'Classes'} | {completedCount} / {chapter.lectures.length} Topics
                    </p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Right Content Area - Lectures */}
      <main className="w-full md:w-3/4 p-4 sm:p-6">
        <div className="mb-4 sm:mb-6 flex justify-between items-center flex-wrap gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {selectedChapter ? selectedChapter.name : 'Select a Chapter'} Live Classes
          </h2>
          <button
            onClick={onBack}
            className="text-blue-400 hover:text-blue-200 flex items-center text-sm font-medium px-3 py-1 rounded-md border border-blue-600 hover:border-blue-400 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Subjects
          </button>
        </div>

        {selectedChapter ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {selectedChapter.lectures.map((lecture) => (
              <div
                key={lecture.id}
                // Lecture card styling with dark background and border
                className="bg-slate-800 border border-slate-700 rounded-lg shadow-md overflow-hidden flex flex-col transform hover:scale-100 transition-transform duration-200"
              >
                <div className="relative w-full h-32 sm:h-36 bg-slate-700 flex items-center justify-center">
                  {/* Placeholder for video thumbnail/player */}
                  <img
                    src={`https://placehold.co/400x200/4a5568/a0aec0?text=Video+Lecture`}
                    alt="Video Lecture Thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x200/4a5568/a0aec0?text=No+Image"; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 text-white opacity-90"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-white text-sm sm:text-base mb-1 sm:mb-2">{lecture.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-1">By Navdeep Singh</p>
                  <div className="flex items-center text-xs text-gray-400 mb-2 sm:mb-3">
                    <span className="mr-2 sm:mr-3">{lecture.date}</span>
                    <span>{lecture.duration}</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-blue-600 rounded-md focus:ring-blue-500 bg-gray-700 border-gray-600"
                        checked={completedLectures[selectedChapter.id]?.[lecture.id] || false}
                        onChange={() => handleCheckboxChange(selectedChapter.id, lecture.id)}
                      />
                      <span className="ml-1 sm:ml-2 text-gray-300 text-xs sm:text-sm">Mark as Complete</span>
                    </label>
                    <button className="text-gray-400 hover:text-gray-200 p-1">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11H5m14 0a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2m7 0V4"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 p-4 text-center">
            No lectures available for this chapter. Please select a chapter.
          </div>
        )}
      </main>
    </div>
  );
};

export default ChapterLecturePage;