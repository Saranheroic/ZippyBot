import React from "react";
import { useState, useEffect } from "react";
import Image from "../LoginPage/Logos/image.png";
import GoogleSvg from "../LoginPage/Logos/icons8-google.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );

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
          <h2 className="text-4xl font-bold text-center mb-6">
            Welcome to our site!
          </h2>
          <p className="text-2xl text-gray-600 mb-8">
            Please enter your details
          </p>

          {/* Form */}
          <form className="w-full">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              name="name"
              required={true}
              className="w-full p-4 mb-4 border-0 border-b border-black focus:outline-none focus:border-black"
            />

            {/* Lastname Input */}
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              required={true}
              className="w-full p-4 mb-4 border-0 border-b border-black focus:outline-none focus:border-black"
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 mb-4 border-0 border-b border-black focus:outline-none focus:border-black"
            />

            {/* Password Input */}
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-4 border-0 border-b border-black focus:outline-none focus:border-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
              >
                {!showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-4 border-0 border-b border-black focus:outline-none focus:border-black"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-y-6">
              <button
                type="button"
                className="w-full p-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Sign Up
              </button>
              <button
                type="button"
                className="w-full p-4 flex items-center justify-center gap-x-3 border border-gray-300 text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                <img src={GoogleSvg} alt="Google Logo" className="w-6" />
                Sign Up with Google
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <p className="mt-16 text-lg text-gray-600">
            Already have an account?{" "}
            <Link to="/login">
              <a
                href=""
                className="font-semibold text-gray-500 hover:underline hover:text-white"
              >
                Log In
              </a>
            </Link>
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

export default Register;
