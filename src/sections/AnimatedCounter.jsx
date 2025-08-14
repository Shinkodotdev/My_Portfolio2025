import React, { useEffect, useRef, useState, useMemo } from "react";
import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AnimatedCounter = () => {
  const counterSectionRef = useRef(null);
  const [shouldCount, setShouldCount] = useState(false);
  const renderedCounters = useMemo(() => {
    
    return counterItems.map((item) => (
      <div
        key={item.label}
        className="bg-zinc-800 hover:bg-blue-600/20 transition duration-300 ease-in-out border border-zinc-700 hover:border-blue-500 rounded-lg p-10 flex flex-col justify-center items-center shadow-lg shadow-black/30 backdrop-blur-sm"
      >
        <div className="counter-number text-white text-4xl font-bold mb-2">
          {shouldCount ? (
            <CountUp suffix={item.suffix} end={item.value} duration={2} />
          ) : (
            "0" + (item.suffix || "")
          )}
        </div>
        <p className="text-white text-lg font-medium">{item.label}</p>
      </div>
    ));
  }, [shouldCount]);

  useEffect(() => {
    if (!counterSectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: counterSectionRef.current,
      start: "top 100%",
      onEnter: () => setShouldCount(true),
      onEnterBack: () => setShouldCount(true),
      onLeave: () => setShouldCount(true),
      onLeaveBack: () => setShouldCount(true),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      id="counter"
      ref={counterSectionRef}
      className="padding-x-lg xl:mt-10 mt-10 mb-0"
    >
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {renderedCounters}
      </div>
    </div>
  );
};

export default AnimatedCounter;
