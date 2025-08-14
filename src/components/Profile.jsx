import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Profile = () => {
     const aboutRef = useRef([]);
  
    useEffect(() => {
        aboutRef.current = ['.my-pic'];
      gsap.fromTo(
          aboutRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.in",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".profile",
              start: "left 80%",
              end: "right 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }, []);
return (
    <div className="profile flex justify-center mb-6 mt-0">
        <img
            src="/images/Me.png"
            alt="Mark Joseph O. Iglesia"
            className="my-pic rounded-full w-52 h-52 object-cover shadow-lg border-4 border-blue-700"
        />
    </div>
)}

export default Profile