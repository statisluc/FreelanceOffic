import React from "react";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Navbar />

      <div className="text-white flex flex-col justify-center items-center h-screen">
        <h1 className="text-6xl font-rubik">Page Not Found!</h1>
        <Link to={"/"}>
          <button className="mt-4 bg-white px-4 py-2 rounded-md transition-transform transform hover:scale-110 active:bg-transparent">
            <span className="font-bungee text-5xl bg-gradient-to-br from-pink-500 to-orange-500 bg-clip-text text-transparent inline-block active:text-white">
              Go Back Home
            </span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;
