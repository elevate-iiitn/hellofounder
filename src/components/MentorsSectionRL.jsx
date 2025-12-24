"use client";

import MentorCard from "@/components/ui/MentorCard";

const mentors = [
  { photo: "/images/krishna_thakur1.png" },
  { photo: "/images/vednidhi_chhabbra1.png" },
  { photo: "/images/samiksha_kedia1.png" },
  { photo: "/images/vipul_ghai1.png" },
];

export default function MentorsSectionRL() {
  return (
    <div className="w-full overflow-hidden bg-black py-2 sm:py-4">
      <style>{`
  @keyframes marqueeRL {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .track-rl {
    display: flex;
    gap: 6px;              /* mobile */
    width: max-content;
    animation: marqueeRL 20s linear infinite;
  }

  @media (min-width: 640px) {
    .track-rl {
      gap: 12px;
    }
  }

  @media (min-width: 1024px) {
    .track-rl {
      gap: 24px;
    }
  }

  .wrapper:hover .track-rl {
    animation-play-state: paused;
  }
`}</style>

      <div className="wrapper">
        <div className="track-rl">
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
