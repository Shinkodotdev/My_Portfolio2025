import React, { useEffect, useRef } from 'react';
import {projects} from '../constants/index.js'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Projects = () => {
  const scrollRef = useRef(null);
useEffect(() => {
  const elements = [".project-text, .project-title, .project-card"];
  elements.forEach(selector => {
    gsap.fromTo(
      selector,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.8,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse", 
        }
      }
    )
  })
}, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    const cardWidth = 370;
    let scrollPosition = 0;
    const interval = setInterval(() => {
      if (!scrollContainer) return;
        scrollPosition += cardWidth;
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-10 bg-zinc-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="project-text text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className=" overflow-x-auto scrollbar-hide">
          <div ref={scrollRef} className="flex gap-6 snap-x snap-mandatory overflow-x-scroll scroll-smooth pb-4 px-1 scrollbar-hide">
            {projects.map((project, idx) => (
                <div key={idx} className="project-card w-[90%] sm:w-[300px] md:w-[350px] lg:w-[370px] snap-center bg-zinc-900 rounded-xl shadow-md border border-zinc-700 overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0">
                  <img src={project.image} alt={project.title} className="w-full h-52 object-cover"/>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-zinc-400 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-blue-400 font-mono mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-zinc-800 px-2 py-1 rounded">{tech}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-blue-500 hover:underline" > View Code →</a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
