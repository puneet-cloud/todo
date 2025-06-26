import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// Assuming axiosInstance is correctly configured for API calls
import axiosInstance from "../utils/axios.helper.js"; 
// import Logo from "../Logo"; // Uncomment and use if you have a Logo component
import Input from "./Input.jsx"; // Ensure this component accepts className and labelClassName
import Button from "./Button.jsx"; // Ensure this component accepts className and bgColor
import { icons } from "../assets/Icons.jsx"; // Ensure icons are correctly defined

function SignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const signup = async (data) => {
        console.log("Signup data submitted:", data);
        const formData = {
            fullName: data.fullName,
            email: data.email,
            userName: data.userName,
            password: data.password
        };

        setError(""); // Clear previous errors
        setLoading(true); // Set loading state
        
        try {
            // Attempt to register the user via API
            const response = await axiosInstance.post("/users/register", formData);
            if (response?.data?.data) {
                // Assuming successful registration navigates to login
                // toast.success("Account created successfully 🥳"); // Uncomment if using toast notifications
                navigate("/login");
            }
        } catch (error) {
            // Handle specific error for existing user
            if (error.response && error.response.status === 403) {
                setError("User with email or username already exists");
            } else {
                console.error("Signup error:", error);
                setError("An error occurred. Please try again.");
            }
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        // Main container with a dark background and centering for responsiveness
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-4 sm:p-6 text-white transition-colors duration-500">
            {/* Inspirational Quote Section - Visually appealing and adds context */}
            <div className="text-center mb-8 sm:mb-10 max-w-2xl px-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-4 tracking-tight leading-tight">
                    Start Your Journey Today
                </h1>
                <p className="text-lg sm:text-xl font-light italic text-gray-300">
                    "Your future is created by what you do today, not tomorrow."
                </p>
            </div>

            {/* Sign-up Form Card - Modern, elevated design */}
            <div className="bg-slate-900 shadow-2xl rounded-2xl p-6 sm:p-8 max-w-md w-full border border-slate-800 transition-all duration-500">
                <div className="text-center mb-6">
                    {/* Placeholder for Logo - Uncomment if you have a Logo component */}
                    <div className="flex justify-center mb-4">
                        {/* <Link to="/">
                            <Logo width="76" />
                        </Link> */}
                    </div>
                    <h2 className="text-3xl font-bold mb-2 text-white">Create an Account</h2>
                    <h6 className="text-gray-400">
                        Already have an Account?{" "}
                        {/* Link to login page with matching blue color */}
                        <Link to="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Sign in now
                        </Link>
                    </h6>
                </div>
                {/* Error message display */}
                {error && <p className="text-red-400 mb-4 text-center text-sm">{error}</p>}
                
                {/* Sign-up Form */}
                <form onSubmit={handleSubmit(signup)} className="flex flex-col space-y-4">
                    {/* Full Name Input Field */}
                    <Input
                        label="Full Name"
                        required
                        placeholder="Enter your full name"
                        // Tailwind classes for dark theme styling
                        className="bg-slate-700 text-white border-slate-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        labelClassName="text-gray-300"
                        {...register("fullName", { required: true })}
                    />
                    {errors.fullName?.type === "required" && (
                        <p className="text-red-400 text-sm">Full name is required</p>
                    )}
                    
                    {/* Username Input Field */}
                    <Input
                        label="Username"
                        required
                        placeholder="Choose your username"
                        // Tailwind classes for dark theme styling
                        className="bg-slate-700 text-white border-slate-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        labelClassName="text-gray-300"
                        {...register("userName", { required: true })}
                    />
                    {errors.userName?.type === "required" && (
                        <p className="text-red-400 text-sm">Username is required</p>
                    )}
                    
                    {/* Email Address Input Field */}
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email address"
                        required
                        // Tailwind classes for dark theme styling
                        className="bg-slate-700 text-white border-slate-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        labelClassName="text-gray-300"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Email address must be a valid address",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-400 text-sm">{errors.email.message}</p>
                    )}
                    
                    {/* Password Input Field with validation rules */}
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Create your password"
                        required
                        // Tailwind classes for dark theme styling
                        className="bg-slate-700 text-white border-slate-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        labelClassName="text-gray-300"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8, // Minimum length for the password
                                message: "Password must be at least 8 characters long" // Error message for minimum length
                            },
                            maxLength: {
                                value: 20, // Maximum length for the password
                                message: "Password cannot exceed 20 characters" // Error message for maximum length
                            },
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/, // Regex pattern: At least one uppercase letter, one lowercase letter, and one digit
                                message: "Password must contain at least one uppercase letter, one lowercase letter, and one digit" // Error message for pattern mismatch
                            }
                        })}
                    />
                    {/* Password validation error messages */}
                    {errors.password && (
                        <p className="text-red-400 text-sm">{errors.password.message}</p>
                    )}
                    
                    {/* Submit Button with loading state */}
                    <Button
                        type="submit"
                        disabled={loading}
                        // Dynamic background color based on loading state, with hover effects
                        className="py-3 rounded-lg w-full font-semibold mt-6 transition-all duration-300"
                        bgColor={loading ? "bg-blue-800 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"}
                    >
                        {/* Show loading icon and text when loading, otherwise "Sign Up" */}
                        {loading ? <span className="flex justify-center items-center gap-2">{icons.loading} Signing Up...</span> : "Sign Up"}
                    </Button>
                </form>
                {/* Optional Google Login section - Uncomment if needed */}
                {/* <div className="flex items-center justify-center gap-2 mt-5">
                    <GoogleLogin />
                </div> */}
            </div>
        </div>
    );
}

export default SignUp;