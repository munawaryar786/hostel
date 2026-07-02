import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";

export function AboutPreview() {
  return (
    <AnimatedSection className="bg-white">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
          <HotelImage src="/images/hotel/lobby-stairs-elevator.jpg" alt="New Capital Hotel lobby and stairs" />
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.14em] text-accent">About the Hotel</span>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">A Practical Stay in the Heart of Lahore</h2>
          <p className="mt-5 leading-8 text-muted">
            New Capital Hotel is positioned for travelers who need a comfortable, affordable, and centrally located stay in Lahore without unnecessary overstatement.
          </p>
          <p className="mt-4 leading-8 text-muted">
            The hotel is suitable for families, business guests, railway station travelers, tourists, and short-stay visitors who value convenience, air-conditioned rooms, private bathrooms, and reception support.
          </p>
          <ButtonLink href="/about" className="mt-7">
            Learn More
          </ButtonLink>
        </div>
      </Container>
    </AnimatedSection>
  );
}
