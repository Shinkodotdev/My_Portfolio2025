import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // ✅ useState instead of React.useState

  useEffect(() => { // ✅ useEffect instead of usedEffect
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled); // ✅ use the value of isScrolled
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Shinko | Dev
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
