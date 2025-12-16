"use client";

import { Calendar } from "@/components/ui/calendar";

export default function ReadOnlyRangeCalendar({ from, to }) {
  return (
    <Calendar
      mode="range"
      selected={{ from, to }}
      defaultMonth={from}

      /* 🔒 LOCK USER EDITS */
      onSelect={() => null}

      showOutsideDays={false}

      modifiers={{
        completed: (date) =>
          date >= from &&
          date <= to &&
          date < new Date(),
      }}
      modifiersClassNames={{
        completed: "bg-emerald-500/25 text-emerald-300",
      }}

      className="
        w-full
        rounded-xl
        border border-white/10
        bg-black/70
        text-white
      "
    />
  );
}
