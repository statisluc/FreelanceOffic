import Hero from "./Hero.jsx";
import Home from "./Home.jsx";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landing() {
  const [vh, setVh] = useState(() => window.innerHeight);

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div>
      <Parallax key={vh} className="w-full h-screen " pages={8}>
        <ParallaxLayer
          className="relative w-full h-screen flex flex-col px-4 pt-80 z-20"
          offset={0}
          speed={2}
          sticky={{ start: 0, end: 3 }}
        >
          <h1 className="text-9xl font-rubik text-white">
            Marketing Yourself...
          </h1>

          <div className="absolute flex justify-center text-white bottom-32 inset-x-0 breathe">
            <svg
              className="w-16 h-16 cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              onClick={() =>
                document
                  .getElementById("yourwebsite")
                  .scrollIntoView({ behavior: "smooth" })
              }
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
          className="pt-115 w-full h-screen flex justify-end px-4 text-right z-20"
          offset={0}
          speed={0}
          sticky={{ start: 2, end: 3 }}
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
          className="flex justify-start items-left h-screen z-1 pt-16"
          offset={2}
          sticky={{ start: 4, end: 6 }}
        >
          <img
            src="yourcodehere.png"
            alt="Screenshot of Website Code!"
            className="h-auto w-[70%] object-contain"
            id="yourwebsite"
          ></img>
        </ParallaxLayer>

        <ParallaxLayer
          className="w-full h-screen flex justify-end text-right px-4 text-8xl"
          speed={0.5}
          sticky={{ start: 6, end: 6 }}
        >
          <h1 className="text-white font-oswald">
            This Could Be Your Website!
          </h1>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 8, end: 8 }}>
          <div className="">
            <Card>
              <h2>Quick Little Test</h2>
            </Card>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landing;
