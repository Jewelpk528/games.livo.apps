"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main style={styles.main}>
      
      <h1 style={styles.title}>🎮 Game Livo Ink</h1>

      {/* HERO IMAGE */}
      <div style={styles.heroBox}>
        <img src={images[index]} style={styles.heroImg} />
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {images.map((img, i) => (
          <img key={i} src={img} style={styles.img} />
        ))}
      </div>

      {/* DOWNLOAD */}
      <a href="/apk/game.apk" style={styles.btn}>
        ⬇ Download Game
      </a>

      {/* VIDEO */}
      <div style={styles.videoBox}>
        <video src="/videos/1.mp4" controls style={styles.video} />
      </div>

      {/* DESCRIPTION */}
      <p style={styles.text}>
        Modern gaming landing page built with Next.js. Smooth UI, fast loading,
        Vercel optimized.
      </p>

    </main>
  );
}

const styles = {
  main: {
    padding: 20,
    textAlign: "center",
    background: "#0b0b1a",
    color: "white",
    minHeight: "100vh",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  heroBox: {
    marginBottom: 20,
  },
  heroImg: {
    width: "90%",
    maxWidth: 500,
    borderRadius: 10,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
    margin: "20px auto",
    maxWidth: 500,
  },
  img: {
    width: "100%",
    borderRadius: 8,
  },
  btn: {
    display: "inline-block",
    margin: 20,
    padding: "10px 20px",
    background: "#00ffcc",
    color: "#000",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: "bold",
  },
  videoBox: {
    marginTop: 20,
  },
  video: {
    width: "90%",
    maxWidth: 500,
    borderRadius: 10,
  },
  text: {
    marginTop: 20,
    opacity: 0.8,
  },
};
