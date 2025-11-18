import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Home from "./components/Home.jsx";
import WhoAreWe from "./components/WhoAreWe.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <section className="bg-gradient-to-br from-pink-500 to-orange-500 min-h-screen bg-scroll;">
        <Home />
      </section>
      <section>
        <WhoAreWe />
      </section>
    </>
  );
}

export default App;
