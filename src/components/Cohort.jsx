"use client";

import { useEffect, useRef } from "react";
import { Calendar, Users, Rocket } from "lucide-react";

/* ================= PIXEL ENGINE ================= */

class Pixel {
  constructor(ctx, x, y, color, speed, delay) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.color = color;

    this.size = 0;
    this.min = 0;
    this.max = Math.random() * 1.6 + 0.6;

    this.speed = speed;
    this.delay = delay;
    this.counter = 0;

    this.idle = true;
  }

  draw() {
    if (this.size <= 0) return;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  appear() {
    this.idle = false;

    if (this.counter < this.delay) {
      this.counter++;
      return;
    }

    if (this.size < this.max) {
      this.size += this.speed;
    } else {
      this.idle = true;
    }

    this.draw();
  }

  disappear() {
    this.counter = 0;

    if (this.size > 0) {
      this.size -= this.speed;
      if (this.size < 0) this.size = 0;
      this.draw();
      this.idle = false;
    } else {
      this.idle = true;
    }
  }
}

/* ================= COMPONENT ================= */

export default function Cohort() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const rafRef = useRef(null);

  /* ---------- INIT PIXELS ---------- */
  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    const ctx = canvasRef.current.getContext("2d");

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const colors = ["#00dfc4", "#00e7ff", "#0f172a"];
    const gap = 10;
    const speed = 0.15;

    const pixels = [];

    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        const dx = x - width / 2;
        const dy = y - height / 2;
        const delay = Math.sqrt(dx * dx + dy * dy) * 0.15;

        pixels.push(
          new Pixel(
            ctx,
            x,
            y,
            colors[Math.floor(Math.random() * colors.length)],
            speed,
            delay
          )
        );
      }
    }

    pixelsRef.current = pixels;
  };

  /* ---------- ANIMATION LOOP ---------- */
  const animate = (mode) => {
    cancelAnimationFrame(rafRef.current);

    for (const p of pixelsRef.current) {
      p.counter = 0;
      p.idle = false;
    }

    const frame = () => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      let allIdle = true;

      for (const p of pixelsRef.current) {
        p[mode]();
        if (!p.idle) allIdle = false;
      }

      if (!allIdle) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(frame);
  };

  /* ---------- LIFECYCLE ---------- */
  useEffect(() => {
    initPixels();
    const ro = new ResizeObserver(initPixels);
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ================= RENDER ================= */

  return (
    <section className="px-4 md:px-20 my-20">
      <div
        ref={containerRef}
        onMouseEnter={() => animate("appear")}
        onMouseLeave={() => animate("disappear")}
        className="
          relative isolate overflow-hidden rounded-3xl
          border border-white/10 bg-[#0b0b0c]
          p-6 md:p-10
        "
      >
        {/* CANVAS */}
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Founding cohort starts February 15, 2026
          </h2>

          <div className="mt-8 space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-teal-400" />
              <span>45 Days Online Cohort</span>
            </div>

            <div className="flex items-center gap-3">
              <Users size={18} className="text-orange-400" />
              <span>Limited to 25 founders</span>
            </div>

            <div className="flex items-center gap-3">
              <Rocket size={18} className="text-teal-400" />
              <span>Access to Pitch Day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
