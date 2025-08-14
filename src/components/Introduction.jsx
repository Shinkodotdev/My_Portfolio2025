import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const ContactModal = lazy(() => import('../components/Modals/ContactModal.jsx'));

const Introduction = ({ videoStage, setVideoStage }) => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (videoContainerRef.current) {
      gsap.fromTo(
        videoContainerRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: 'top 80%',
            once: true 
          }
        }
      );
    }

    const video = videoRef.current;
    if (!video) return;

    let lastStage = 'default'; 
    const handleTimeUpdate = () => {
      const time = video.currentTime;
      let newStage = 'default';

      if (time >= 40) newStage = 'phase2';
      else if (time >= 10) newStage = 'phase1';

      if (newStage !== lastStage) {
        lastStage = newStage;
        setVideoStage(newStage);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [setVideoStage]);

  return (
    <>
      <div ref={videoContainerRef} className="flex justify-center mb-6">
        <video
          ref={videoRef}
          controls
          preload="metadata" 
          className="video-player w-full sm:w-90 h-100 rounded-xl shadow-lg border-2 border-blue-700 object-cover"
        >
          <source src="/videos/Introduction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="text-center text-zinc-400 mb-4">
        📹 My 1-Minute Introduction Video
      </p>

      {videoStage === 'phase2' && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors duration-300"
          >
            Click Me and Let’s Collaborate!
          </button>
        </div>
      )}
      {showModal && (
        <Suspense fallback={null}>
          <ContactModal showModal={showModal} setShowModal={setShowModal} />
        </Suspense>
      )}
    </>
  );
};

export default Introduction;
