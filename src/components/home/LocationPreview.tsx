import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { site } from "@/data/site";

const nearby = ["Lahore Railway Station", "Walled City Lahore", "Lahore Zoo", "Lakshmi Chowk", "Brandreth Road", "Local restaurants nearby"];

export function LocationPreview() {
  return (
    <AnimatedSection className="bg-white">
      <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Location</span>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">Central Access on Data Darbar Bazar, Gunj Bakhsh Rd</h2>
          <p className="mt-5 leading-8 text-muted">{site.address}. The hotel is placed for easy access to transport points, markets, and central Lahore landmarks.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {nearby.map((place) => (
              <div key={place} className="flex items-center gap-3 rounded-md border border-slate-200 p-3">
                <Icon name="MapPin" className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-secondary">{place}</span>
              </div>
            ))}
          </div>
          <ButtonLink href="/location" className="mt-7">
            Get Directions
          </ButtonLink>
        </div>
        <MapEmbed />
      </Container>
    </AnimatedSection>
  );
}
