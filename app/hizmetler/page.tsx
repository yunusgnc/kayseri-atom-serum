import type { Metadata } from "next";
import Link from "next/link";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Kayseri Serum ve Destek Uygulamaları | Hizmetler" },
  description:
    "Kayseri'de atom serum, vitamin ve mineral serumları, glutatyon, B12, magnezyum, demir, NAD+ ve diğer destek uygulamalarını inceleyin.",
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Kayseri Serum ve Destek Uygulamaları",
    description:
      "Erciyesevler Atom Serum Sağlık Kabini'nin serum, vitamin, mineral ve destek uygulamaları hakkında ayrıntılı bilgi alın.",
    url: "/hizmetler",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${site.url}/` },
    { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${site.url}/hizmetler` },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Erciyesevler Atom Serum Hizmetleri",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${site.url}/hizmetler/${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="service-page-hero service-index-hero">
          <div className="w-layout-blockcontainer container w-container">
            <nav className="breadcrumbs" aria-label="Sayfa yolu">
              <Link href="/">Ana Sayfa</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Hizmetler</span>
            </nav>
            <div className="service-hero-layout">
              <div className="service-hero-content reveal">
                <div className="h4-heading bg-color">Kayseri Sağlık Kabini</div>
                <h1 className="h1-heading">Kayseri Serum ve Destek Uygulamaları</h1>
                <p className="paragraph-large">
                  Atom serumdan vitamin ve mineral desteklerine kadar sunduğumuz hizmetleri inceleyin. Her uygulamanın kapsamı, gerekliliği ve kişisel uygunluğu ön değerlendirmeyle ele alınır.
                </p>
                <div className="service-hero-actions">
                  <a href={site.phoneHref} className="common-button w-button">{site.phoneDisplay}</a>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="common-button button-outline w-button">WhatsApp ile Bilgi Alın</a>
                </div>
              </div>
              <aside className="service-hero-card reveal" aria-label="Konum ve hizmet bilgisi">
                <span className="service-hero-card-eyebrow">15 ayrı hizmet sayfası</span>
                <h2>Bilgiye kolayca ulaşın</h2>
                <p>Her hizmet için kapsamı, değerlendirme sürecini ve merak edilenleri ayrı ayrı hazırladık.</p>
                <div className="service-location-line">
                  <span aria-hidden="true">⌖</span>
                  <address>{site.address}</address>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="services-catalog-section" aria-labelledby="services-heading">
          <div className="w-layout-blockcontainer container w-container">
            <div className="catalog-heading">
              <span className="h4-heading">Tüm Hizmetlerimiz</span>
              <h2 id="services-heading" className="h2-heading">Size uygun hizmeti inceleyin</h2>
              <p className="paragraph-large">Aşağıdaki sayfalarda her uygulamayla ilgili ayrıntılı ve anlaşılır bilgi bulabilirsiniz.</p>
            </div>
            <div className="w-layout-grid service-grid services-catalog-grid">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  index={index + 1}
                  title={service.title}
                  description={service.summary}
                  href={`/hizmetler/${service.slug}`}
                />
              ))}
            </div>
            <div className="medical-notice catalog-notice">
              <span aria-hidden="true">i</span>
              <p><strong>Önemli bilgilendirme:</strong> Hizmet sayfalarındaki içerikler genel bilgi amaçlıdır; tanı, kişisel tıbbi öneri veya sonuç garantisi değildir. Uygunluk sağlık durumunuza göre değerlendirilir.</p>
            </div>
          </div>
        </section>

        <section className="service-cta-section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="service-cta-card">
              <div>
                <span className="h4-heading">Sahabiye / Kocasinan</span>
                <h2 className="h2-heading">Hangi hizmetin uygun olduğunu birlikte değerlendirelim</h2>
              </div>
              <Link href="/#iletisim" className="common-button w-button">Bilgi ve Randevu Alın</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
