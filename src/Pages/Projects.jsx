import React from "react";
import { showcase } from "../constants/index.js";
const Projects = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-30 translate-y-20 min-h-screen max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Showcasing My Projects</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Throughout my learning journey, I have developed projects using a
            variety of programming languages and technologies. Below, I grouped
            them based on the tech stacks I used, reflecting my growth and
            versatility.
          </p>
        </div>
        <div className="projects w-full container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {showcase.map((showcase, index) => (
            <div
              key={index}
              className="project-card bg-zinc-900 rounded-xl shadow-md border border-zinc-800 p-4 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500 transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image */}
              <a href={showcase.link} target="_blank">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={showcase.image}
                    alt={showcase.title}
                    className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </a>
              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold">{showcase.title}</h3>

              {/* Description */}
              <p className="text-sm text-zinc-400 mt-2">
                {showcase.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {showcase.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-400/20 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              {/* <a
                href={showcase.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm text-center"
              >
                View Project
              </a> */}
            </div>
          ))}
        </div>
        {/* Video Highlights  */}
        <div className="youtube-title items-center mb-8 text-center">
          <h1 className="font-bold text-2xl sm:text-3xl mb-10 mt-20 p-10">
            Highlights from My College Journey
          </h1>
        </div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Video 1 */}
          <div className="youtube-item w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/oK2JMBZhh18?start=32"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="youtube-item w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/5plZqHs7ccM?start=92"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
