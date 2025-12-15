"use client";

import Link from "next/link";

export default function PricingCard({
  label = "Haven’t applied?",
  title = "Start your",
  highlight = "Founder’s Journey",
  description = "Get exclusive access to the 45-day online cohort at just",
  price = "₹4,999",
  originalPrice = "₹7,000",
  ctaText = "Apply to cohort",
  ctaLink = "https://your-typeform-or-googleform-link.com",
  footerText = "Not sure? Schedule a call with our team to know more.",
}) {
  return (
    <div
      className="relative w-full md:w-[380px] lg:w-[420px]
                 flex items-center justify-center
                 bg-gradient-to-br from-[#0b0b0c] via-[#0f2f2b] to-[#0b0b0c]
                 rounded-3xl overflow-hidden"
    >
      {/* subtle glow */}
      <div className="absolute inset-0 
                      bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.22),transparent_55%)]" />

      <div className="relative z-10 px-8 sm:px-10 py-12 text-center text-white">

        {/* small label */}
        <p className="text-xs tracking-widest text-gray-300 mb-4 uppercase">
          {label}
        </p>

        {/* headline */}
        <h3 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
          {title}{" "}
          <span className="text-teal-400 italic">{highlight}</span>
        </h3>

        {/* subtext */}
        <p className="text-sm sm:text-base text-gray-300 mb-8">
          {description}
        </p>

        {/* price */}
        <div className="flex items-end justify-center gap-3 mb-10">
          <span className="text-4xl sm:text-5xl font-bold text-teal-300">
            {price}
          </span>
          <span className="text-sm sm:text-base text-gray-400 line-through mb-1">
            {originalPrice}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={ctaLink}
          className="inline-flex items-center justify-center
                     w-full py-4 rounded-full
                     font-semibold text-white
                     bg-teal-500 hover:bg-teal-600
                     transition-all duration-300
                     shadow-[0_0_30px_rgba(0,229,255,0.35)]
                     hover:scale-[1.03]"
        >
          {ctaText}
        </Link>

        {/* footnote */}
        <p className="mt-6 text-xs text-gray-400">
          {footerText}
        </p>
      </div>
    </div>
  );
}
