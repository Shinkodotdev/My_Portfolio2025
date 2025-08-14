import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [isVantaLoaded, setIsVantaLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
  useEffect(() => {
    const node = vantaRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !isVantaLoaded) {
          const [THREE, NET] = await Promise.all([
            import("three"),
            import("vanta/dist/vanta.net.min"),
          ]);

          vantaEffect.current = NET.default({
            el: node,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x7030ea,
            backgroundColor: 0x060613,
            points: 16.0,
            maxDistance: 17.0,
            spacing: 30.0,
          });

          setIsVantaLoaded(true);
          gsap.to(node, { opacity: 1, duration: 0.4 });
          setIsLoading(false);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVantaLoaded]);

  return (
    <section
      id="hero"
      ref={vantaRef}
      className="relative w-full min-h-screen flex items-center justify-center opacity-0"
    >
      <div className="hero-text relative z-10 text-center text-white px-5 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4">
          Welcome to My Portfolio
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          I’m{" "}
          <span className="text-white drop-shadow-md">
            {isVantaLoaded && (
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
            )}
          </span>
        </h2>
        {/* Buttons */}
        <div className="hero-button mt-8 flex justify-center gap-8">
          <a
            href="./Pages/Projects.jsx"
            className="px-6 py-3 border-2 border-purple-600 text-purple-100 hover:bg-purple-700 hover:text-white rounded-full transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 border-2 border-purple-600 text-purple-100 hover:bg-purple-700 hover:text-white rounded-full transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
        <p className="hero-p text-base md:text-lg mt-6 max-w-xl mx-auto text-gray-400">
          I’m passionate about building clean, user-friendly web apps and
          bringing ideas to life through code.
        </p>
      </div>
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
