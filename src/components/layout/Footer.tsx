import Link from "next/link";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-primary pb-24 text-white lg:pb-0">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-bold">{site.hotelName}</h2>
          <p className="mt-4 max-w-sm leading-7 text-slate-300">
            A practical, affordable, and centrally located stay option for families, business travelers, and short-stay guests in Lahore.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/booking">Book Your Stay</ButtonLink>
            <ButtonLink href={whatsappUrl("Hello Al Madina Tul Munawara Hotel, I want to inquire about room availability.")} variant="light">
              WhatsApp
            </ButtonLink>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-accent">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-accent">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a className="flex items-center gap-2 hover:text-white" href={`tel:${site.phone}`}>
              <Icon name="Phone" className="h-4 w-4" />
              {site.phone}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={`mailto:${site.email}`}>
              <Icon name="MessageCircle" className="h-4 w-4" />
              {site.email}
            </a>
            <a className="flex items-start gap-2 hover:text-white" href={site.mapUrl}>
              <Icon name="MapPin" className="mt-0.5 h-4 w-4" />
              {site.address}
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-accent">Guest Notes</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            {site.policies.slice(0, 4).map((policy) => (
              <li key={policy}>{policy}</li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright {new Date().getFullYear()} Al Madina Tul Munawara Hotel. All rights reserved.</span>
          <span>Frontend demo. Contact details and rates are placeholders.</span>
        </Container>
      </div>
    </footer>
  );
}
