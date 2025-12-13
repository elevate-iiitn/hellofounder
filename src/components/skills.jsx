"use client";

import React, { useEffect, useRef } from "react";

const tags = [
  "Idea Validation",
  "User Research",
  "MVP Building (No-Code)",
  "Product Thinking",
  "Business Model Design",
  "Zero-Budget Marketing",
  "User Acquisition",
  "Sales for Founders",
  "Storytelling & Pitching",
  "GTM Strategy",
  "Traction & Metrics",
  "Fundraising Basics"
];

export default function InfiniteTagMarquee() {
  const trackRef = useRef(null);
  const firstRef = useRef(null);

  // measure width of the first copy and set CSS var on the track wrapper
  useEffect(() => {
    if (!trackRef.current || !firstRef.current) return;

    const setWidthVar = () => {
      const w = firstRef.current.getBoundingClientRect().width;
      // set the exact pixel width used by the CSS animation
      trackRef.current.style.setProperty("--marquee-width", `${Math.round(w)}px`);
    };

    setWidthVar();

    // remeasure on resize (debounced-ish)
    let t = null;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(setWidthVar, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="marquee-outer" aria-hidden={false}>
      <div ref={trackRef} className="marquee-inner-js" style={{ ["--marquee-duration"]: "18s" }}>
        {/* first copy (measured) */}
        <div className="marquee-first" ref={firstRef}>
          {tags.map((t, i) => {
            const colorClasses = [
              "bg-teal-400/10 text-teal-300 border border-teal-400/40",
              "bg-cyan-400/10 text-cyan-300 border border-cyan-400/40",
              "bg-violet-400/10 text-violet-300 border border-violet-400/40",
              "bg-orange-400/10 text-orange-300 border border-orange-400/40",
            ];

            return (
              <div
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap
                            transition-colors duration-300
                            ${colorClasses[i % colorClasses.length]}`}
              >
                {t}
              </div>
            );
          })}
        </div>

        {/* second copy (visual duplicate) */}
        <div className="marquee-second" aria-hidden="true">
          {tags.map((t, i) => {
            const colorClasses = [
              "bg-teal-400/10 text-teal-300 border border-teal-400/40",
              "bg-cyan-400/10 text-cyan-300 border border-cyan-400/40",
              "bg-violet-400/10 text-violet-300 border border-violet-400/40",
              "bg-orange-400/10 text-orange-300 border border-orange-400/40",
            ];

            return (
              <div
                key={`copy-${i}`}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap
                            transition-colors duration-300
                            ${colorClasses[i % colorClasses.length]}`}
              >
                {t}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
