"use client";

import MentorCard from "@/components/ui/MentorCard";

const mentors = [
  { photo: "/images/nikhil_aparajit1.png" },
  { photo: "/images/darika_jain1.png" },
  { photo: "/images/prabal_monga1.png" },
  { photo: "/images/mansukh_singh1.png" },
  { photo: "/images/kunal_jiwani1.png" },
];

export default function MentorsSectionLR() {
  return (
    <div className="w-full overflow-hidden bg-black py-2 sm:py-4">
      <style>{`
  @keyframes marqueeLR {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }

  .track-lr {
    display: flex;
    gap: 6px;              /* mobile */
    width: max-content;
    animation: marqueeLR 20s linear infinite;
  }

  @media (min-width: 640px) {
    .track-lr {
      gap: 12px;           /* tablet */
    }
  }

  @media (min-width: 1024px) {
    .track-lr {
      gap: 24px;           /* desktop */
    }
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
              className="scale-[0.95] sm:scale-90 md:scale-100 origin-center"
            >
              <MentorCard {...mentor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
