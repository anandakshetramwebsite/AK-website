import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import PageTracker from "@/components/PageTracker";
import WhatsAppFloater from "@/components/WhatsAppFloater";
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
      <WhatsAppFloater />
    </BookingProvider>
  );
}
