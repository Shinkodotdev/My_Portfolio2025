import React, { useEffect } from 'react';
import AnimatedCounter from './AnimatedCounter.jsx';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Me = () => {
useEffect(() => {
const elements = ["#me", ".marquee", ".me-card-container"]
elements.forEach(selector => {
    gsap.fromTo(
    selector,
    { y: -200, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 10,
        stagger: 0.8,
        ease: "power4.out",
        scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse", // Re-trigger every time
        }})
    })}, 
[]);
return (
    <section id="me" className="py-16 bg-zinc-950 text-white">
        <AnimatedCounter />
      {/* Tech Stack Auto-Sliding Background */}
    <div className="w-full overflow-hidden py-2 bg-zinc-950">
        <div className="marquee py-6">
            <div className="marquee-box flex gap-6 animate-marquee whitespace-nowrap">
                {[
                "html", "css", "javascript", "react", "php", "mysql", "tailwind",
                "github", "git", "threejs", "Mapbox", "node", "bootstrap",
                "word", "excel", "powerpoint", "figma", "python", "java", "vscode",
                "c++", "webstorm", "pycharm", "nvidia", "hostinger",
                "html", "css", "javascript", "react", "php", "mysql", "tailwind",
                "github", "git", "threejs", "Mapbox", "node", "bootstrap",
                "word", "excel", "powerpoint", "figma", "python", "java", "vscode",
                "c++", "webstorm", "pycharm", "nvidia", "hostinger"
                ].map((tech, idx) => {
                    const useSvg = ["git", "python"];
                    const extension = useSvg.includes(tech.toLowerCase()) ? "svg" : "png";
                return(
                <img
                    key={idx}
                    src={`/images/logos/${tech}.${extension}`}
                    alt={tech}
                    className="h-12 w-auto"
                />
                );
            })}
        </div>
    </div>
</div>
      {/* Me Card */}
    <div className="me-card-container flex justify-center mt-20 px-4">
        <div className="me-card bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl shadow-2xl p-8 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 border border-zinc-700">
          {/* Profile Image */}
            <div className="me-image flex justify-center md:justify-start w-full md:w-auto">
            <img
                src="/images/Me.JPG"
                alt="Mark Joseph O. Iglesia"
                className="rounded-2xl w-50 h-60 md:w-100 md:h-80 object-cover border-4 border-zinc-600 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition duration-300"
            />
        </div>
{/* Personal Info */}
        <div className="me-info flex flex-col justify-center text-center md:text-left w-full">
            <h2 className="text-4xl font-extrabold text-white mb-1">Mark Joseph O. Iglesia</h2>
            <p className="text-blue-400 text-lg font-medium mb-4">Fresh Graduate · Web Developer</p>
            <hr className="border-zinc-700 mb-4" />
            <p className="text-zinc-300 leading-relaxed mb-4">
              I'm a passionate and highly motivated web developer with a strong foundation in modern web technologies.
              I recently earned my degree in Information Technology and specialize in crafting responsive, user-friendly, and performance-driven web applications using technologies like <span className="text-white font-medium">React</span>, <span className="text-white font-medium">PHP</span>, <span className="text-white font-medium">MySQL</span>, and <span className="text-white font-medium">Tailwind CSS</span>.
            </p>
            <div className="text-sm text-zinc-400 space-y-1 mb-6">
              <p><strong>Location:</strong> Santo Domingo, Nueva Ecija, Philippines 3133</p>
              <p><strong>Specialty:</strong> Web Development</p>
            </div>
          </div>

          {/* Social Stack */}
          <div className="social-stack mt-12 flex justify-center">
            <div className="flex flex-wrap gap-6 items-center justify-center bg-zinc-900 rounded-xl p-6 shadow-lg max-w-4xl w-full border border-zinc-700">
              {[
                { href: "https://github.com/Shinkodotdev", icon: "github" },
                { href: "https://www.linkedin.com/in/iglesia-mark-joseph-0-73ab45222/", icon: "linkedin" },
                { href: "https://www.tiktok.com/@shinkodotwebdev", icon: "tiktok" },
                { href: "https://web.facebook.com/shinkodotdev", icon: "facebook" },
                { href: "https://www.instagram.com/shinkodotdev/", icon: "instagram" },
                { href: "mailto:markiglesia15@email.com", icon: "gmail" },
              ].map(({ href, icon }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition transform duration-300"
                >
                  <img src={`/images/logos/${icon}.png`} alt={icon} className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
