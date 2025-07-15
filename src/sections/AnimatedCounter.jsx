import React, { useEffect, useRef, useState } from 'react';
import { counterItems } from '../constants/index.js';
import CountUp from 'react-countup';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterSectionRef = useRef(null);
  const [shouldCount, setShouldCount] = useState(false);
  const [key, setKey] = useState(0); // Used to reset CountUp

  useEffect(() => {
    const anim = {
      play: () => {
        setShouldCount(true);
        setKey((prev) => prev + 1); // Force reset
      },
      reverse: () => {
        setShouldCount(false);
        setKey((prev) => prev + 1); // Reset again if reversed
      },
    };

    const trigger = ScrollTrigger.create({
      trigger: counterSectionRef.current,
      start: 'top 80%',
      onEnter: () => anim.play(),
      onLeave: () => anim.reverse(),
      onEnterBack: () => anim.play(),
      onLeaveBack: () => anim.reverse(),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div id="counter" ref={counterSectionRef} className="padding-x-lg xl:mt-10 mt-10 mb-20">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={item.label + key} // Changing key forces re-render
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {shouldCount ? (
                <CountUp suffix={item.suffix} end={item.value} duration={2} />
              ) : (
                '0' + (item.suffix || '')
              )}
            </div>
            <div>
              <p className="text-white text-lg font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
