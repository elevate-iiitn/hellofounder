"use client";

import ReadOnlyRangeCalendar from "@/components/ReadOnlyRangeCalendar";

export default function CalendarModal({ open, onClose, from, to }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-[90vw] max-w-sm rounded-2xl border border-white/10 bg-black p-4 shadow-xl">
        <ReadOnlyRangeCalendar from={from} to={to} />

        <button
          onClick={onClose}
          className="mt-4 w-full rounded-lg bg-teal-500 py-2 text-sm font-semibold text-black"
        >
          Close
        </button>
      </div>
    </div>
  );
}
