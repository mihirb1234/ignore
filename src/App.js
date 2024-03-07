import React, { useEffect, useRef } from "react";
import "./App.css";
import dog from "./assets/dogsus.jpeg";
import funi from "./assets/q.mp3";
import buff from "./assets/buff.mp4";
import hehe from "./assets/hehe.png";

function App() {
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
    videoRef.current.play();
  }, []);

  return (
    <div className="relative">
      <img src={dog} alt="" className="h-screen w-screen object-cover" />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 "
      >
        <source src={buff} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-5xl sm:text-4xl md:text-5xl lg:text-2xl xl:text-7xl 2xl:text-8xl text-white">
          yo whats good homie
        </p>
        <div className="ml-10">
          <img
            src={hehe}
            className="absolute w-[50%] h-[40%] transform translate-x-4"
          />
          {/* <img src={hehe} className="absolute w-[50%] h-[40%]" /> */}
          {/* <img src={hehe} className="absolute w-[50%] h-[40%]" /> */}
        </div>
      </div>

      <audio ref={audioRef} src={funi} autoPlay loop className="hidden" />
    </div>
  );
}

export default App;
