import type { Metadata } from "next";
import Version1Home from "@/components/Version1Home";

export const metadata: Metadata = {
  title:
    "Ananda Kshethram — Agri Tourism & Pure Veg Farm Retreat near Hyderabad",
  description:
    "Hyderabad's first agri tourism hub. Family day outings, farm night stays, school trips, corporate retreats, and celebrations. Pure vegetarian. One hour from Gachibowli.",
};

export default function HomePage() {
  return <Version1Home />;
}
