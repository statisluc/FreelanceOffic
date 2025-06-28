//import { useState } from "react";
import React from "react";

function Navbar() {
  //for mobile functionality
  //   const [menuOpen, setMenuOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setMenuOpen((prev) => !prev);
  //   };

  return (
    <>
      <h1>QUICK ASS TEST FROM NAVBAR</h1>
      <nav className="py-1 fixed top-0 w-full z-50 bg-white">
        <div className="hidden md:flex items-center justify-center space-x-4">
          <a href="#Home" className="navbarsolution">
            Home
          </a>
          <a href="insert pricing" className="navbarsolution">
            Pricing
          </a>
          <a href="insert faq" className="navbarsolution">
            FAQ
          </a>
          <a href="insert contact" className="navbarsolution">
            Contact Me
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
