import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { NewsletterForm } from "@/components/NewsletterForm";
import { routes, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-detail-div">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid footer-grid">
            <div className="footer-detail footer-brand">
              <BrandLogo footer />
              <p className="paragraph footer-paragraph">
                Kayseri’de serum ve destek uygulamaları için bilgi ve randevu.
              </p>
            </div>

            <div className="footer-detail">
              <h2 className="h3-heading footer-heading">Bağlantılar</h2>
              <nav className="footer-nav" aria-label="Footer menü">
                {routes.map((route) => (
                  <Link href={route.href} className="paragraph footer-text-link" key={route.href}>
                    {route.label}
                  </Link>
                ))}
                <Link href="/#iletisim" className="paragraph footer-text-link">
                  İletişim
                </Link>
              </nav>
            </div>

            <div className="footer-detail footer-contact">
              <h2 className="h3-heading footer-heading">İletişim</h2>
              <a href={site.phoneHref} className="footer-contact-link">
                {site.phoneDisplay}
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                WhatsApp ile yazın
              </a>
              <div className="footer-information-form">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-div">
        <div className="w-layout-blockcontainer w-container">
          <p className="copyright-text">© {new Date().getFullYear()} Kayseri Atom Serum. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
