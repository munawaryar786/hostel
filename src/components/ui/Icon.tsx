import {
  Bath,
  BedDouble,
  Briefcase,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock,
  Headphones,
  Home,
  Image as ImageIcon,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Shirt,
  Snowflake,
  Star,
  Train,
  Tv,
  Users,
  Utensils,
  Wifi,
  X,
  type LucideIcon
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Bath,
  BedDouble,
  Briefcase,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock,
  Headphones,
  Home,
  ImageIcon,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Shirt,
  Snowflake,
  Star,
  Train,
  Tv,
  Users,
  Utensils,
  Wifi,
  X
};

export function Icon({ name, className, "aria-hidden": ariaHidden = true }: { name: string; className?: string; "aria-hidden"?: boolean }) {
  const Component = icons[name] ?? CheckCircle2;
  return <Component aria-hidden={ariaHidden} className={className} />;
}
