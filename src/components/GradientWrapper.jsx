import React from "react";

export default function GradientWrapper({ children }) {
  return (
    <div className="hover:shadow-[0_0_60px_18px_rgba(255,255,255,0.25)]">
      {/* //base gradient  */}
      <div className="bluegradient opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
      {/* //hover gradient  */}
      <div className=" bg-gradient-to-br from-pink-500 to-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 ">{children}</div>
    </div>
  );
}
