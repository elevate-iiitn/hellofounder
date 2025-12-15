"use client";

import MentorCard from "@/components/ui/MentorCard";

const mentors = [
  { name: "Vaani Chugh", role: "Founder", photo: "/images/xyz.png" },
  { name: "John Doe", role: "Ex-EIR", photo: "/images/xyz.png" },
  { name: "Aditi Sharma", role: "Chief of Staff", photo: "/images/xyz.png" },
  { name: "Rahul Mehta", role: "Growth Lead", photo: "/images/xyz.png" },
  { name: "Sneha Kapoor", role: "Operator", photo: "/images/xyz.png" },
];

export default function MentorsSection() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#000",
        padding: "40px 0",
      }}
    >
      {/* INLINE CSS (KEYFRAMES + HOVER PAUSE) */}
      <style>{`
        @keyframes marqueeRTL {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marqueeRTL 20s linear infinite;
        }
        .wrapper:hover .track {
          animation-play-state: paused;
        }
      `}</style>

      {/* WRAPPER */}
      <div className="wrapper">
        {/* MOVING TRACK */}
        <div className="track">
          {[...mentors, ...mentors].map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}