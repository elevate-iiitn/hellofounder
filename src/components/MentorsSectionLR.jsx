"use client";

import MentorCard from "@/components/ui/MentorCard";

const mentors = [
  { photo: "/images/krishna.png" },
  { photo: "/images/vednidhi.png" },
  { photo: "/images/kunal.png" },
  { photo: "/images/vipul.png" },
];

export default function MentorsSectionLR() {
  return (
    <div style={{ width: "100%", overflow: "hidden", background: "#000", padding: "40px 0" }}>
      <style>{`
        @keyframes marqueeLR {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .track-lr {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marqueeLR 20s linear infinite;
        }
        .wrapper:hover .track-lr {
          animation-play-state: paused;
        }
      `}</style>

      <div className="wrapper">
        <div className="track-lr">
          {[...mentors, ...mentors].map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}
