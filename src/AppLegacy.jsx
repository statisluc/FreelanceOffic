import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Landing from "./components/Landing.jsx";

import Home from "./components/Home.jsx";
import WhoAreWe from "./components/WhoAreWe.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import OurSkills from "./components/OurSkills.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-48">
        <Outlet />
        <section className="bg-gradient-to-br from-pink-500 to-orange-500 min-h-screen bg-scroll;">
          <Home />
        </section>
        <section>
          <WhoAreWe />
        </section>
        <section className="py-12 min-h-screen bg-gradient-to-b from-black to-gray-800 bg-scroll min-h-screen">
          <WhyChooseUs />
        </section>
        <section>
          <OurSkills />
        </section>
      </div>
    </>
  );
}

export default App;
