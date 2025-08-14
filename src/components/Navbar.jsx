import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants/index.js';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <Link to="/" className="logo">
          Shinko | Dev
        </Link>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ id, link, name }) => (
              <li key={id} className="group">
                {isHome ? (
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                ) : (
                  <Link to="/" state={{ scrollTo: link }}>
                    <span>{name}</span>
                    <span className="underline" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>

       
      </div>

      {/* Mobile Menu */}
<div
  className={`mobile-menu lg:hidden bg-black text-white absolute top-full left-0 w-full px-6 py-5 z-50 transform transition-all duration-300 ease-in-out
    ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
  `}
>
  <ul className="flex flex-col space-y-4">
    {navLinks.map(({ id, link, name }) => (
      <li key={id}>
        {isHome ? (
          <a
            href={link}
            onClick={() => setMobileOpen(false)}
            className="block hover:text-gray-300 transition-colors duration-200"
          >
            {name}
          </a>
        ) : (
          <Link
            to="/"
            state={{ scrollTo: link }}
            onClick={() => setMobileOpen(false)}
            className="block hover:text-gray-300 transition-colors duration-200"
          >
            {name}
          </Link>
        )}
      </li>
    ))}
  </ul>
</div>
    </header>
  );
};

export default Navbar;
