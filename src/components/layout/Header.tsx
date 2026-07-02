"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useState } from "react";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-white">
        <Container className="flex min-h-9 items-center justify-between gap-4 py-2 text-xs sm:text-sm">
          <span className="flex items-center gap-2">
            <Icon name="MapPin" className="h-4 w-4 text-accent" />
            {site.address}
          </span>
          <span className="hidden items-center gap-2 sm:flex">
            <Icon name="Clock" className="h-4 w-4 text-accent" />
            24/7 front desk support
          </span>
        </Container>
      </div>
      <motion.div
        style={{
          backgroundColor: scrollYProgress.get() > 0 ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.86)"
        }}
        className="border-b border-slate-200/80 bg-white/90 backdrop-blur"
      >
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="focus-ring rounded-md" aria-label="Al Madina Tul Munawara Hotel home">
            <span className="block text-lg font-bold text-primary">Al Madina Tul Munawara Hotel</span>
            <span className="block text-xs font-medium text-muted">Data Darbar Bazar, Lahore</span>
          </Link>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link focus-ring rounded-sm text-sm font-semibold text-secondary">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="/booking" className="px-4">
              Book Now
            </ButtonLink>
          </div>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white lg:hidden"
          >
            <Icon name={open ? "X" : "Menu"} className="h-5 w-5" />
          </button>
        </Container>
      </motion.div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-slate-200 bg-white shadow-soft lg:hidden"
          >
            <Container className="grid gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn("focus-ring rounded-md px-3 py-3 text-base font-semibold text-secondary hover:bg-light")}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/booking" onClick={() => setOpen(false)} className="mt-2">
                Book Now
              </ButtonLink>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
