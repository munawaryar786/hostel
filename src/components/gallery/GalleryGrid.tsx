"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import { HotelImage } from "@/components/ui/HotelImage";
import { cn } from "@/lib/utils";

const categories = ["All", "Exterior", "Reception", "Rooms", "Bathroom", "Corridors"];

export function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);
  const items = useMemo(() => galleryItems.filter((item) => active === "All" || item.category === active), [active]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "focus-ring min-h-11 rounded-md border px-4 py-2 text-sm font-bold transition",
              active === category ? "border-accent bg-accent text-primary" : "border-slate-300 bg-white text-secondary hover:border-accent"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid auto-rows-[230px] gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelected(item)}
            className={cn("focus-ring group relative overflow-hidden rounded-lg text-left", index % 5 === 0 && "md:row-span-2")}
          >
            <HotelImage src={item.src} alt={item.alt} />
            <span className="absolute inset-0 bg-primary/0 transition group-hover:bg-primary/40" />
            <span className="absolute bottom-4 left-4 rounded-md bg-white/90 px-3 py-2 text-sm font-bold text-primary">{item.title}</span>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              aria-label="Close gallery image"
              className="focus-ring absolute right-4 top-4 rounded-md bg-white px-4 py-2 font-bold text-primary"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative h-[76vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white"
              onClick={(event) => event.stopPropagation()}
            >
              <HotelImage src={selected.src} alt={selected.alt} sizes="90vw" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
