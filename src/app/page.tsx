import { AboutPreview } from "@/components/home/AboutPreview";
import { FacilitiesPreview } from "@/components/home/FacilitiesPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FeaturedRooms } from "@/components/home/FeaturedRooms";
import { FinalCTA } from "@/components/home/FinalCTA";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightsStrip } from "@/components/home/HighlightsStrip";
import { LocationPreview } from "@/components/home/LocationPreview";
import { PoliciesPreview } from "@/components/home/PoliciesPreview";
import { QuickBooking } from "@/components/home/QuickBooking";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickBooking />
      <HighlightsStrip />
      <AboutPreview />
      <FeaturedRooms />
      <FacilitiesPreview />
      <WhyChooseUs />
      <Testimonials />
      <GalleryPreview />
      <LocationPreview />
      <PoliciesPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
