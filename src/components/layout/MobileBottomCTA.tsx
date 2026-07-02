import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-2 shadow-[0_-10px_30px_rgba(15,23,42,0.12)] lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        <ButtonLink href={`tel:${site.phone}`} variant="outline" className="min-h-12 px-2 text-xs">
          <Icon name="Phone" className="h-4 w-4" />
          Call
        </ButtonLink>
        <ButtonLink href={whatsappUrl("Hello Al Madina Tul Munawara Hotel, I want to inquire about room availability.")} variant="outline" className="min-h-12 px-2 text-xs">
          <Icon name="MessageCircle" className="h-4 w-4" />
          WhatsApp
        </ButtonLink>
        <ButtonLink href="/booking" className="min-h-12 px-2 text-xs">
          <Icon name="CalendarCheck" className="h-4 w-4" />
          Book
        </ButtonLink>
      </div>
    </div>
  );
}
