import Hero from "./Hero.jsx";
import Home from "./Home.jsx";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landing() {
  return (
    <div>
      <Parallax
        className="w-full h-screen bg-linear-to-br from-pink-500 to-orange-500"
        pages={8}
      >
        <ParallaxLayer
          className="flex flex-col items-start justify-start px-4 pt-40"
          offset={0}
          speed={2}
          sticky={{ start: 0, end: 5 }}
        >
          <h1 className="text-9xl font-rubik text-white">
            Marketing Yourself...
          </h1>
          <h2 className="text-4xl font-oswald">Literally wtf</h2>
          <div className="flex text-white bottom-32 left-50">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLineCap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="pt-77 w-full h-screen flex justify-end px-4 text-right"
          offset={1}
          speed={0.1}
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
      </Parallax>
    </div>
  );
}

export default Landing;
