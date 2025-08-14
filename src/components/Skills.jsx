import React, { useEffect, useRef, useState } from "react";
import { skill } from '../constants/index.js';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
      const whatToDo = useRef([]);

    useEffect(() => {
        whatToDo.current = ['.animation-01'];
        gsap.fromTo(
            whatToDo.current,
            { x: -100, opacity: 0 },
            {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.in",
            stagger: 0.2,
            scrollTrigger: {
            trigger: ".skills",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            },
        }
    );
        gsap.fromTo(
          ".animation-03",
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.1,
            scrollTrigger: {
            trigger: ".grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none play reverse",
            },
          }
        );
        gsap.utils.toArray(".progress-bar").forEach((bar) => {
  const targetWidth = bar.getAttribute("data-level");

    gsap.fromTo(
    bar,
    { width: "0%" },
    {
        width: `${targetWidth}%`,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
        trigger: bar,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
}, []);
return (
    <div className="skills text-center px-4 py-5">
            <h2 className="animation-01 text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">What I Do</h2>
                <h3 className="animation-01 text-sm sm:text-md text-zinc-400 mb-10 max-w-2xl mx-auto">
                    Here are the technologies and tools I use to build modern, scalable, and responsive web & mobile applications.
                </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-zinc-200 text-sm max-w-5xl mx-auto">
                {skill.map((skills, i) => (
                <div key={i} className="animation-03 bg-zinc-800 hover:bg-blue-600/20 transition duration-300 ease-in-out border border-zinc-700 hover:border-blue-500 rounded-xl p-4 text-center shadow-lg shadow-black/30 backdrop-blur-sm">
                    <img src={skills.icon} alt={skills.name} className="animation-03 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mx-auto mb-3 object-contain"/>
                        <p className="font-medium text-xs sm:text-sm md:text-base text-zinc-200 mb-2">{skills.name}</p>
                        <p className="text-xs text-zinc-400">{skills.level} Years</p>
                    </div>
                ))}
            </div>
       
    </div>   
)}
export default Skills