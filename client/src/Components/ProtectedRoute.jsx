import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../hooks/getCurrentUser';

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  // State to track if authentication is being checked.
  // It's true initially if userData is not yet available,
  // indicating a need to verify the user's session.
  const [checkingAuth, setCheckingAuth] = useState(!userData);

  // Effect to verify the user's authentication status.
  useEffect(() => {
    const verifyUser = async () => {
      // If user data is already present, no need to re-fetch.
      if (userData) {
        setCheckingAuth(false); // Authentication is resolved
        return;
      }

      try {
        // Attempt to fetch current user data and dispatch it to Redux.
        // This function should handle token checks, API calls, etc.
        await getCurrentUser(dispatch);
      } catch (err) {
        console.error("User fetch failed:", err);
        // If fetching fails, it means the user is likely not authenticated.
      } finally {
        // Regardless of success or failure, stop checking authentication.
        setCheckingAuth(false);
      }
    };

    // Only run verification if we are currently checking auth (i.e., userData was initially null)
    if (checkingAuth) {
      verifyUser();
    }
  }, [dispatch, userData, checkingAuth]); // Depend on dispatch, userData, and checkingAuth state

  // Effect to redirect to login if authentication check is complete and no user data is found.
  useEffect(() => {
    // If we're done checkingAuth and userData is still null, redirect to login.
    if (!checkingAuth && !userData) {
      navigate('/login');
    }
  }, [checkingAuth, userData, navigate]); // Depend on checkingAuth, userData, and navigate function

  // Render the fun loading animation while checking authentication.
  if (checkingAuth) {
    return (
      <div className="h-screen w-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Animated Figures Container - Responsive sizing */}
        <div className="relative w-full max-w-lg h-60 md:h-80 flex items-center justify-center">
          {/* Boy Figure - Animates from the left */}
          <div className="absolute left-1/4 transform -translate-x-full animate-slide-in-left-boy">
            {/* Simple shapes for cartoon head and body */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-400 rounded-full shadow-lg border-2 border-white"></div>
            <div className="w-10 h-16 sm:w-12 sm:h-20 bg-blue-600 rounded-b-lg mx-auto"></div>
          </div>
          
          {/* Girl Figure - Animates from the right */}
          <div className="absolute right-1/4 transform translate-x-full animate-slide-in-right-girl">
            {/* Simple shapes for cartoon head and body */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-400 rounded-full shadow-lg border-2 border-white"></div>
            <div className="w-10 h-16 sm:w-12 sm:h-20 bg-pink-600 rounded-b-lg mx-auto"></div>
          </div>

          {/* Heart Icon - Appears when they 'meet' */}
          <div className="absolute opacity-0 animate-fade-in-heart text-white text-6xl sm:text-8xl drop-shadow-lg">
            ❤️
          </div>
        </div>

        {/* Loading Message - Pulse animation for subtle effect */}
        <p className="mt-8 text-2xl md:text-3xl font-bold text-gray-300 animate-pulse">
          Verifying user...
        </p>
      </div>
    );
  }

  // If authentication is complete and user data is present, render children.
  // Otherwise, render nothing (as navigation to login would have already occurred).
  return userData ? children : null;
};

export default ProtectedRoute;