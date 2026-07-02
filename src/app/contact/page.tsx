import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
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
  "Contact",
  "Contact New Capital Hotel Lahore for room inquiries, location details, and reception support."
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Reception"
        subtitle="Call, WhatsApp, or send a message to inquire about room availability and guest details."
        image="/images/hotel/reception-view.jpg"
      />
      <AnimatedSection className="bg-light">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            <Card icon="Phone" title="Call Reception" text={site.phone} href={`tel:${site.phone}`} />
            <Card icon="MessageCircle" title="WhatsApp" text={site.whatsapp} href={whatsappUrl("Hello New Capital Hotel, I want to inquire about room availability.")} />
            <Card icon="MapPin" title="Address" text={site.address} href={site.mapUrl} />
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-primary">Business Hours</h2>
              <p className="mt-2 text-muted">24-hour front desk support for guest inquiries and check-in assistance.</p>
            </div>
          </div>
          <ContactForm />
        </Container>
      </AnimatedSection>
      <section className="bg-white py-14">
        <Container className="grid gap-6 lg:grid-cols-2">
          <MapEmbed />
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-primary">Hotel Policies</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              {site.policies.map((policy) => (
                <li key={policy}>- {policy}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}

function Card({ icon, title, text, href }: { icon: string; title: string; text: string; href: string }) {
  return (
    <a href={href} className="focus-ring rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-soft">
      <Icon name={icon} className="h-7 w-7 text-accent" />
      <h2 className="mt-4 text-xl font-bold text-primary">{title}</h2>
      <p className="mt-2 leading-7 text-muted">{text}</p>
    </a>
  );
}
