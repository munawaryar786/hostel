import type { Metadata } from "next";
import { site } from "@/data/site";

const baseTitle = "Al Madina Tul Munawara Hotel Lahore";

export function pageMetadata(title: string, description: string): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: title === baseTitle ? title : `${title} | ${baseTitle}`,
    description,
    keywords: [
      "Al Madina Tul Munawara Hotel Lahore",
      "Budget hotel in Lahore",
      "Hotel near Lahore Railway Station",
      "Family hotel in Lahore",
      "Hotel on Data Darbar Bazar, Gunj Bakhsh Rd Lahore",
      "Affordable hotel in Lahore",
      "Business hotel in Lahore",
      "Rooms in Lahore near Railway Station"
    ],
    alternates: {
      canonical: site.url
    },
    openGraph: {
      title,
      description,
      url: site.url,
      siteName: baseTitle,
      images: ["/images/hotel/exterior-building.jpg"],
      locale: "en_PK",
      type: "website"
    }
  };
}

export function hotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: site.hotelName,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Data Darbar Bazar, Gunj Bakhsh Rd, Data Gunj Buksh Town",
      addressLocality: "Lahore",
      addressCountry: "PK"
    },
    telephone: site.phone,
    url: site.url,
    image: `${site.url}/images/hotel/exterior-building.jpg`,
    priceRange: "Contact for current rates",
    amenityFeature: site.amenityFeatures.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true
    })),
    checkinTime: site.checkIn,
    checkoutTime: site.checkOut
  };
}
