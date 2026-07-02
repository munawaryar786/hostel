import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

const items = [
  ["CheckCircle2", "Budget Friendly", "Practical rates for short and longer stays."],
  ["Users", "Family Rooms", "Room options for families and groups."],
  ["MapPin", "Central Location", "Near Lahore Railway Station on Data Darbar Bazar, Gunj Bakhsh Rd."],
  ["Briefcase", "Business Travel Ready", "Simple facilities for work trips."]
];

export function HighlightsStrip() {
  return (
    <AnimatedSection className="bg-light pt-32">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([icon, title, description]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-soft">
              <Icon name={icon} className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
