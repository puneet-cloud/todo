import React, { useState, useEffect } from 'react';
import allSubjectsData from './allSubjectsData';
import { getLectureProgress, markLectureComplete } from '../api/lectureProgressAPI.js';
// --- ChapterLecturePage Component ---
// This component displays chapters and lectures for a specific subject.
const ChapterLecturePage = ({ subjectData, onBack }) => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [completedLectures, setCompletedLectures] = useState({});

  console.log('ChapterLecturePage rendered with subjectData:', subjectData);
  useEffect(() => {
  if (subjectData && subjectData.chapters.length > 0) {
    setSelectedChapter(subjectData.chapters[0]);
  } else {
    setSelectedChapter(null);
  }

  const fetchLectureProgress = async () => {
    try {
      const subjectId = subjectData?.id;
      const response = await getLectureProgress({ subjectId });

      // Convert the response structure
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
}, [subjectData]);

  // Handles checking/unchecking a lecture checkbox
  const handleCheckboxChange = async (chapterId, lectureId) => {
    const newStatus = !(completedLectures[chapterId]?.[lectureId] || false);

    try {
      const subjectId = subjectData.id;
      console.log(subjectId)
      await markLectureComplete({subjectId, chapterId, lectureId, completed: newStatus });
      setCompletedLectures((prev) => ({
        ...prev,
        [chapterId]: {
          ...(prev[chapterId] || {}),
          [lectureId]: newStatus,
        },
      }));
    } catch (error) {
      console.error('Error updating lecture completion:', error);
    }
  };

  // Render nothing if no subject data is provided
  if (!subjectData) {
    return (
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-xl flex items-center justify-center min-h-[70vh] p-4 text-gray-600 text-lg">
        Please select a subject to view its chapters and lectures.
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl bg-white rounded-lg shadow-xl flex flex-col md:flex-row min-h-[70vh]">
      {/* Left Sidebar - Chapters */}
      <aside className="w-full md:w-1/4 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 p-4 sm:p-6 rounded-t-lg md:rounded-l-lg md:rounded-t-none
                      max-h-[calc(100vh-140px)] overflow-y-auto md:max-h-[calc(100vh-200px)]">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Chapters in {subjectData.name}</h2>
        <nav>
          {subjectData.chapters.map((chapter) => (
            <div
              key={chapter.id}
              className={`flex items-center justify-between p-3 mb-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                selectedChapter?.id === chapter.id
                  ? 'bg-blue-100 text-blue-800 font-semibold shadow-inner'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
              onClick={() => setSelectedChapter(chapter)}
            >
              <div className="flex items-center">
                <span
                  className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-white text-xs sm:text-sm font-bold mr-2 sm:mr-3 ${
                    selectedChapter?.id === chapter.id ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                >
                  {chapter.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm">{chapter.name}</p>
                  <p className="text-xs text-gray-500">
                    {chapter.lectures.length} {chapter.lectures.length === 1 ? 'Class' : 'Classes'} | {
                      Object.values(completedLectures[chapter.id] || {}).filter(Boolean).length
                    } / {chapter.lectures.length} Topics
                  </p>
                </div>
              </div>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          ))}
        </nav>
      </aside>

      {/* Right Content Area - Lectures */}
      <main className="w-full md:w-3/4 p-4 sm:p-6">
        <div className="mb-4 sm:mb-6 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {selectedChapter ? selectedChapter.name : 'Select a Chapter'} Live Classes
          </h2>
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium px-3 py-1 rounded-md border border-blue-600 hover:border-blue-800 transition-colors duration-200"
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
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col transform hover:scale-100 transition-transform duration-200"
              >
                <div className="relative w-full h-32 sm:h-36 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for video thumbnail/player */}
                  <img
                    src={`https://placehold.co/400x200/cccccc/333333?text=Video+Lecture`}
                    alt="Video Lecture Thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x200/cccccc/333333?text=No+Image"; }}
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
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-2">{lecture.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">By Navdeep Singh</p>
                  <div className="flex items-center text-xs text-gray-500 mb-2 sm:mb-3">
                    <span className="mr-2 sm:mr-3">{lecture.date}</span>
                    <span>{lecture.duration}</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-blue-600 rounded-md focus:ring-blue-500"
                        checked={completedLectures[selectedChapter.id]?.[lecture.id] || false}
                        onChange={() => handleCheckboxChange(selectedChapter.id, lecture.id)}
                      />
                      <span className="ml-1 sm:ml-2 text-gray-700 text-xs sm:text-sm">Mark as Complete</span>
                    </label>
                    <button className="text-gray-500 hover:text-gray-700 p-1">
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
          <div className="flex items-center justify-center h-full text-gray-500 p-4 text-center">
            No lectures available for this chapter.
          </div>
        )}
      </main>
    </div>
  );
};
export default ChapterLecturePage;