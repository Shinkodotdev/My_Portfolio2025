import React, { useEffect, useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactCards } from "../constants/index.js";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current.querySelectorAll("h2, p.text-zinc-300"), {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
      ScrollTrigger.batch(cardsRef.current, {
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { y: 50, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 }
          );
        },
        start: "top 90%",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  

  return (
    <section id="contact" ref={containerRef} className="relative bg-zinc-950 text-white py-20 px-4 md:px-10 overflow-hidden" >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <TitleHeader title="Get In Touch with Me" sub="Contact Information" />
        <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Whether you're looking to collaborate on a project, have a question, want to commission work, or simply say hello — I’d love to hear from you!
        </p>
        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3 grid-cols-1 justify-center max-w-4xl mx-auto">
          {contactCards.map((card, idx) => (
            <div key={idx} ref={(el) => (cardsRef.current[idx] = el)} className={`hover:scale-105 transition-transform duration-300 shadow-xl rounded-2xl px-4 py-4 text-white bg-zinc-900 border border-zinc-700`}>
              <p className="text-base font-semibold mb-2">{card.title}</p>
              <a href={card.link} target={card.link.startsWith("http") ? "_blank" : "_self"} rel={card.link.startsWith("http") ? "noopener noreferrer" : ""} className={`inline-block ${card.bg} ${card.hover} px-4 py-2 rounded-full text-sm font-medium transition`}>
                {card.text}
              </a>
            </div>
          ))}
        </div>
        <p className="text-sm text-zinc-500">
          I usually respond within 24 hours. Let’s create something meaningful together.
        </p>
      </div>
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-600/10 blur-2xl opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Contact;
