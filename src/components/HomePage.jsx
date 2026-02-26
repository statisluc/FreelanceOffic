import React, { useEffect, useMemo, useRef, useState } from "react";

import Landing from "./Landing.jsx";
import WhoAreWe from "./WhoAreWe.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import OurSkills from "./OurSkills.jsx";

const BACKGROUNDS = {
  landing: "bg-gradient-to-br from-pink-500 to-orange-500",
  who: "bg-white",
  why: "bg-gradient-to-b from-black to-gray-800",
  skills: "bg-white",
};

const clamp01 = (n) => Math.max(0, Math.min(1, n));

export default function HomePage() {
  const landingRef = useRef(null);
  const whoRef = useRef(null);
  const whyRef = useRef(null);
  const skillsRef = useRef(null);

  const stops = useMemo(
    () => [
      { key: "landing", ref: landingRef, bg: BACKGROUNDS.landing },
      { key: "who", ref: whoRef, bg: BACKGROUNDS.who },
      { key: "why", ref: whyRef, bg: BACKGROUNDS.why },
      { key: "skills", ref: skillsRef, bg: BACKGROUNDS.skills },
    ],
    [],
  );

  const [stage, setStage] = useState({
    a: stops[0].bg,
    b: stops[0].bg,
    t: 0,
    p: 0,
    q: 0,
  });

  useEffect(() => {
    let raf = 0;

    const compute = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;

      // trigger at middle of viewport
      const probeY = y + vh * 0.5;

      const tops = stops.map((s) => {
        const el = s.ref.current;
        const top = el ? el.offsetTop : 0;
        const height = el ? el.offsetHeight : 1;
        return { bg: s.bg, top, height };
      });

      let i = 0;
      for (let idx = 0; idx < tops.length; idx++) {
        if (probeY >= tops[idx].top) i = idx;
      }

      const curr = tops[i];
      const next = tops[Math.min(i + 1, tops.length - 1)];

      const BLEND_ZONE = 300;
      const start = next.top - BLEND_ZONE;
      const end = next.top;

      const t = clamp01((probeY - start) / (end - start));
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
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 ${stage.a}`}
          style={{ opacity: 1 - stage.t, ...motionA }}
        />
        <div
          className={`absolute inset-0 ${stage.b}`}
          style={{ opacity: stage.t, ...motionB }}
        />
      </div>

      <div className="flex flex-col">
        <section ref={landingRef} className="min-h-screen">
          <Landing />
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
