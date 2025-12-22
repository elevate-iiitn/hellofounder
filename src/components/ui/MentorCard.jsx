import Image from "next/image";
import { useState } from "react";

export default function MentorCard({ photo }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "300px",
        height: "336px",
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#0c0b16",
        border: "1px solid rgba(255,255,255,0.14)",
        flexShrink: 0,

        /* 🔥 Hover animation */
        transform: hover
          ? "translateY(-8px) scale(1.02)"
          : "translateY(0) scale(1)",
        boxShadow: hover
          ? "0 20px 40px rgba(0,0,0,0.55)"
          : "0 8px 20px rgba(0,0,0,0.35)",
        transition: "all 0.35s ease",
      }}
    >
      {/* IMAGE — FULL CARD */}
      <Image
        src={photo}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
          transition: "transform 0.35s ease",
          transform: hover ? "scale(1.05)" : "scale(1)",
        }}
        priority
      />

      {/* GRID OVERLAY — VERY LIGHT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(180,160,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,160,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "22px 22px",
          opacity: hover ? 0.25 : 0.18, // slightly stronger on hover
          transition: "opacity 0.35s ease",
          zIndex: 2,
        }}
      />

      {/* TEXT */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          right: "20px",
          color: "#ffffff",
          zIndex: 3,
          transform: hover ? "translateY(-4px)" : "translateY(0)",
          transition: "transform 0.35s ease",
        }}
      >
        {/* <div
          style={{
            fontSize: "13px",
            opacity: 0.8,
            marginBottom: "6px",
            letterSpacing: "0.3px",
          }}
        >
          {role}
        </div>

        <div
          style={{
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          {name}
        </div> */}
      </div>
    </div>
  );
}
