import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);
const Experience = () => {
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    cardsRef.current = ['.expi, .expi-title'];
    gsap.fromTo(
      cardsRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 5,
        ease: "power4.out",
        stagger: 0.8,
        scrollTrigger: {
          trigger: "#experience",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="experience"
      className="relative w-full md:mt-0 mt-10 section-padding xl:px-0"
    >
      <div className="expi-title w-full h-full md:px-20 px-5">
        <TitleHeader  title="Work Experience" sub="My Career Overview" />

        {/* Center Vertical Timeline Line */}
        <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2 top-40 bottom-0 z-0">
          <div className="w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-yellow-400 rounded-full"></div>
        </div>

        {/* Timeline Items */}
        <div className="mt-20 flex flex-col gap-16 z-50 relative">
          {expCards.map((card, index) => (
            <div
              key={card.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="expi relative z-10 flex xl:flex-row flex-col xl:pl-0 xl:pr-20"
            >
              {/* Date circle on timeline with hover & click */}
              <div
                className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 cursor-pointer date-circle"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div
                  className={`w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 rounded-full flex items-center justify-center shadow-md
                    transition-all duration-300
                    ${activeIndex === index ? "w-auto px-3" : "w-10"}
                  `}
                  title={card.date}
                >
                  <span
                    className={`text-xs font-semibold text-white whitespace-nowrap
                      transition-opacity duration-300
                      ${activeIndex === index ? "opacity-100" : "opacity-0"}
                    `}
                  >
                    {card.date}
                  </span>
                </div>
              </div>
              {/* Experience Card on the right */}
              <div className="exp-card-wrapper w-full xl:w-[45%] bg-zinc-900/60 backdrop-blur border border-zinc-700 rounded-2xl p-6 shadow-md xl:ml-auto">
                <div className="flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={card.logoPath}
                      alt={`${card.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h1 className="font-semibold text-2xl text-white">
                    {card.title} 
                  </h1>
                  <p className="text-sm text-gray-400">{card.company}</p>
                  <p>{card.date}</p>
                  {card.description && (
                    <p className="text-gray-300 text-sm whitespace-pre-line">
                      {card.description}
                    </p>
                  )}
                  <p className="text-[#839cb5] italic">Responsibilities</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    {card.responsibilities.map((responsibility, i) => (
                      <li key={i} className="text-sm">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
