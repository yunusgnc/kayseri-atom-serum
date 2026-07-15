import type { Metadata, Viewport } from "next";
import "@/public/css/webflow.css";
import "./styles.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Erciyesevler Atom Serum | Kayseri Sağlık Kabini",
    template: "%s | Erciyesevler Atom Serum",
  },
  description:
    "Erciyesevler Atom Serum Sağlık Kabini; serum, vitamin, mineral ve destek uygulamaları hakkında bilgi ve randevu hizmeti sağlar.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Sağlık Kabini",
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: "Erciyesevler Atom Serum | Kayseri Sağlık Kabini",
    description:
      "Erciyesevler, Kocasinan ve Kayseri bölgesinde sağlık kabini hizmetleri hakkında bilgi ve randevu için Erciyesevler Atom Serum ile iletişime geçin.",
    url: "/",
    images: [
      {
        url: "/images/hero-serum-hazirligi.webp",
        width: 1148,
        height: 1370,
        alt: "Erciyesevler Atom Serum Sağlık Kabini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erciyesevler Atom Serum | Kayseri Sağlık Kabini",
    description: "Erciyesevler Atom Serum Sağlık Kabini iletişim ve randevu bilgileri.",
    images: ["/images/hero-serum-hazirligi.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a7bff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="body">{children}</body>
    </html>
  );
}
