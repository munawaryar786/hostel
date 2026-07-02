import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "FAQ",
  "Frequently asked questions about booking, rooms, facilities, location, parking, Wi-Fi, and policies at Al Madina Tul Munawara Hotel Lahore."
);

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Helpful answers about booking, rooms, facilities, location, parking, family stays, Wi-Fi, air conditioning, and policies."
        image="/images/hotel/lobby-stairs-elevator.jpg"
      />
      <AnimatedSection className="bg-light">
        <Container>
          <SectionHeading title="Before You Book" subtitle="Reception should confirm exact rates, room availability, breakfast, parking, and lift access." />
          <div className="mx-auto grid max-w-4xl gap-4">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-base font-bold text-primary">
                  <span className="mr-2 text-accent">{item.category}</span>
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
