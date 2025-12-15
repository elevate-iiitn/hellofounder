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
  "Fundraising Basics",
];

export default function InfiniteTagMarquee() {
  const trackRef = useRef(null);
  const firstRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current || !firstRef.current) return;

    const setWidthVar = () => {
      const w = firstRef.current.getBoundingClientRect().width;
      trackRef.current.style.setProperty(
        "--marquee-width",
        `${Math.round(w)}px`
      );
    };

    setWidthVar();

    let t;
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

  const colorClasses = [
    "bg-teal-400/10 text-teal-300 border border-teal-400/40",
    "bg-cyan-400/10 text-cyan-300 border border-cyan-400/40",
    "bg-violet-400/10 text-violet-300 border border-violet-400/40",
    "bg-orange-400/10 text-orange-300 border border-orange-400/40",
  ];

  const GAP_CLAMP = "clamp(0.6rem, 2.5vw, 1.25rem)";

  return (
    <div className="marquee-outer overflow-hidden">
      <div
        ref={trackRef}
        className="marquee-inner-js flex"
        style={{ "--marquee-duration": "18s" }}
      >
        {/* FIRST COPY (measured) */}
        <div
          ref={firstRef}
          className="marquee-first inline-flex items-center whitespace-nowrap"
          style={{ gap: GAP_CLAMP }}
        >
          {tags.map((t, i) => (
            <div
              key={i}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap ${colorClasses[i % colorClasses.length]}`}
              style={
                i === tags.length - 1
                  ? { marginRight: GAP_CLAMP }
                  : undefined
              }
            >
              {t}
            </div>
          ))}
        </div>

        {/* SECOND COPY (visual duplicate) */}
        <div
          className="marquee-second inline-flex items-center whitespace-nowrap"
          aria-hidden="true"
          style={{ gap: GAP_CLAMP }}
        >
          {tags.map((t, i) => (
            <div
              key={`copy-${i}`}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap ${colorClasses[i % colorClasses.length]}`}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
