import React, { useEffect, useRef, useState, lazy, Suspense, memo } from "react";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from "./AnimatedCounter.jsx";

const Profile = lazy(() => import("../components/Profile.jsx")); 
const Introduction = lazy(() => import("../components/Introduction.jsx"));
const PersonalInfo = lazy(() => import("../components/PersonalInfo.jsx"));
const Skills = lazy(() => import("../components/Skills.jsx"));

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const titleRef = useRef(null);
  const [videoStage, setVideoStage] = useState("default");

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.in",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none ",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="about"
      className={`transition-all duration-1000 ${
        videoStage === "phase2" ? "bg-zinc-900" : "bg-zinc-800"
      } text-white`}
    >
      <div className="title-container text-center px-4 py-6">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl font-bold text-white mb-0 tracking-tight"
        >
          About Me
        </h2>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-12">
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
            <PersonalInfo />
            <Introduction videoStage={videoStage} setVideoStage={setVideoStage} />
            <Skills />
          </Suspense>
          <AnimatedCounter />
        </div>
      </div>
    </section>
  );
};

export default memo(About);
