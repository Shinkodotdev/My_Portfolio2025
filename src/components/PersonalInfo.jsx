import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const PersonalInfo = () => {
     const aboutRef = useRef([]);
      
    useEffect(() => {
        aboutRef.current = ['.name-about'];
      gsap.fromTo(
          aboutRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            stagger: 1,
            scrollTrigger: {
              trigger: ".name-about",
              start: "left 80%",
              end: "right 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
        gsap.fromTo(
          ".name-course-about",
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".name-about",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
        gsap.fromTo(
          ".name-p-about",
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".name-course-about",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }, []);
return (
    <div className="about">
        <h2 className="name-about text-4xl font-extrabold mb-1">Mark Joseph O. Iglesia</h2>
            <p className="name-course-about text-blue-400 text-lg font-medium mb-4">Information Technology · Web Systems Technology</p>
                <div className="name-course-about text-sm text-zinc-400 mb-2">
                    <p><strong>Location:</strong> Santo Domingo, Nueva Ecija, Philippines 3133</p>
                    <p><strong>School:</strong> Nueva Ecija University of Science and Technology</p>
                </div>
            <hr className="name-p-about border-zinc-700 mb-4 w-1/2 mx-auto" />
                <p className="name-p-about text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-6">
                    Hi, I'm a recent graduate with a Bachelor's degree in Information Technology (June 20, 2025).
                    I specialize in Web Systems Technology and have a passion for building innovative web solutions.
                    I'm eager to contribute my knowledge and creativity to exciting, real-world projects.
                </p>
            </div>
        );
    }
export default PersonalInfo;
