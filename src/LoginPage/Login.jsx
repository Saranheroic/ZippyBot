import React from "react";
import { useState } from "react";
import Image from "../LoginPage/Logos/image.png";
import GoogleSvg from "../LoginPage/Logos/icons8-google.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-[#E9E9E9] flex justify-center items-center">
        <img
          src={Image}
          alt="Logo"
          className="w-[400px] max-w-full h-auto object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[80%] max-w-[500px] flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-6xl font-bold text-center mb-6">Welcome back!</h2>
          <p className="text-2xl text-gray-600 mb-16">
            Please enter your details
          </p>

          {/* Form */}
          <form className="w-full">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-white"
            />

            {/* Password Input */}
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
              >
                {!showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  id="remember-checkbox"
                  className="w-5 h-5 cursor-pointer"
                />
                <label
                  htmlFor="remember-checkbox"
                  className="text-lg text-gray-600 cursor-pointer"
                >
                  Remember for 30 days
                </label>
              </div>
              <a
                href="#"
                className="text-lg text-gray-600 hover:underline hover:text-white"
              >
                Forgot password?
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-y-6">
              <button
                type="button"
                className="w-full p-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Log In
              </button>
              <button
                type="button"
                className="w-full p-4 flex items-center justify-center gap-x-3 border border-gray-300 text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                <img src={GoogleSvg} alt="Google Logo" className="w-6" />
                Log In with Google
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <p className="mt-16 text-lg text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-semibold text-black-800 hover:underline hover:text-white"
            >
              Sign Up
            </a>
          </p>
          {/* Back to Home Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-6 text-lg text-gray-600 hover:underline hover:text-white"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
