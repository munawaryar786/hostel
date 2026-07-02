import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { hotelJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "New Capital Hotel Lahore",
  "New Capital Hotel Lahore is a budget, family, and business hotel on McLeod Road near Lahore Railway Station."
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd()) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
