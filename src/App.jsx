import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Home from "./components/Home.jsx";
import WhoAreWe from "./components/WhoAreWe.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import OurSkills from "./components/OurSkills.jsx";

// section background colors
const BACKGROUNDS = {
  home: "bg-gradient-to-br from-pink-500 to-orange-500",
  who: "bg-white",
  why: "bg-gradient-to-b from-black to-gray-800",
  skills: "bg-white", // change if OurSkills uses something else
};

const clamp01 = (n) => Math.max(0, Math.min(1, n));

export default function App() {
  const navRef = useRef(null);
  const homeRef = useRef(null);
  const whoRef = useRef(null);
  const whyRef = useRef(null);
  const skillsRef = useRef(null);

  const stops = useMemo(
    () => [
      { key: "home", ref: homeRef, bg: BACKGROUNDS.home },
      { key: "who", ref: whoRef, bg: BACKGROUNDS.who },
      { key: "why", ref: whyRef, bg: BACKGROUNDS.why },
      { key: "skills", ref: skillsRef, bg: BACKGROUNDS.skills },
    ],
    [],
  );

  const [stage, setStage] = useState({
    a: stops[0].bg,
    b: stops[0].bg,
    t: 0, // blend: 0..1
    p: 0, // progress through current section: 0..1 (for motion)
    q: 0, // progress through next section: 0..1 (optional motion)
  });

  useEffect(() => {
    let raf = 0;

    const compute = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;

      const navH = navRef.current?.offsetHeight ?? 0;
      const visibleTop = y + navH;
      const visibleH = vh - navH;

      // "when hitting middle of next section, activate
      const probeY = visibleTop + visibleH * 0.5;

      const tops = stops.map((s) => {
        const el = s.ref.current;
        const top = el ? el.offsetTop : 0;
        const height = el ? el.offsetHeight : 1;
        return { bg: s.bg, top, height };
      });

      // current index by probeY
      let i = 0;
      for (let idx = 0; idx < tops.length; idx++) {
        if (probeY >= tops[idx].top) i = idx;
      }

      const curr = tops[i];
      const next = tops[Math.min(i + 1, tops.length - 1)];

      // Where the *next section's top* is relative to the probe line
      // We'll blend as next section approaches the probe line, and finish when it passes it.
      const BLEND_ZONE = 200; // tweak for more/less dramatic transition
      const start = next.top - BLEND_ZONE; // start blending before next hits mid
      const end = next.top; // fully switched when next hits mid

      const t = clamp01((probeY - start) / (end - start));

      // motion progress inside current + next sections (for 3B animation)
      const p = clamp01((probeY - curr.top) / curr.height);
      const q = clamp01((probeY - next.top) / next.height);

      setStage({ a: curr.bg, b: next.bg, t, p, q });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [stops]);

  const motionA = {
    transform: `translateY(${stage.p * 18}px) scale(${1.06 + stage.p * 0.03}) rotate(${-0.25 + stage.p * 0.5}deg)`,
    willChange: "transform, opacity",
  };

  const motionB = {
    transform: `translateY(${stage.q * 18}px) scale(${1.06 + stage.q * 0.03}) rotate(${-0.25 + stage.q * 0.5}deg)`,
    willChange: "transform, opacity",
  };

  return (
    <>
      <div ref={navRef} className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Fixed background stage behind everything */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* current world */}
        <div
          className={`absolute inset-0 ${stage.a}`}
          style={{ opacity: 1 - stage.t, ...motionA }}
        />
        {/* next world */}
        <div
          className={`absolute inset-0 ${stage.b}`}
          style={{ opacity: stage.t, ...motionB }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backdropFilter: "blur(0px)",
            opacity: 0.08,
          }}
        />
      </div>

      {/* sections are now “drivers”, not owners of background */}
      <div className="flex flex-col">
        <Outlet />

        <section ref={homeRef} className="min-h-screen">
          <Home />
        </section>

        <section ref={whoRef} className="min-h-screen">
          <WhoAreWe />
        </section>

        <section ref={whyRef} className="min-h-screen py-12">
          <WhyChooseUs />
        </section>

        <section ref={skillsRef} className="min-h-screen">
          <OurSkills />
        </section>
      </div>
    </>
  );
}
