import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-bold tracking-normal text-primary sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
