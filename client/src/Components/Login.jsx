import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
// import Logo from "./Logo"; // Uncomment and use if you have a Logo component
import Input from "./Input"; // Ensure this component accepts className and labelClassName
import Button from "./Button"; // Ensure this component accepts className and bgColor
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axiosInstance from '../utils/axios.helper';
import { icons } from '../assets/Icons'; // Ensure icons are correctly defined

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const login = async (data) => {
        setError('');
        setLoading(true);
        try {
            // Attempt to login the user via API
            const response = await axiosInstance.post('/users/login', data);
            console.log("Login API response:", response);

            const user = response?.data?.data?.user;
            const accessToken = `Bearer ${response.data.data.accessToken}`;
            const refreshToken = `Bearer ${response.data.data.refreshToken}`;

            if (user) {
                // Dispatch login action to Redux store
                dispatch(authLogin(user));
                // Store tokens in local storage
                localStorage.setItem('access_token', accessToken);
                localStorage.setItem('refresh_token', refreshToken);
                // Set default authorization header for future requests
                axiosInstance.defaults.headers.common['Authorization'] = accessToken;
                
                // toast.success('Login successful'); // Uncomment if using toast notifications
                console.log("Login successful", user);
                navigate('/'); // Navigate to the home page on successful login
            }
        } catch (error) {
            // Handle different error statuses from the API
            const status = error.response?.status;
            if (status === 401) {
                setError('Invalid password');
            } else if (status === 500) {
                setError('Server is not working. Please try again later.');
            } else if (status === 404) {
                setError('User does not exist');
            } else {
                setError(error.message || 'An unexpected error occurred. Please try again.');
            }
            console.error("Login error:", error);
        } finally {
            setLoading(false); // Reset loading state regardless of success or failure
        }
    };

    return (
        // Main container with a dark background, centering content, and responsive padding
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-4 sm:p-6 text-white transition-colors duration-500">
            {/* Inspirational Quote Section for a welcoming touch */}
            <div className="text-center mb-8 sm:mb-10 max-w-2xl px-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-4 tracking-tight leading-tight">
                    Welcome Back!
                </h1>
                <p className="text-lg sm:text-xl font-light italic text-gray-300">
                    "Your journey to success continues here."
                </p>
            </div>
            
            {/* Login Form Card - Styled for a modern, dark, and premium look */}
            <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-800 transition-all duration-500">
                {/* Logo Placeholder - Uncomment and configure if you have a Logo component */}
                {/* <div className="mb-6 flex justify-center">
                    <Logo width="80px" />
                </div> */}
                
                {/* Main heading for the login form */}
                <h2 className="text-center text-3xl font-bold text-white">
                    Sign in to your account
                </h2>
                {/* Link to the Sign Up page */}
                <p className="mt-2 text-center text-sm text-gray-400">
                    Don't have an account?{' '}
                    <Link
                        to="/signup"
                        className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Sign Up
                    </Link>
                </p>
                
                {/* Error message display */}
                {error && (
                    <p className="text-center text-red-400 mt-4 text-sm">{error}</p>
                )}
                
                {/* Login Form using react-hook-form */}
                <form
                    onSubmit={handleSubmit(login)}
                    className="mx-auto mt-6 flex w-full flex-col space-y-5"
                >
                    {/* Email or Username Input Field */}
                    <Input
                        label="Email or Username"
                        type="text" // Allows input for both email and username
                        placeholder="Enter your email or username"
                        // Tailwind classes for dark theme styling of the input field
                        className="bg-slate-700 text-black border-slate-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        labelClassName="text-gray-300" // Tailwind class for the label
                        {...register("userName", {
                            required: "Email or username is required",
                        })}
                    />
                    {errors.userName && (
                        <p className="text-red-400 text-sm">{errors.userName.message}</p>
                    )}
                    
                    {/* Password Input Field */}
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        // Tailwind classes for dark theme styling of the input field
                        className="bg-slate-700 text-black border-slate-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        labelClassName="text-gray-300" // Tailwind class for the label
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.password && (
                        <p className="text-red-400 text-sm">{errors.password.message}</p>
                    )}
                    
                    {/* Submit Button with dynamic styling based on loading state */}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 mt-6 rounded-lg font-semibold transition-all duration-300"
                        bgColor={loading ? "bg-blue-800 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"}
                    >
                        {/* Conditional rendering for loading spinner or "Sign in" text */}
                        {loading ? <span className="flex justify-center items-center gap-2">{icons.loading} Signing in...</span> : "Sign in"}
                    </Button>
                </form>
                
                {/* Optional Google Login section - Uncomment if needed */}
                {/* <div className="flex items-center justify-center gap-4 mt-8">
                    <GoogleLogin />
                </div> */}
            </div>
        </div>
    );
}

export default Login;
