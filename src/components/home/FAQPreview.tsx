import { faqs } from "@/data/faqs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQPreview() {
  return (
    <AnimatedSection className="bg-white">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Common Questions Before Booking" />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.slice(0, 6).map((item) => (
            <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer text-base font-bold text-primary">{item.question}</summary>
              <p className="mt-3 leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ButtonLink href="/faq" variant="outline">
            View All FAQs
          </ButtonLink>
        </div>
      </Container>
    </AnimatedSection>
  );
}
