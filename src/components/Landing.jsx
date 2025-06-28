import Hero from "./Hero.jsx";
import Home from "./Home.jsx";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landing() {
  return (
    <div>
      <Parallax
        className="bg-linear-to-br from-pink-500 to-orange-500"
        pages={8}
      >
        <ParallaxLayer
          className="flex items-start justify-start px-4 pt-40"
          offset={0}
          speed={2}
          sticky={{ start: 0, end: 5 }}
        >
          <h1 className="text-9xl font-rubik">Marketing Yourself...</h1>
        </ParallaxLayer>

        <ParallaxLayer
          className="pt-77 w-full h-screen flex justify-end px-4 text-right"
          offset={1}
          speed={0.5}
          sticky={{ start: 3, end: 5 }}
        >
          <h1 className="text-8xl font-bungee">
            ...Just Got A Whole Lot Easier.
          </h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landing;
