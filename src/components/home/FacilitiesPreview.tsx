import { amenities } from "@/data/amenities";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FacilitiesPreview() {
  return (
    <AnimatedSection className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Facilities"
          title="Essential Comforts for a Convenient Stay"
          subtitle="Useful facilities for budget-conscious guests, families, and business travelers."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <article key={item.title} className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-soft">
              <Icon name={item.icon} className="h-6 w-6 text-accent transition group-hover:-translate-y-1" />
              <h3 className="mt-4 font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ButtonLink href="/facilities" variant="outline">
            View Facilities
          </ButtonLink>
        </div>
      </Container>
    </AnimatedSection>
  );
}
