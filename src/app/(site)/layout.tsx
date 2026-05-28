import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import PageTracker from "@/components/PageTracker";
import { BookingProvider } from "@/context/BookingContext";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookingProvider>
      <PageTracker />
      <SiteHeader />
      {children}
      <SiteFooter />
    </BookingProvider>
  );
}
