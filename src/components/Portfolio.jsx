import React from "react";
import CardWrapper from "./CardWrapper.jsx";
import Card from "./Card.jsx";

function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-pink-500 to-orange-500 min-h-screen">
      <>
        <div className="flex flex-col items-center text-center pb-20">
          <Card className="mt-10 mb-20 ">
            <h1 className="navbarsolution">
              Hover Over Each For More Information
            </h1>
          </Card>
          <p></p>
          <div className="flex flex-col gap-18">
            <CardWrapper
              imgsrc="/littlebirdy.png"
              imgalt="Cover of Dirty Little Birdie"
              overlayText="Fully designed and customized E-Commernce website using React, Vite, and Tailwind CSS. Headless architecture for complete UI/UX control. Utilizes Shopify API to manage products, cart creation, and checkout. Implemented secure backend logic using Netlify Functions to protect API keys and handling form/email (Contact Page) processing. Kitted with custom product gallery, zoom interactions, size charts, animated transitions, navbar routing, etc. [CONTRACTED BY: ANTHONY MARX]"
              ctaText="Click To Shop At Dirty Little Birdie!"
              href="https://dirtylittlebirdie.com"
              ctaclassName="mt-4 block bg-pink-300 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-pink-800 focus:outline-none transition-colors duration-200"
            />
            <CardWrapper
              imgsrc="/superblack.png"
              imgalt="Cover of Super BlackJack"
              overlayText="Twist on the common card game of Blackjack and Pokemon, complete with levels, sound effects, animations, etc. Loosely based on the aethestics of the SNES game system. Developed an enemy AI using probability calculations, allowing enemy to draw cards at will regardless of player's actions. Refined game logic to handle various game states, outcomes, and potential bugs to ensure a seamless gaming experience"
              ctaText="Click To Play!"
              href="https://snessuperblackjack.netlify.app/"
              ctaclassName="mt-4 block bg-blue-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-blue-800 focus:outline-none transition-colors duration-200"
            />
            <CardWrapper
              imgsrc="/thehotspots.png"
              imgalt="Cover of The Hot Spots"
              overlayText="COMING SOON![CONTRACTED BY: ALEXANDER VALDEZ & BRI DIAZ]"
              ctaText="COMING SOON"
              href="https://vdpsolutions.tech"
              ctaclassName="mt-4 block bg-orange-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-blue-800 focus:outline-none transition-colors duration-200"
            />
          </div>
        </div>
      </>
    </div>
  );
}

export default Portfolio;
