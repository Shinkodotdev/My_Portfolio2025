import React from 'react';
import { techStack } from '../constants/index.js'; 
const Marquee = () => {
  const items = [...techStack, ...techStack]; 
  return (
    <div className="relative w-full overflow-hidden py-8 bg-zinc-800">
      <div className="absolute top-0 left-0 h-full w-16  z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-16  z-10 pointer-events-none" />
      <div className="flex animate-marquee gap-16 whitespace-nowrap px-6">
        {items.map((tech, idx) => {
          const useSvg = ["git", "python"];
          const extension = useSvg.includes(tech.toLowerCase()) ? "svg" : "png";
          return (
            <img
              key={idx}
              src={`/images/logos/${tech}.${extension}`}
              alt={tech}
              title={tech.toUpperCase()}
              aria-label={tech}
              className="h-10 w-auto transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
