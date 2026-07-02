"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-light py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Guest Reviews"
          title="Guest Experience Highlights"
          subtitle="Review-style highlights for the demo website. Replace these with verified guest reviews when official reviews are available."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.22), ease: "easeOut" }}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent/70 hover:shadow-lift"
            >
              <div className="flex gap-1 text-accent" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Icon key={starIndex} name="Star" className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">"{item.review}"</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <h3 className="font-bold text-primary">{item.name}</h3>
                <p className="text-sm text-muted">{item.context}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
