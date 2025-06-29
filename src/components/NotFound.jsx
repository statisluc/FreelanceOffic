import React from "react";
import Navbar from "./Navbar.jsx";

function NotFound() {
  return (
    <>
      <Navbar />

      <div className="text-white flex flex-col justify-center items-center h-screen">
        <h1 className="text-6xl font-rubik">Page Not Found!</h1>
        include button down here to navigate back to landing page
      </div>
    </>
  );
}

export default NotFound;
