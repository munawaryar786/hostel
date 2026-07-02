import type { Metadata } from "next";
import { RoomFilters } from "@/components/rooms/RoomFilters";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Rooms",
  "Explore double, triple, family, and multi-bed room options at Al Madina Tul Munawara Hotel Lahore."
);

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms"
        title="Room Options for Families, Groups, and Short Stays"
        subtitle="Browse practical room categories and send an inquiry for current rates and availability."
        image="/images/hotel/family-room-blue.jpg"
      />
      <AnimatedSection className="bg-light">
        <Container>
          <SectionHeading title="Choose a Room Type" subtitle="All rates are inquiry-only. Contact reception for the best current rate." />
          <RoomFilters />
        </Container>
      </AnimatedSection>
    </>
  );
}
