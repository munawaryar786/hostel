import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HotelImage } from "@/components/ui/HotelImage";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/images/hotel/reception-view.jpg",
  ctaHref,
  ctaLabel
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white sm:py-28">
      <div className="absolute inset-0 opacity-45">
        <HotelImage src={image} alt={title} priority sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50" />
      <Container className="relative">
        <span className="text-sm font-bold uppercase tracking-[0.16em] text-accent">{eyebrow}</span>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{subtitle}</p>
        {ctaHref && ctaLabel ? (
          <ButtonLink href={ctaHref} className="mt-8">
            {ctaLabel}
          </ButtonLink>
        ) : null}
      </Container>
    </section>
  );
}
