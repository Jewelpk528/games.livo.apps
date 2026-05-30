"use client";

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
];

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "30px" }}>

      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        🎮 Game Livo Ink
      </h1>

      {/* 3 IMAGES */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            style={{ width: "200px", borderRadius: "10px" }}
          />
        ))}
      </div>

      {/* DOWNLOAD BUTTON */}
      <div style={{ marginTop: "30px" }}>
        <a href="/apk/game.apk" download>
          <button
            style={{
              padding: "15px 25px",
              fontSize: "18px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ⬇ Download Game
          </button>
        </a>
      </div>

    </main>
  );
}
