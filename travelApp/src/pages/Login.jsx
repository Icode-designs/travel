import React, { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true); // State to track the current form

  const handleClick = () => {
    setIsLogin(!isLogin); // Toggle between login and register
  };

  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center backdrop-blur-sm">
          <div className="relative w-80 h-96 overflow-hidden rounded-md shadow-md bg-white">
            <div
              className={`absolute inset-0 flex transition-transform duration-500 ease-in-out ${
                isLogin ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Login Form */}
              <div
                id="login"
                className=" flex-col w-full justify-center items-center p-6"
              >
                <h3 className="inline text-3xl font-bold my-5 ml-24 font-sans m-2">
                  Login
                </h3>
                <p
                  onClick={handleClick}
                  className="inline cursor-pointer p-2 text-black m-2  rounded-t-none rounded-bl-lg bg-transparent hover:bg-gray-300 ml-10"
                >
                  Register
                </p>
                <form action="">
                  <input
                    type="text"
                    placeholder="enter your username or email"
                    className="w-full p-2 outline-0 mb-3 mt-4 h-9 border border-gray-400 rounded"
                  />
                  <input
                    type="password"
                    placeholder="enter your password"
                    className="w-full h-9 p-2 outline-0 mt-3 border border-gray-400 rounded"
                  />
                  <button
                    type="submit"
                    className="p-3 w-full border-0 bg-blue-600 hover:bg-blue-800 rounded-3xl font-sans my-6 text-white font-bold"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div
              className={`absolute inset-0 flex transition-transform duration-500 ease-in-out ${
                isLogin ? "translate-x-full" : "translate-x-0"
              }`}
            >
              {/* Register Form */}
              <div className=" flex-col w-full justify-center items-center p-6">
                <p
                  onClick={handleClick}
                  className="inline cursor-pointer p-2 text-black rounded-t-none rounded-br-lg bg-transparent mt-3 hover:bg-gray-300 mb-0 -ml-7"
                >
                  Login
                </p>
                <h3 className="inline p-1 text-3xl m-2 ml-10 font-bold my-5  font-sans">
                  Register
                </h3>
                <form action="">
                  <input
                    type="email"
                    placeholder="enter your email"
                    className="w-full p-2 outline-0 mb-3 mt-3 h-9 border border-gray-400 rounded"
                  />
                  <input
                    type="text"
                    placeholder="enter your username"
                    className="w-full p-2 outline-0 mb-3 h-9 border border-gray-400 rounded"
                  />
                  <input
                    type="password"
                    placeholder="enter your password"
                    className="w-full p-2 outline-0 mb-3 h-9 border border-gray-400 rounded"
                  />
                  <input
                    type="password"
                    placeholder="confirm your password"
                    className="w-full p-2 outline-0 mb-3 h-9 border border-gray-400 rounded"
                  />
                  <button
                    type="submit"
                    className="p-3 w-full border-0 bg-blue-600 hover:bg-blue-800 rounded-3xl font-sans my-6 text-white font-bold"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
