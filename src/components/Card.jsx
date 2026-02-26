import { useRef, useEffect, useState } from "react";
import React from "react";

export default function Card({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold, rootMargin },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`w-full max-w-[800px] transition-all duration-700 ease-out transform 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        bg-white p-6 rounded-xl shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
