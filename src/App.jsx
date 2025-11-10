import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Landing from "./components/Landing.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
