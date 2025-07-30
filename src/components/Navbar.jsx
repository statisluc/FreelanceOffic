//import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  //for mobile functionality
  //   const [menuOpen, setMenuOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setMenuOpen((prev) => !prev);
  //   };

  return (
    <>
      <nav className="py-1 fixed top-0 w-full z-50 bg-white">
        <div className="hidden md:flex items-center justify-center space-x-4">
          <Link to={"/"}>
            <button className="navbarsolution">Home</button>
          </Link>

          <Link to={"/Pricing"}>
            <button className="navbarsolution">Pricing</button>
          </Link>

          <Link to={"/FAQ"}>
            <button className="navbarsolution">FAQ</button>
          </Link>

          <Link to={"/Contact"}>
            <button className="navbarsolution">Contact Me</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
