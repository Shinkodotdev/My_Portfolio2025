import React, { useRef } from "react";
import { skill } from "../constants/index.js";
import AnimatedCounter from "../sections/AnimatedCounter.jsx";

const Skills = () => {
  const skillRefs = useRef([]);

  return (
    <div className="skills text-center px-4 py-10">
      <h2 className="animation-01 text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
        What I Do
      </h2>
      <h3 className="animation-01 text-sm sm:text-md text-zinc-400 mb-10 max-w-2xl mx-auto">
        Here are the technologies and tools I use to build modern, scalable, and
        responsive web & mobile applications.
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skill.map((s, i) => (
          <div
            key={i}
            ref={(el) => (skillRefs.current[i] = el)}
            className="animation-03 bg-zinc-800 hover:bg-blue-600/20 transition duration-300 ease-in-out border border-zinc-700 hover:border-blue-500 rounded-2xl p-4 text-center shadow-lg shadow-black/30 backdrop-blur-sm transform hover:scale-105"
          >
            <img
              src={s.icon}
              alt={s.name}
              className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 object-contain"
            />
            <p className="font-medium text-xs sm:text-sm md:text-base text-zinc-200 mb-1">
              {s.name}
            </p>
          <p className="text-xs text-zinc-400 mt-1">
              {s.level} {s.level === 1 ? 'Year' : 'Years'}
          </p>
          </div>
        ))}
      </div>
      <AnimatedCounter />
    </div>
  );
};

export default Skills;
