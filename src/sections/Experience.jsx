import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const cards = cardsRef.current;
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0, x: 50 },
      {
        y: 0,
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full section-padding xl:px-10 md:px-10 px-10 py-0 text-white"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <TitleHeader title="Experience" sub="My Career Overview" />

        {/* Timeline Line */}
        <div className="block xl:block absolute left-1/2 top-50 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-yellow-400 rounded-full transform -translate-x-1/2 z-0" />

        {/* Timeline Items */}
        <div className="mt-20 flex flex-col w-full relative">
          {expCards.map((card, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={card.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative z-10 flex flex-col xl:flex-row items-center w-full mb-16 ${
                  isLeft ? "xl:justify-start" : "xl:justify-end"
                }`}
              >
                {/* Date Circle */}
                <div className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2 z-20 cursor-pointer date-circle">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      activeIndex === index ? "w-auto px-4" : "w-12"
                    }`}
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <span
                      className={`text-sm font-semibold text-white whitespace-nowrap transition-opacity duration-300 ${
                        activeIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {card.date}
                    </span>
                  </div>
                </div>

                {/* Experience Card */}
                <div
                  className={`exp-card-wrapper w-full xl:w-[45%] bg-zinc-900/70 backdrop-blur border border-zinc-700 rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-300 ${
                    isLeft ? "xl:ml-0 xl:mr-auto" : "xl:mr-0 xl:ml-auto"
                  }`}
                >
                  <div className="flex flex-col space-y-4 items-center text-center xl:text-left">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img
                        src={card.logoPath}
                        alt={`${card.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h1 className="font-bold text-2xl text-white">
                      {card.title}
                    </h1>
                    <p className="text-sm text-gray-400">{card.company}</p>
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

                    {/* Button only on last card */}
                    {/* {index === expCards.length - 1 && (
                      <a
                        href="/OJT"
                        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 rounded-full shadow-lg transition-all transform hover:scale-105"
                      >
                        View My OJT
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
