import React from "react";

function Card({ children, className }) {
  return (
    <div
      className={`base-card-styles rounded-sm
     ${className}`}
    >
      <div className="transition-transform duration-200 ease-out hover:scale-102 px-4 py-4">
        {children}
      </div>
    </div>
  );
}

export default Card;
