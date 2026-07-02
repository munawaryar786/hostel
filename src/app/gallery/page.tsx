import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Gallery",
  "View exterior, reception, room, bathroom, and corridor images for New Capital Hotel Lahore."
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Property Gallery"
        subtitle="Browse hotel exterior, reception, rooms, bathroom, and corridor images. Placeholder visuals are replaceable from public/images/hotel."
        image="/images/hotel/exterior-building.jpg"
      />
      <AnimatedSection className="bg-light">
        <Container>
          <SectionHeading title="View Hotel Images" subtitle="Filter by category and open images in a keyboard-accessible lightbox." />
          <GalleryGrid />
        </Container>
      </AnimatedSection>
    </>
  );
}
