"use client";

import MentorCard from "@/components/ui/MentorCard";

const mentors = [
  { photo: "/images/nikhil_aparajit.png" },
  { photo: "/images/darika_jain.png" },
  { photo: "/images/mansukh_singh.png" },
  { photo: "/images/prabal_monga.png" },
];

export default function MentorsSectionRL() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#000",
        padding: "40px 0",
      }}
    >
      <style>{`
        @keyframes marqueeRL {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .track-rl {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marqueeRL 20s linear infinite;
        }
        .wrapper:hover .track-rl {
          animation-play-state: paused;
        }
      `}</style>

      <div className="wrapper">
        <div className="track-rl">
          {[...mentors, ...mentors].map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}
