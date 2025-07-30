import Hero from "./Hero.jsx";
import Home from "./Home.jsx";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import { Link } from "react-router-dom";

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
      <Parallax
        key={vh}
        className="w-full h-screen "
        pages={8}
        config={{ tension: 170, friction: 26, clamp: true }}
      >
        <ParallaxLayer
          className="relative w-full h-screen flex flex-col px-4 pt-80 z-20"
          offset={0}
          speed={0.2}
          sticky={{ start: 0, end: 3 }}
        >
          <h1 className="text-9xl font-rubik text-white transform-gpu will-change-transform">
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
                  .getElementById("couldbe")
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
          <h1 className="text-8xl font-bungee text-white transform-gpu will-change-transform">
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
          sticky={{ start: 4, end: 5.5 }}
        >
          <img
            src="yourcodehere.png"
            alt="Screenshot of Website Code!"
            className="h-auto w-[70%] object-contain "
            id="yourwebsite"
          ></img>
        </ParallaxLayer>

        <ParallaxLayer
          className="w-full h-screen h-auto w-[30%] object-contain flex justify-end text-right px-4 text-8xl "
          speed={0.5}
          offset={5}
          sticky={{ start: 5, end: 5 }}
        >
          <h1
            className="text-white font-oswald h-auto w-[30%] object-contain scroll-mt-[260px]"
            id="couldbe"
          >
            This Could ← Be Your Website!
          </h1>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 6.75, end: 8 }}>
          <div className="flex flex-col sm:flex-row sm:space-x-6 w-full px-4">
            <div className="flex flex-row space-x-6 sm:w-full py-10">
              <Card>
                <h2>
                  Wondering about the costs of hiring us to make your website?
                  Look no further than our pricing page! We even made it easy
                  for you- click below to be transported to our pricing page
                  where you can use our PriceChecker to evaluate the cost of
                  your specific website!
                </h2>
                <div className="flex justify-center">
                  <Link to={"/Pricing"}>
                    <button className="landingbuttonsolution">Pricing</button>
                  </Link>
                </div>
              </Card>
              <Card>
                <h2 className="font-oswald">
                  So say you have a couple of questions that you need answered?
                  Well, check out my frequently asked questions by clicking the
                  button below! Anything not answered by that page, feel free to
                  check out my next option which is to...
                </h2>
                <div className="flex justify-center">
                  <Link to={"/FAQ"}>
                    <button className="landingbuttonsolution">FAQs</button>
                  </Link>
                </div>
              </Card>
              <Card>
                <h2 className="font-oswald font-bold">
                  ...Contact me! Click the button below to be transported to our
                  contact page, where you can send a message to us and we will
                  get back to you as soon as we can!
                </h2>
                <div className="flex justify-center">
                  <Link to={"/Contact"}>
                    <button className="landingbuttonsolution">
                      Contact Me
                    </button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landing;
