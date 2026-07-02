import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Location",
  "Find New Capital Hotel on 104 McLeod Road, Qila Gujjar Singh, Lahore near Lahore Railway Station."
);

const landmarks = ["Lahore Railway Station", "Walled City Lahore", "Lahore Zoo", "Lakshmi Chowk", "Brandreth Road", "Local restaurants and markets"];
const tips = ["Confirm your arrival time with reception.", "Ask about parking before arrival.", "Use the McLeod Road address for ride-hailing apps.", "Keep a valid ID available for check-in."];

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="Stay Near Lahore Railway Station"
        subtitle="New Capital Hotel is located on McLeod Road in Qila Gujjar Singh, close to transport points, markets, food spots, and central Lahore landmarks."
        image="/images/hotel/exterior-building.jpg"
      />
      <AnimatedSection className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <Icon name="MapPin" className="h-8 w-8 text-accent" />
            <h2 className="mt-4 text-2xl font-bold text-primary">Address</h2>
            <p className="mt-3 leading-7 text-muted">{site.address}</p>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={site.mapUrl}>Get Directions</ButtonLink>
              <ButtonLink href="tel:+923001234567" variant="outline">
                Call Reception
              </ButtonLink>
              <ButtonLink href={whatsappUrl("Hello New Capital Hotel, I want to inquire about room availability.")} variant="outline">
                WhatsApp
              </ButtonLink>
            </div>
          </div>
          <MapEmbed />
        </Container>
      </AnimatedSection>
      <AnimatedSection className="bg-light">
        <Container className="grid gap-8 lg:grid-cols-3">
          <Info title="Nearby Landmarks" items={landmarks} />
          <Info title="Transport Access" items={["Railway station access nearby", "Local transport points nearby", "Ride-hailing pickup from McLeod Road"]} />
          <Info title="Arrival Tips" items={tips} />
        </Container>
      </AnimatedSection>
    </>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-bold text-primary">{title}</h2>
      <ul className="mt-4 grid gap-3 text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <Icon name="CheckCircle2" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
