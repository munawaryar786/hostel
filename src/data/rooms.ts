export type Room = {
  id: string;
  slug: string;
  category: "double" | "triple" | "family" | "multi";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gallery: string[];
  capacity: string;
  bedType: string;
  size: string;
  amenities: string[];
  priceLabel: string;
  recommendedFor: string[];
  policies: string[];
};

export const rooms: Room[] = [
  {
    id: "standard-double",
    slug: "standard-double-room",
    category: "double",
    title: "Standard Double Room",
    subtitle: "Simple comfort for one or two guests",
    description:
      "A practical air-conditioned room for short stays, business travel, and railway station visitors who need central access in Lahore.",
    image: "/images/hotel/double-bed-room-wood.jpg",
    gallery: ["/images/hotel/double-bed-room-wood.jpg", "/images/hotel/room-amenities-tv.jpg"],
    capacity: "Up to 2 guests",
    bedType: "Double bed",
    size: "Size to be confirmed",
    amenities: ["Air conditioning", "Free Wi-Fi", "Private bathroom", "Flat-screen TV"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Business travelers", "Short stays", "Couples"],
    policies: ["Inquiry only", "Valid ID may be required", "Rates should be confirmed before arrival"]
  },
  {
    id: "standard-triple",
    slug: "standard-triple-room",
    category: "triple",
    title: "Standard Triple Room",
    subtitle: "Extra sleeping space for small groups",
    description:
      "A comfortable option for three guests who need an affordable room close to transport, markets, and central Lahore.",
    image: "/images/hotel/family-room-blue.jpg",
    gallery: ["/images/hotel/family-room-blue.jpg", "/images/hotel/hallway-rooms.jpg"],
    capacity: "Up to 3 guests",
    bedType: "Triple sleeping setup",
    size: "Size to be confirmed",
    amenities: ["Air conditioning", "Free Wi-Fi", "Private bathroom", "Room service"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Small families", "Friends", "Railway station travelers"],
    policies: ["Inquiry only", "Extra bedding subject to availability", "Parking should be confirmed"]
  },
  {
    id: "family-room",
    slug: "family-room",
    category: "family",
    title: "Family Room",
    subtitle: "Spacious option for family stays",
    description:
      "A family-friendly room suited to guests who prefer more space, attached bathroom convenience, and a central Lahore location.",
    image: "/images/hotel/family-room-black-bed.jpg",
    gallery: ["/images/hotel/family-room-black-bed.jpg", "/images/hotel/bathroom.jpg"],
    capacity: "Family capacity to be confirmed",
    bedType: "Family bed setup",
    size: "Size to be confirmed",
    amenities: ["Air conditioning", "Free Wi-Fi", "Private bathroom", "Family rooms"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Families", "Groups", "Longer stays"],
    policies: ["Inquiry only", "Room layout should be confirmed", "Check-in from 12:00 PM"]
  },
  {
    id: "two-bedroom-unit",
    slug: "2-bedroom-unit",
    category: "multi",
    title: "2-Bedroom Unit",
    subtitle: "Separate space for families and groups",
    description:
      "A multi-bed option for guests who need a practical stay arrangement with convenient access to Data Darbar Bazar, Gunj Bakhsh Rd and nearby markets.",
    image: "/images/hotel/room-amenities-tv.jpg",
    gallery: ["/images/hotel/room-amenities-tv.jpg", "/images/hotel/hotel-corridor.jpg"],
    capacity: "Group capacity to be confirmed",
    bedType: "Two-bedroom setup",
    size: "Size to be confirmed",
    amenities: ["Air conditioning", "Free Wi-Fi", "Private bathroom", "Luggage assistance"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Families", "Group travelers", "Long stays"],
    policies: ["Inquiry only", "Availability should be confirmed", "Rates vary by date and occupancy"]
  },
  {
    id: "four-bedroom-unit",
    slug: "4-bedroom-unit",
    category: "multi",
    title: "4-Bedroom Unit",
    subtitle: "Large accommodation for group stays",
    description:
      "A larger inquiry-only option for groups needing multiple sleeping areas and central access in Lahore.",
    image: "/images/hotel/family-room-blue.jpg",
    gallery: ["/images/hotel/family-room-blue.jpg", "/images/hotel/reception-view.jpg"],
    capacity: "Large group capacity to be confirmed",
    bedType: "Four-bedroom setup",
    size: "Size to be confirmed",
    amenities: ["Air conditioning", "Free Wi-Fi", "Family rooms", "24/7 front desk"],
    priceLabel: "Contact for Best Rate",
    recommendedFor: ["Large families", "Groups", "Extended stays"],
    policies: ["Inquiry only", "Advance confirmation recommended", "Parking subject to availability"]
  }
];
