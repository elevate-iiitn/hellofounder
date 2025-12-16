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
      className="
        relative w-full max-w-[360px] mx-auto
        bg-gradient-to-br from-[#0b0b0c] via-[#0f2f2b] to-[#0b0b0c]
        rounded-2xl overflow-hidden
        sm:max-w-[380px]
        md:max-w-[420px]
      "
    >
      {/* ambient glow */}
      <div
        className="absolute inset-0
                   bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.22),transparent_60%)]"
      />

      <div
        className="
          relative z-10
          px-5 py-8
          text-center text-white
          sm:px-8 sm:py-10
          md:px-10 md:py-12
        "
      >
        {/* label */}
        <p
          className="
            text-[11px] tracking-widest uppercase
            text-teal-300 mb-3
          "
        >
          {label}
        </p>

        {/* headline */}
        <h3
          className="
            text-xl font-semibold leading-snug
            mb-3
            sm:text-2xl
            md:text-3xl
          "
        >
          {title} <span className="text-teal-400 italic">{highlight}</span>
        </h3>

        {/* description */}
        <p
          className="
            text-sm leading-relaxed text-gray-300
            mb-6
            sm:text-base sm:mb-8
          "
        >
          {description}
        </p>

        {/* price */}
        <div
          className="
            flex items-end justify-center gap-2
            mb-8
            sm:gap-3 sm:mb-10
          "
        >
          <span
            className="
              text-4xl font-bold tracking-tight
              text-teal-300
              sm:text-5xl
            "
          >
            {price}
          </span>
          <span
            className="
              text-xs text-gray-400 line-through mb-1
              sm:text-sm
            "
          >
            {originalPrice}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={ctaLink}
          className="
            inline-flex items-center justify-center
            w-full py-3.5 rounded-full
            font-medium text-black
            bg-teal-400
            transition-all duration-300
            shadow-[0_8px_30px_rgba(0,229,255,0.35)]
            active:scale-[0.98]
            sm:py-4
            hover:bg-teal-500
            hover:shadow-[0_12px_45px_rgba(0,229,255,0.5)]
          "
        >
          {ctaText} →
        </Link>

        {/* footer */}
        <p
          className="
            mt-5 text-[11px] leading-relaxed
            text-gray-400
            sm:mt-6 sm:text-xs
          "
        >
          {footerText}
        </p>
      </div>
    </div>
  );
}
