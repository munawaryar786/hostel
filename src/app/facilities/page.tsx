import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { amenities } from "@/data/amenities";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Facilities",
  "Facilities at New Capital Hotel Lahore include Wi-Fi, air-conditioned rooms, private bathrooms, front desk support, and family rooms."
);

const sections = [
  {
    title: "Room Comfort",
    image: "/images/hotel/room-amenities-tv.jpg",
    text: "Air conditioning, flat-screen TV, Wi-Fi, and practical room layouts support short stays, family visits, and business travel."
  },
  {
    title: "Bathroom Facilities",
    image: "/images/hotel/bathroom.jpg",
    text: "Rooms include attached bathroom facilities for privacy and convenience. Exact room layouts should be confirmed before booking."
  },
  {
    title: "Shared Services",
    image: "/images/hotel/hotel-corridor.jpg",
    text: "Reception can assist with guest inquiries, luggage support, laundry assistance availability, and local arrival guidance."
  }
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Essential Hotel Facilities for a Practical Stay"
        subtitle="New Capital Hotel focuses on useful guest comforts, central access, and simple support for families and travelers."
        image="/images/hotel/hotel-corridor.jpg"
      />
      <AnimatedSection className="bg-light">
        <Container>
          <SectionHeading title="Facilities at a Glance" subtitle="Confirm exact room availability, breakfast, parking, and lift access before arrival." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-soft">
                <Icon name={item.icon} className="h-6 w-6 text-accent" />
                <h2 className="mt-4 font-bold text-primary">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </AnimatedSection>
      <AnimatedSection className="bg-white">
        <Container className="grid gap-6 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <HotelImage src={section.image} alt={section.title} />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-primary">{section.title}</h2>
                <p className="mt-3 leading-7 text-muted">{section.text}</p>
              </div>
            </article>
          ))}
        </Container>
      </AnimatedSection>
      <section className="bg-cream py-14">
        <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary">Parking and Guest Notes</h2>
            <p className="mt-2 max-w-3xl leading-7 text-muted">
              Parking support is available subject to space and availability. Guests should confirm parking, rates, room availability, breakfast, and lift access before arrival.
            </p>
          </div>
          <ButtonLink href="/booking">Send Booking Inquiry</ButtonLink>
        </Container>
      </section>
    </>
  );
}
