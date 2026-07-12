import type { Metadata, Viewport } from "next";
import "@/public/css/webflow.css";
import "./styles.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kayseri Atom Serum | Kayseri Sağlık Kabini",
    template: "%s | Kayseri Atom Serum",
  },
  description:
    "Kayseri Atom Serum Sağlık Kabini; Sahabiye, Kocasinan ve Kayseri bölgesinde sağlık kabini hizmetleri hakkında bilgi ve randevu iletişimi sağlar.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Sağlık Kabini",
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: "/images/667969012fe3acde5846c2ad_favicon.png",
    apple: "/images/66796905836c41d27422b38c_webclip.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: "Kayseri Atom Serum | Kayseri Sağlık Kabini",
    description:
      "Sahabiye, Kocasinan ve Kayseri bölgesinde sağlık kabini hizmetleri hakkında bilgi ve randevu için Kayseri Atom Serum ile iletişime geçin.",
    url: "/",
    images: [
      {
        url: "/images/66793c284401d0163d24dd8e_banner.webp",
        width: 1528,
        height: 1825,
        alt: "Kayseri Atom Serum Sağlık Kabini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayseri Atom Serum | Kayseri Sağlık Kabini",
    description: "Kayseri Atom Serum Sağlık Kabini iletişim ve randevu bilgileri.",
    images: ["/images/66793c284401d0163d24dd8e_banner.webp"],
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
