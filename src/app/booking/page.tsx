import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/BookingForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Booking",
  "Send a demo booking inquiry to New Capital Hotel Lahore for room availability and current rates."
);

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking Inquiry"
        title="Send a Room Availability Inquiry"
        subtitle="This frontend-only demo form validates guest details and shows a success message. Reception confirms final rates and availability."
        image="/images/hotel/reception-view.jpg"
      />
      <AnimatedSection className="bg-light">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <BookingForm />
          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <Icon name="MessageCircle" className="h-8 w-8 text-accent" />
            <h2 className="mt-4 text-2xl font-bold text-primary">Prefer WhatsApp?</h2>
            <p className="mt-3 leading-7 text-muted">
              Use the prefilled message to ask reception about room availability, rates, parking support, and arrival time.
            </p>
            <ButtonLink href={whatsappUrl("Hello New Capital Hotel, I want to inquire about room availability.")} className="mt-6">
              WhatsApp Booking Inquiry
            </ButtonLink>
          </aside>
        </Container>
      </AnimatedSection>
    </>
  );
}
