import { rooms } from "@/data/rooms";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomCard } from "@/components/rooms/RoomCard";

export function FeaturedRooms() {
  return (
    <AnimatedSection className="bg-light">
      <Container>
        <SectionHeading
          eyebrow="Rooms"
          title="Room Options for Short and Family Stays"
          subtitle="Choose from practical double, triple, family, and multi-bed room options. Rates and availability are confirmed by reception."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
