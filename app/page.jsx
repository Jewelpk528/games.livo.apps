"use client";

import { useState, useEffect, useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="main">

      {/* PARTICLES BACKGROUND */}
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            number: { value: 50 },
            color: { value: "#00ffcc" },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#00ffcc" }
          }
        }}
      />

      <h1 className="title">🎮 Game Livo Ink</h1>

      {/* IMAGE SLIDER */}
      <div className="slider">
        <img src={images[index]} className="mainImg" />
      </div>

      {/* 6 IMAGES */}
      <div className="grid">
        {images.map((img, i) => (
          <img key={i} src={img} className="img" />
        ))}
      </div>

      {/* DOWNLOAD BUTTON */}
      <a href="/apk/game.apk" download className="btn">
        ⬇ DOWNLOAD GAME
      </a>

      {/* VIDEOS */}
      <div className="videos">
        <video controls src="/videos/1.mp4" />
      </div>

      {/* DESCRIPTION */}
      <div className="desc">
        <h2>About Game</h2>
        <p>Casino style gaming landing page with modern UI & animation.</p>
      </div>

    </main>
  );
}
