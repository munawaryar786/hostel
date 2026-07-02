import { site } from "@/data/site";

export function MapEmbed({ title = "New Capital Hotel Lahore map" }: { title?: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      <iframe
        title={title}
        src={site.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[380px] w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
