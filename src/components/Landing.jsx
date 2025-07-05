import Hero from "./Hero.jsx";
import Home from "./Home.jsx";
import React from "react";
import Navbar from "./Navbar.jsx";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landing() {
  return (
    <div>
      <Parallax className="w-full h-screen " pages={8}>
        <ParallaxLayer
          className="relative w-full h-screen flex flex-col px-4 pt-40"
          offset={0}
          speed={2}
          sticky={{ start: 0, end: 5 }}
        >
          <h1 className="text-9xl font-rubik text-white">
            Marketing Yourself...
          </h1>

          <div className="absolute flex justify-center text-white bottom-32 inset-x-0 breathe">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              onClick={{}}
            >
              <path
                strokeLineCap="round"
                strokeLinejoin="round"
                d="M22 10  L12 18  L2 10"
              />
            </svg>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="pt-77 w-full h-screen flex justify-end px-4 text-right"
          offset={1}
          speed={0}
          sticky={{ start: 3, end: 5 }}
        >
          <h1 className="text-8xl font-bungee text-white">
            ...Just Got A Whole Lot Easier.
          </h1>
        </ParallaxLayer>
        <div className="w-fulll h-screen absolute bottom-32 text-white">
          {/* <ParallaxLayer>

          </ParallaxLayer> */}
        </div>
        <ParallaxLayer
          className="flex justify-center items-center h-screen"
          offset={2}
        >
          <img src="yourcodehere.png" alt="Screenshot of Website Code!"></img>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landing;
