// src/Components/ProtectedRoute.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../hooks/getCurrentUser'; // ✅ your backend-check hook

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const isUserAuthenticated = useSelector((state) => state.auth.userData !== null);

  useEffect(() => {
    const verifyUser = async () => {
      setCheckingAuth(true);
      try {
        await getCurrentUser(dispatch); // fetches from backend and updates redux
      } catch (err) {
        console.error("User fetch failed", err);
      } finally {
        setCheckingAuth(false);
      }
    };

    verifyUser();
  }, [dispatch]);

  useEffect(() => {
    if (!checkingAuth && !isUserAuthenticated) {
      navigate('/login');
    }
  }, [checkingAuth, isUserAuthenticated, navigate]);

  if (checkingAuth) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Verifying user...</p>
      </div>
    );
  }

  return isUserAuthenticated ? children : null;
};

export default ProtectedRoute;
