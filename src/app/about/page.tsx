import type { Metadata } from "next";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About",
  "Learn about Al Madina Tul Munawara Hotel Lahore, a practical budget and family hotel on Data Darbar Bazar, Gunj Bakhsh Rd near Lahore Railway Station."
);

const suitableFor = ["Families visiting Lahore", "Business travelers", "Railway station travelers", "Budget travelers", "Short-stay guests", "Tourists visiting central Lahore"];
const values = ["Affordability", "Convenience", "Clean basic accommodation", "Family-friendly rooms", "Central access"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Al Madina Tul Munawara Hotel"
        title="A Practical Budget Hotel in Central Lahore"
        subtitle="Al Madina Tul Munawara Hotel serves guests who need affordable rooms, convenient access, and essential comfort near Lahore Railway Station."
        image="/images/hotel/reception-view.jpg"
        ctaHref="/booking"
        ctaLabel="Send Booking Inquiry"
      />
      <AnimatedSection className="bg-white">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary">Hotel Story and Positioning</h2>
            <p className="mt-5 leading-8 text-muted">
              Al Madina Tul Munawara Hotel is designed around honest, practical hospitality. The hotel focuses on central access, useful facilities, and budget-conscious accommodation for real travel needs in Lahore.
            </p>
            <p className="mt-4 leading-8 text-muted">
              It is not positioned as a luxury property. It is a straightforward option for guests who value location, family room options, air conditioning, Wi-Fi, private bathrooms, and reception support.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/rooms">View Rooms</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Contact Reception
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
            <HotelImage src="/images/hotel/lobby-stairs-elevator.jpg" alt="Lobby and stairs at Al Madina Tul Munawara Hotel" />
          </div>
        </Container>
      </AnimatedSection>
      <WhyChooseUs className="bg-light" />
      <AnimatedSection className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="text-3xl font-bold text-primary">Who the Hotel Is Suitable For</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {suitableFor.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 p-4">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-primary">Guest-Focused Values</h2>
            <div className="mt-6 grid gap-3">
              {values.map((item) => (
                <div key={item} className="rounded-md bg-light p-4 font-semibold text-secondary">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </Container>
      </AnimatedSection>
    </>
  );
}
