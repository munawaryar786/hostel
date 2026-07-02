import { galleryItems } from "@/data/gallery";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GalleryPreview() {
  return (
    <AnimatedSection className="bg-light">
      <Container>
        <SectionHeading eyebrow="Gallery" title="A Look Around the Property" subtitle="Selected exterior, reception, corridor, room, and bathroom visuals." />
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {galleryItems.slice(0, 6).map((item, index) => (
            <div key={item.title} className={index === 0 ? "group relative overflow-hidden rounded-lg md:row-span-2" : "group relative overflow-hidden rounded-lg"}>
              <HotelImage src={item.src} alt={item.alt} />
              <div className="absolute inset-0 bg-primary/0 transition group-hover:bg-primary/35" />
              <span className="absolute bottom-4 left-4 rounded-md bg-white/90 px-3 py-2 text-sm font-bold text-primary">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ButtonLink href="/gallery">View Full Gallery</ButtonLink>
        </div>
      </Container>
    </AnimatedSection>
  );
}
