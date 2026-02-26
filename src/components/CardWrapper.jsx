import React from "react";
import Card from "./Card";

function CardWrapper({
  imgsrc,
  imgalt,
  href,
  ctaText,
  overlayText,
  ctaclassName = "",
}) {
  return (
    <Card className="overflow-hidden rounded-lg">
      <div className="group relative overflow-hidden rounded-lg">
        <img
          src={imgsrc}
          alt={imgalt}
          className="w-full h-auto transition-transform duration-300 ease-out transform group-hover:scale-110 group-hover:grayscale rounded-lg"
        />

        {/* <div className="absolute inset-0 bg-black bg-opacity-0 backdrop-blur-0 flex items-center justify-center px-4 transition-all duration-300 ease-out group-hover:bg-opacity-50 group-hover:backdrop-blur-sm z-10 rounded-lg"> */}
        <div className="absolute inset-0 bg-black/0 flex items-center justify-center px-4 transition-all duration-300 ease-out group-hover:bg-black/50 group-hover:backdrop-blur-sm z-10 rounded-lg">
          <p className="text-white text-center text-lg font-semibold opacity-0 translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
            {overlayText}
          </p>
        </div>
      </div>

      {ctaText &&
        (href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaclassName} mt-4 block transition-colors duration-200 z-20`}
          >
            {ctaText}
          </a>
        ) : (
          <span
            className={`${ctaclassName} mt-4 block transition-colors duration-200 z-20`}
          >
            {ctaText}
          </span>
        ))}
    </Card>
  );
}

export default CardWrapper;
