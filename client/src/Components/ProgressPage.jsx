import React, { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react'; // Assuming TrendingUp is still used for navigation
import allSubjectsData from './allSubjectsData.jsx'; // Importing subjects data
import axiosInstance from '../utils/axios.helper.js';

// New Component: SubjectProgressPage
const SubjectProgressPage = () => {
    // Retain the logical state and useEffect hook as they are, no changes here.
    const [lectureCompletionStatus, setLectureCompletionStatus] = useState({

    });
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    const fetchLectureCompletionStatus = async () => {
    try {
      const response = await axiosInstance.get('/progress/get-progress');
      const data = response?.data || [];

      const statusMap = {};
      data.forEach(subject => {
        if (Array.isArray(subject.chapters)) {
          subject.chapters.forEach(chapter => {
            if (Array.isArray(chapter.lectures)) {
              chapter.lectures.forEach(lecture => {
                if (lecture?.id && typeof lecture.completed === 'boolean') {
                  statusMap[lecture.id] = lecture.completed;
                }
              });
            }
          });
        }
      });

      setLectureCompletionStatus(statusMap);
    } catch (error) {
      console.error('Error fetching lecture completion status:', error);
    } finally {
      setLoading(false); // ✅ Set loading false after fetch completes
    }
  };

  fetchLectureCompletionStatus();
}, []);

    return (
        // Main content area with dark background and responsive padding
        <main className="flex-1 px-4 sm:px-6 md:px-8 pb-8 bg-slate-950 overflow-y-auto">
            {/* Inspirational Quote Section - New addition for good UI and animation */}
            <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto py-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-3 tracking-tight leading-tight">
                    Your Learning Journey
                </h1>
                <p className="text-lg sm:text-xl font-light italic text-gray-300 animate-fade-in">
                    "Every step forward, no matter how small, is progress."
                </p>
                {/* Optional: Add a subtle animation keyframe in your global CSS for 'animate-fade-in' */}
                {/*
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                */}
            </div>

            {/* Main heading for subject progress */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">My Subject Progress</h2>

            {/* Grid for subject progress cards - Optimized for 2 columns on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {loading
  ? Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-4 flex flex-col items-center justify-center text-center animate-pulse"
      >
        <div className="h-5 w-3/4 bg-slate-700 rounded mb-3"></div>

        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3">
          <div className="w-full h-full rounded-full bg-slate-700"></div>
        </div>

        <div className="h-4 w-2/3 bg-slate-700 rounded"></div>
      </div>
    ))
  : [...allSubjectsData]
      .map(subject => {
        let totalLectures = 0;
        let completedLectures = 0;
        subject.chapters.forEach(chapter => {
          totalLectures += chapter.lectures.length;
          chapter.lectures.forEach(lecture => {
            if (lectureCompletionStatus[lecture.id]) completedLectures++;
          });
        });

        const percentage = totalLectures === 0 ? 0 : Math.round((completedLectures / totalLectures) * 100);
        return { subject, totalLectures, completedLectures, percentage };
      })
      .sort((a, b) => b.percentage - a.percentage)
      .map(({ subject, totalLectures, completedLectures, percentage }) => {
        const circumference = 2 * Math.PI * 50;
        const getGradientColors = (p) => {
          if (p < 30) return { stop1: "#f87171", stop2: "#ef4444" };
          if (p < 70) return { stop1: "#fcd34d", stop2: "#fbbf24" };
          return { stop1: "#4ade80", stop2: "#22c55e" };
        };
        const gradient = getGradientColors(percentage);

        return (
          <div
            key={subject.id}
            className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-4 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{subject.name}</h3>
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <defs>
                  <linearGradient id={`progressGradient-${subject.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={gradient.stop1} />
                    <stop offset="100%" stopColor={gradient.stop2} />
                  </linearGradient>
                </defs>
                <circle
                  className="text-slate-700"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="60"
                  cy="60"
                />
                <circle
                  className="transition-all duration-700 ease-out"
                  strokeWidth="10"
                  stroke={`url(#progressGradient-${subject.id})`}
                  fill="transparent"
                  r="50"
                  cx="60"
                  cy="60"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - (percentage / 100) * circumference}
                  transform="rotate(-90 60 60)"
                  strokeLinecap="round"
                />
                <text x="60" y="65" textAnchor="middle" className="text-xl sm:text-2xl font-bold" fill={percentage < 30 ? gradient.stop2 : "white"}>
                  {percentage}%
                </text>
              </svg>
            </div>
            <p className="text-gray-300 text-sm">
              {completedLectures} / {totalLectures} Lectures Completed
            </p>
          </div>
        );
      })}

            </div>
        </main>
    );
};

export default SubjectProgressPage;