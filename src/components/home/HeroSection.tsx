"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";

const quickInfo = [
  ["MapPin", "Central Lahore Location"],
  ["Users", "Family Rooms"],
  ["Wifi", "Free Wi-Fi"],
  ["Clock", "24/7 Front Desk"]
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <HotelImage src="/images/hotel/exterior-building.jpg" alt="New Capital Hotel exterior on McLeod Road Lahore" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/35" />
      </div>
      <Container className="relative flex min-h-[760px] items-center pb-28 pt-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-accent/40 bg-white/10 px-4 py-2 text-sm font-semibold text-accent">
            Budget & Family Hotel in Central Lahore
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">
            Comfortable Budget Stay Near Lahore Railway Station
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            New Capital Hotel offers affordable rooms, family accommodation, air-conditioned comfort, free Wi-Fi, and 24/7 front desk support on McLeod Road, Lahore.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/booking">Book Your Stay</ButtonLink>
            <ButtonLink href="tel:+923001234567" variant="light">
              Call Reception
            </ButtonLink>
            <ButtonLink href="/location" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary">
              Get Directions
            </ButtonLink>
          </div>
          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickInfo.map(([icon, label]) => (
              <div key={label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <Icon name={icon} className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
