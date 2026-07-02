import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const policies = [
  ["Clock", "Check-in", "12:00 PM"],
  ["Clock", "Check-out", "12:00 PM"],
  ["ShieldCheck", "Pets", "Not allowed"],
  ["ShieldCheck", "Smoking", "Smoke-free property"],
  ["Car", "Parking", "Subject to availability"],
  ["CheckCircle2", "ID", "Valid ID may be required at check-in"]
];

export function PoliciesPreview() {
  return (
    <AnimatedSection className="bg-light">
      <Container>
        <SectionHeading eyebrow="Policies" title="Important Guest Notes" subtitle="Please confirm room availability, current rates, parking, breakfast, and lift access before arrival." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map(([icon, title, text]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-5">
              <Icon name={icon} className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-bold text-primary">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
