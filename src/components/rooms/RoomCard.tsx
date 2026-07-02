import { Room } from "@/data/rooms";
import { ButtonLink } from "@/components/ui/Button";
import { HotelImage } from "@/components/ui/HotelImage";
import { Icon } from "@/components/ui/Icon";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <HotelImage src={room.image} alt={room.title} />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">Inquiry Only</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-primary">{room.title}</h3>
            <p className="mt-1 text-sm text-muted">{room.subtitle}</p>
          </div>
          <span className="rounded-md bg-cream px-3 py-2 text-right text-xs font-bold text-accent">{room.priceLabel}</span>
        </div>
        <p className="mt-4 leading-7 text-muted">{room.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-secondary">
          <span className="inline-flex items-center gap-1 rounded-full bg-light px-3 py-1">
            <Icon name="Users" className="h-3.5 w-3.5 text-accent" />
            {room.capacity}
          </span>
          {room.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="rounded-full bg-light px-3 py-1">
              {amenity}
            </span>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <ButtonLink href={`/rooms/${room.slug}`} variant="outline" className="px-3">
            View Details
          </ButtonLink>
          <ButtonLink href="/booking" className="px-3">
            Book Now
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
