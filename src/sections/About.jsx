import React, { useState, memo } from "react";
import Profile from "../components/Profile.jsx"; 
import Introduction from "../components/Introduction.jsx";
import PersonalInfo from "../components/PersonalInfo.jsx";
import Skills from "../components/Skills.jsx";

const About = () => {
  const [videoStage, setVideoStage] = useState("default");

  return (
    <section id="about" className={`transition-all duration-1000 ${videoStage === "phase2" ? "bg-zinc-900" : "bg-zinc-800"} text-white`}>
      <div className="title-container text-center px-4 py-6">
        <h2 className="text-3xl sm:text-4xl font-bold -mb-20 tracking-tight py-15 mt-10">
          About Me
        </h2>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-12">
          <Profile />
          <PersonalInfo />
          <Introduction videoStage={videoStage} setVideoStage={setVideoStage} />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default memo(About);
