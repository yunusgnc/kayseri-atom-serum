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
            <div className="footer-detail">
              <BrandLogo footer />
              <p className="paragraph footer-paragraph">
                Erciyesevler Atom Serum Sağlık Kabini, Erciyesevler ve Kocasinan başta olmak üzere Kayseri bölgesinde bilgi ve randevu talepleriniz için iletişim sağlar.
              </p>
              <a href={site.phoneHref} className="footer-contact-link">{site.phoneDisplay}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-contact-link">WhatsApp ile yazın</a>
            </div>
            <div className="footer-detail">
              <h2 className="h3-heading footer-heading">Hızlı Bağlantılar</h2>
              {routes.map((route) => (
                <Link href={route.href} className="paragraph footer-text-link" key={route.href}>
                  {route.label}
                </Link>
              ))}
              <Link href="/#iletisim" className="paragraph footer-text-link">İletişim</Link>
            </div>
            <div className="footer-detail">
              <h2 className="h3-heading footer-heading">Hızlı İletişim</h2>
              <a href={site.phoneHref} className="paragraph footer-text-link">Telefonla Arayın</a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="paragraph footer-text-link">WhatsApp ile Yazın</a>
              <Link href="/#iletisim" className="paragraph footer-text-link">Bilgi ve Randevu</Link>
            </div>
            <div className="footer-detail">
              <h2 className="h3-heading footer-heading">İletişim Bilgileri</h2>
              <address className="paragraph footer-address">
                Sağlık Kabini - Erciyesevler Atom Serum<br />
                Erciyesevler Mahallesi, Ferruha Güpgüp Caddesi<br />
                İpek Diamond Sitesi No: 11/C<br />
                38030 Kocasinan / Kayseri
              </address>
              <div className="footer-information-form">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-div">
        <div className="w-layout-blockcontainer w-container">
          <p className="copyright-text">© {new Date().getFullYear()} Erciyesevler Atom Serum. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
