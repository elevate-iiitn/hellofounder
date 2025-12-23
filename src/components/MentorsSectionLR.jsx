"use client";

import MentorCard from "@/components/ui/MentorCard";

const mentors = [
  { photo: "/images/nikhil_aparajit1.png" },
  { photo: "/images/darika_jain1.png" },
  { photo: "/images/prabal_monga1.png" },
  { photo: "/images/mansukh_singh1.png" },
];

export default function MentorsSectionLR() {
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
        @keyframes marqueeLR {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .track-lr {
          display: flex;
          gap: 12px;
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
           <div
  key={index}
  className="scale-[0.75] sm:scale-90 md:scale-100 origin-center"
>
  <MentorCard {...mentor} />
</div>

          ))}
        </div>
      </div>
    </div>
  );
}
