import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/forms/BookingForm";
import { RelatedRooms } from "@/components/rooms/RelatedRooms";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { rooms } from "@/data/rooms";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = rooms.find((item) => item.slug === params.slug);
  return pageMetadata(room?.title ?? "Room", room?.description ?? "Room details at Al Madina Tul Munawara Hotel Lahore.");
}

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = rooms.find((item) => item.slug === params.slug);
  if (!room) notFound();

  return (
    <>
      <section className="bg-primary py-16 text-white">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-accent">Inquiry Only</span>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{room.title}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-200">{room.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/booking">Book Now</ButtonLink>
              <ButtonLink href="/contact" variant="light">
                Contact Reception
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
            <HotelImage src={room.image} alt={room.title} priority />
          </div>
        </Container>
      </section>
      <AnimatedSection className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading centered={false} title="Room Overview" subtitle={room.subtitle} />
            <div className="grid gap-4 sm:grid-cols-2">
              <Info icon="Users" label="Capacity" value={room.capacity} />
              <Info icon="BedDouble" label="Bed Type" value={room.bedType} />
              <Info icon="Home" label="Size" value={room.size} />
              <Info icon="CheckCircle2" label="Price" value={room.priceLabel} />
            </div>
            <h2 className="mt-10 text-2xl font-bold text-primary">Amenities</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {room.amenities.map((item) => (
                <span key={item} className="rounded-full bg-cream px-4 py-2 text-sm font-bold text-secondary">
                  {item}
                </span>
              ))}
            </div>
            <h2 className="mt-10 text-2xl font-bold text-primary">Suitable For</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              {room.recommendedFor.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-bold text-primary">Policies</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              {room.policies.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <BookingForm compact />
        </Container>
      </AnimatedSection>
      <AnimatedSection className="bg-light">
        <Container>
          <SectionHeading title="Related Rooms" />
          <RelatedRooms currentSlug={room.slug} />
        </Container>
      </AnimatedSection>
    </>
  );
}

function Info({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 p-5">
      <Icon name={icon} className="h-6 w-6 text-accent" />
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-muted">{label}</p>
      <p className="mt-1 font-bold text-primary">{value}</p>
    </div>
  );
}
