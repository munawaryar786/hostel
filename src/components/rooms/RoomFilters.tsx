"use client";

import { useMemo, useState } from "react";
import { rooms } from "@/data/rooms";
import { RoomCard } from "@/components/rooms/RoomCard";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All Rooms", value: "all" },
  { label: "Double Rooms", value: "double" },
  { label: "Triple Rooms", value: "triple" },
  { label: "Family Rooms", value: "family" },
  { label: "Multi-Bed Rooms", value: "multi" }
];

export function RoomFilters() {
  const [active, setActive] = useState("all");
  const filtered = useMemo(() => rooms.filter((room) => active === "all" || room.category === active), [active]);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Room filters">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            className={cn(
              "focus-ring min-h-11 rounded-md border px-4 py-2 text-sm font-bold transition",
              active === filter.value ? "border-accent bg-accent text-primary" : "border-slate-300 bg-white text-secondary hover:border-accent"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </>
  );
}
