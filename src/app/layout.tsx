import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { BookingProvider } from "@/context/BookingContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ananda Kshethram | Hyderabad's Premier Vegetarian Farm Retreat",
  description:
    "Farm retreats, village games, corporate retreats, events, photoshoots & more. Hyderabad's only 100% pure vegetarian farm sanctuary.",
  keywords: [
    "Ananda Kshethram",
    "farm retreat Hyderabad",
    "corporate retreat",
    "school trip",
    "family outing",
    "vegetarian farm",
    "mango festival",
  ],
  openGraph: {
    title: "Ananda Kshethram",
    description:
      "Hyderabad's Premier Sanctuary for Corporate Retreats, Family Outings & School Trips",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
