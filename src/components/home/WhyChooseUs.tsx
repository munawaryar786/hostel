"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: "MapPin",
    title: "Central Lahore Location",
    description:
      "Located on McLeod Road near Lahore Railway Station, making it convenient for travelers, families, and business guests."
  },
  {
    icon: "CheckCircle2",
    title: "Budget-Friendly Stay",
    description: "Comfortable accommodation with essential facilities at affordable rates for short and long stays."
  },
  {
    icon: "Users",
    title: "Family Rooms Available",
    description: "Suitable room options for families, groups, and guests who need spacious accommodation."
  },
  {
    icon: "Headphones",
    title: "24/7 Front Desk Support",
    description: "Reception support available day and night for check-in assistance and guest inquiries."
  },
  {
    icon: "Snowflake",
    title: "Air-Conditioned Rooms",
    description: "Rooms include air conditioning for a comfortable stay in Lahore weather."
  },
  {
    icon: "Wifi",
    title: "Free Wi-Fi Access",
    description: "Guests can stay connected with free Wi-Fi during their stay."
  },
  {
    icon: "Bath",
    title: "Private Bathrooms",
    description: "Rooms include attached bathroom facilities for privacy and convenience."
  },
  {
    icon: "Utensils",
    title: "Easy Access to Markets & Food",
    description: "Close to local food spots, markets, transport points, and central Lahore landmarks."
  },
  {
    icon: "Car",
    title: "Parking Support",
    description: "Parking support is available subject to space and availability. Guests should confirm before arrival."
  },
  {
    icon: "CalendarCheck",
    title: "Quick Booking Inquiry",
    description: "Guests can inquire through the website form, call button, or WhatsApp booking button."
  }
];

export function WhyChooseUs({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={cn("bg-white py-16 sm:py-20", className)}>
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose New Capital Hotel?"
          subtitle="A practical, affordable, and centrally located stay option for families, business travelers, and short-stay guests in Lahore."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.28), ease: "easeOut" }}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent/70 hover:shadow-lift"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-cream text-accent transition duration-200 group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-primary">
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/booking">Book Your Stay</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact Reception
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
