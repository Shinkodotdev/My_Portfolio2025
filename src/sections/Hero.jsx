import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterGlitch from "../components/LetterGlitch";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glitch effect */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Main content */}
      <div className="hero-text relative z-10 text-center text-white px-5 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4">
          Welcome to My Portfolio
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          I’m{" "}
          <span className="text-white drop-shadow-md">
            <Typewriter
              words={[
                "Mark Joseph O. Iglesia",
                "BSIT Graduate - Web Systems Technology",
                "Full-Stack Web Developer",
                "Problem Solver",
                "Backend Developer",
                "Frontend Developer",
                "Clean Code Advocate",
                "Lifelong Learner",
                "Tech Explorer",
                "Leader",
                "Content Creator",
                "Critical Thinker",
                "Team Collaborator",
                "Driven by Passion",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </h2>

        {/* Buttons */}
        <div className="hero-button mt-8 flex justify-center gap-8">
  <Link
    to="/projects"
    className="px-6 py-3 border-2 border-purple-500 text-white bg-purple-700 rounded-full"
  >
    View Projects
  </Link>
          <a
            href="/documents/Mark_Joseph_Iglesia_Resume.pdf"
            target="_blank"
            className="px-6 py-3 border-2 border-purple-500 text-white bg-purple-700 rounded-full"
          >
            Download Resume
          </a>
        </div>

        <p className="hero-p text-base md:text-lg mt-6 max-w-xl mx-auto text-gray-100">
          I’m passionate about building clean, user-friendly web apps and
          bringing ideas to life through code.
        </p>
      </div>

      {/* Down arrow */}
      <a
        href="#about"
        title="Learn more"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-chevron-double-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 3.646a.5.5 0 0 1 .708 0L8 9.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
          <path
            fillRule="evenodd"
            d="M1.646 7.646a.5.5 0 0 1 .708 0L8 13.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
