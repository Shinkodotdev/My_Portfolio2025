import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MotivIT = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);

useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setFadeOut(true); // trigger fade
      setTimeout(() => navigate("/"), 800); // wait before redirect
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
}, [navigate]);

return (
    <section className={`flex flex-col justify-center items-center min-h-screen px-4 bg-gray-900 transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
        <h1 className="font-bold text-3xl text-center py-10 text-violet-400 drop-shadow-lg">
            Hello <span className="text-white">MotivIT!</span>
        </h1>
        <video
            ref={videoRef}
            autoPlay
            playsInline
            controls
            preload="auto"
            className="w-full max-w-md max-h-100 rounded-2xl shadow-xl border-4 border-violet-700 object-contain"
            >
            <source src="/videos/MotivIt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </section>
    );
};
export default MotivIT;
