import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-start items-center text-start pt-24">
        <Card className="max-w-[1300px] text-start">
          <h1 className="font-rubik text-5xl">Pricing and PriceChecker</h1>
        </Card>
        <Card className="max-w-[1300px] text-start mt-4 mb-8">
          Our Pricing Page and PriceChecker are currently undergoing
          maintanence. Please contact us directly via our Contact Page to
          inquire about pricing and rates. We apologize for any inconvenience
          this may bring.
        </Card>
      </div>
    </>
  );
}

export default Pricing;
