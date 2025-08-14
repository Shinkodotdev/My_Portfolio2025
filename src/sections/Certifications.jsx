import React, { useRef, useCallback, useMemo } from 'react';
import { certificates } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SCROLL_FRACTION = 0.2;

const Certifications = () => {
  const trackRef = useRef(null);

  const scroll = useCallback((direction) => {
    const container = trackRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * SCROLL_FRACTION;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === 'left') {
      container.scrollLeft <= 0
        ? container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' })
        : container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollLeft >= maxScrollLeft - 1
        ? container.scrollTo({ left: 0, behavior: 'smooth' })
        : container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, []);

  // Memoize certificate cards to avoid re-renders
  const certificateCards = useMemo(() => {
    return certificates.map((cert, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 snap-start transition-transform hover:scale-[1.02] duration-300 ease-in-out w-[65%] sm:w-[65%] md:w-[45%] lg:w-[30%] xl:w-[22%]"
      >
        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          <div className="hover:bg-zinc-800 transition p-6 rounded-1md shadow-md h-full flex flex-col justify-start items-center">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 sm:h-48 md:h-52 object-contain rounded mb-5"
              loading="lazy"
            />
            <h3 className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-center leading-snug tracking-wide">
              {cert.title}
            </h3>
            <p className="text-xs text-gray-400 mt-2">{cert.date}</p>
            <p className="text-xs text-gray-400 mt-2 text-center">{cert.description}</p>
          </div>
        </a>
      </div>
    ));
  }, []);

  return (
    <div className="relative select-none">
      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        aria-label="Previous"
        className="hidden sm:flex items-center justify-center absolute left-10 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-blue-600/50 hover:bg-blue-600/80 transition z-10 backdrop-blur shadow-lg"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={() => scroll('right')}
        aria-label="Next"
        className="hidden sm:flex items-center justify-center absolute right-10 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-blue-600/50 hover:bg-blue-600/80 transition z-10 backdrop-blur shadow-lg"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Scroll Track */}
      <div
        ref={trackRef}
        className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-3"
      >
        {certificateCards}
      </div>
    </div>
  );
};

export default Certifications;
