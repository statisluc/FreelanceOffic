import React from "react";
import Card from "./Card.jsx";

function WhyChooseUs() {
  return (
    <>
      <div className="font-calibri">
        <h1 className="py-24 text-3xl text-white fond-bold flex items-center justify-center">
          Why Choose Us?
        </h1>
      </div>

      <div className="px-8 py-24 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-300 w-[200px]">
          <h1 className="text-2xl text-blue-800 font-bold flex items-center text-center justify-center">
            RANDOM PLACEHOLDER TEXT LEEDLE LEEDLE LEEDLE YOU GET YOUR FIRST
            LITTLE PACK AND SPEND Gs AT SACS IM RICH BUT STILL GET SHIT AT
            TJ-MAXX SPESH
          </h1>
        </Card>
        <Card className="bg-purple-200">
          <h1 className="text-2xl">
            random placeholder text as i slowly sign my soul away to the devil
          </h1>
        </Card>
      </div>
    </>
  );
}

export default WhyChooseUs;
