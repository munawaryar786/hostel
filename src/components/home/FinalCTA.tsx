import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { whatsappUrl } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="bg-secondary py-16 text-white">
      <Container className="text-center">
        <Icon name="BedDouble" className="mx-auto h-10 w-10 text-accent" />
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Need a Room in Lahore Today?</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
          Send a quick inquiry and reception can confirm current room availability, rates, parking support, and arrival details.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={whatsappUrl("Hello Al Madina Tul Munawara Hotel, I want to inquire about room availability.")}>Book on WhatsApp</ButtonLink>
          <ButtonLink href="tel:+923001170000" variant="light">
            Call Reception
          </ButtonLink>
          <ButtonLink href="/location" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary">
            View Location
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
