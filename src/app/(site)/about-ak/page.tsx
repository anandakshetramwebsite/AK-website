import type { Metadata } from "next";
import GenericPage from "@/components/GenericPage";
import { getSiteContent } from "@/lib/cms/storage";

export async function generateMetadata(): Promise<Metadata> {
  const p = (await getSiteContent()).pages.about;
  return { title: p.title, description: p.description };
}

export default function Page() {
  return <GenericPage routeKey="about-ak" />;
}
