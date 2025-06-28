import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="hidden md:flex items-center justify-center space-x-4">
        <a
          href="#Home"
          className="px-3 py-2 text-lg text-transparent transition transform hover:scale-110 active:bg-transparent active:text-white rounded-md"
        >
          Home
        </a>
      </div>
    </>
  );
}

export default Navbar;
