import React from 'react';
import { socialImgs } from '../constants';
const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-8 border-t border-zinc-800 relative">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center gap-5">

        {/* Social Icons */}
        <div className="flex gap-5 justify-center items-center">
          {socialImgs.map((img, index) => (
            <a
              key={index}
              href={img.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              aria-label={img.alt || `social-icon-${index}`}
            >
              <img
                src={img.imgPath}
                alt={img.alt || `social-icon-${index}`}
                className="h-6 w-6 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-zinc-500 mt-6 select-none">
        © {new Date().getFullYear()} Mark Joseph O. Iglesia. All rights reserved.
      </div>

      {/* Glow background effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-700/10 via-purple-700/5 to-pink-700/10 blur-3xl opacity-20"></div>
    </footer>
  );
};

export default Footer;
