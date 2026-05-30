import type { Metadata } from "next";
import Version1Home from "@/components/Version1Home";

export const metadata: Metadata = {
  title:
    "Ananda Kshethram — Best Agri Tourism & Farm Retreat near Hyderabad | 60 Min from Gachibowli",
  description:
    "Farm outings from ₹1,249 · Night stays · School trips from ₹500 · Corporate retreats. Hyderabad's top-rated agri tourism — 60 min from Gachibowli.",
};

export default function HomePage() {
  return <Version1Home />;
}
