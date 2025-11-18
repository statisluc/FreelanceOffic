import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Home from "./components/Home.jsx";
import WhoAreWe from "./components/WhoAreWe.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";

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
      <section className="">
        <WhyChooseUs />
      </section>
    </>
  );
}

export default App;
