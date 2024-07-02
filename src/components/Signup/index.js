import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    alert("Successfully registered!");
  };

  return (
    <div className="container mx-auto max-w-md mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-800 rounded text-base mt-4 md:mt-0"
        >
          Sign Up
        </button>
        <div className="text-center mt-4">
          <span>Already have an account?</span>

          <Link to="/signin">
            <button
              type="submit"
              className="inline-flex items-center text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-800 rounded text-base mt-4 md:mt-0"
            >
              SignIn
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
