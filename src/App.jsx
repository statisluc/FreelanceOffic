import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <>
      {/* Make navbar actually "constant" */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* All pages render below the navbar */}
      <Outlet />
    </>
  );
}
