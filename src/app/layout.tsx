import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { getSiteContent } from "@/lib/cms/storage";
import { BRAND_FAVICON, SITE_URL } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#3a0808",
};

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  const siteName = content.header.siteName;

  return {
    metadataBase: new URL(SITE_URL),
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    applicationName: siteName,
    icons: {
      icon: [{ url: BRAND_FAVICON, type: "image/png" }],
      apple: [{ url: BRAND_FAVICON, type: "image/png" }],
      shortcut: [{ url: BRAND_FAVICON, type: "image/png" }],
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: SITE_URL,
      siteName,
      title: content.seo.title,
      description: content.seo.description,
      images: [
        {
          url: BRAND_FAVICON,
          width: 1080,
          height: 1080,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: content.seo.title,
      description: content.seo.description,
      images: [BRAND_FAVICON],
    },
    alternates: {
      canonical: SITE_URL,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen min-h-[100dvh] antialiased">{children}</body>
    </html>
  );
}
