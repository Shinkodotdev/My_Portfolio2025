import React, { useEffect, useRef } from "react";
import { projects } from "../constants/index.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-35 bg-zinc-950 text-white px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        <TitleHeader title="Creations" sub="Projects That Showcase My Skills" />

        <div className="relative mt-12">
          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 snap-x snap-mandatory overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-3 scroll-smooth pb-6 px-1 scrollbar-hide"
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card w-[100%] sm:w-[300px] md:w-auto snap-center bg-zinc-900 rounded-xl shadow-md border border-zinc-800 overflow-hidden 
  hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500 transition-transform duration-300 hover:scale-[1.02] flex-shrink-0 flex flex-col"
              >
                {/* ✅ Image Container with fixed height */}
                <div className="h-52 overflow-hidden">
              
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
            
                </div>

                {/* ✅ Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 text-sm flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs font-mono mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* View All Projects Button */}
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
