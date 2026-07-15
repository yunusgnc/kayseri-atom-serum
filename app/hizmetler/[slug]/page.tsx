import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getRelatedServices, getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  const title = service.slug === "atom-serum"
    ? "Erciyesevler Atom Serum Uygulaması | Sağlık Kabini"
    : `Kayseri ${service.title} | Atom Serum Sağlık Kabini`;
  const canonical = `/hizmetler/${service.slug}`;

  return {
    title: { absolute: title },
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      title,
      description: service.metaDescription,
      url: canonical,
      images: [
        {
          url: "/images/hero-serum-hazirligi.webp",
          width: 1148,
          height: 1370,
          alt: `Kayseri ${service.title} hizmeti`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.metaDescription,
      images: ["/images/hero-serum-hazirligi.webp"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const relatedServices = getRelatedServices(service);
  const serviceUrl = `${site.url}/hizmetler/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Kayseri ${service.title}`,
    description: service.metaDescription,
    url: serviceUrl,
    areaServed: { "@type": "City", name: "Kayseri" },
    provider: {
      "@type": "LocalBusiness",
      name: site.businessName,
      url: site.url,
      telephone: site.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.streetAddress,
        postalCode: site.postalCode,
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: "TR",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${site.url}/hizmetler` },
      { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Header />
      <main>
        <section className="service-page-hero">
          <div className="w-layout-blockcontainer container w-container">
            <nav className="breadcrumbs" aria-label="Sayfa yolu">
              <Link href="/">Ana Sayfa</Link>
              <span aria-hidden="true">/</span>
              <Link href="/hizmetler">Hizmetler</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>
            <div className="service-hero-layout">
              <div className="service-hero-content reveal">
                <div className="h4-heading bg-color">Kayseri / Kocasinan</div>
                <h1 className="h1-heading">Kayseri {service.title}</h1>
                <p className="paragraph-large">{service.summary}</p>
                <div className="service-trust-points" aria-label="Hizmet yaklaşımımız">
                  <span><b aria-hidden="true">✓</b> Ön değerlendirme</span>
                  <span><b aria-hidden="true">✓</b> Kişiye özel planlama</span>
                  <span><b aria-hidden="true">✓</b> Profesyonel uygulama</span>
                </div>
                <div className="service-hero-actions">
                  <a href={site.phoneHref} className="common-button w-button">Hemen Arayın</a>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="common-button button-outline w-button">WhatsApp ile Yazın</a>
                </div>
              </div>
              <aside className="service-hero-card reveal" aria-label="Hızlı randevu bilgisi">
                <span className="service-hero-card-eyebrow">Bilgi ve Randevu</span>
                <h2>{service.title}</h2>
                <p>Uygunluk, güncel hizmet kapsamı ve randevu için doğrudan sağlık kabinimizle görüşün.</p>
                <a href={site.phoneHref} className="service-card-phone">{site.phoneDisplay}</a>
                <div className="service-location-line">
                  <span aria-hidden="true">⌖</span>
                  <address>{site.address}</address>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="service-content-section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="service-content-layout">
              <article className="service-article">
                <span className="section-kicker">Hizmet Hakkında</span>
                <h2>Kayseri’de {service.title} hakkında</h2>
                {service.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

                <div className="medical-notice">
                  <span aria-hidden="true">i</span>
                  <p><strong>Sağlık notu:</strong> Bu sayfa genel bilgilendirme amaçlıdır. Tanı, reçete veya kişisel tıbbi öneri yerine geçmez; uygulama uygunluğu sağlık durumunuza göre belirlenir.</p>
                </div>

                <h2>Uygulama öncesi neler değerlendirilir?</h2>
                <p>Güvenli ve kişiye uygun bir plan için ön görüşmede aşağıdaki başlıklar ele alınır:</p>
                <ul className="assessment-list">
                  {service.assessmentPoints.map((point) => (
                    <li key={point}><span aria-hidden="true">✓</span>{point}</li>
                  ))}
                </ul>

                <h2>Kayseri’de süreç nasıl ilerler?</h2>
                <div className="process-grid">
                  <div className="process-card"><span>01</span><h3>Ön Görüşme</h3><p>Talebiniz, sağlık öykünüz ve mevcut uygulama kapsamı konuşulur.</p></div>
                  <div className="process-card"><span>02</span><h3>Uygunluk</h3><p>Gerekli tetkik veya hekim planı kontrol edilir; kişisel uygunluk değerlendirilir.</p></div>
                  <div className="process-card"><span>03</span><h3>Randevu</h3><p>Uygun bulunursa süreç açıklanır ve Kayseri sağlık kabinimiz için randevu planlanır.</p></div>
                </div>
              </article>

              <aside className="service-sidebar" aria-label="Diğer hizmet bağlantıları">
                <div className="sidebar-card">
                  <span className="section-kicker">Hizmet Rehberi</span>
                  <h2>Diğer hizmetleri inceleyin</h2>
                  <nav aria-label="Diğer hizmetler">
                    {relatedServices.map((related) => (
                      <Link href={`/hizmetler/${related.slug}`} key={related.slug}>
                        {related.title}<span aria-hidden="true">→</span>
                      </Link>
                    ))}
                    <Link href="/hizmetler" className="all-services-link">Tüm Hizmetler<span aria-hidden="true">→</span></Link>
                  </nav>
                </div>
                <div className="sidebar-contact-card">
                  <span>Kayseri Sağlık Kabini</span>
                  <h2>Aklınıza takılan bir konu mu var?</h2>
                  <p>Hizmet kapsamı ve randevu için bize ulaşın.</p>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ile Bilgi Alın</a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="service-faq-section" aria-labelledby="service-faq-title">
          <div className="w-layout-blockcontainer container w-container">
            <div className="service-section-heading">
              <span className="section-kicker">Merak Edilenler</span>
              <h2 id="service-faq-title">{service.title} hakkında sıkça sorulan sorular</h2>
            </div>
            <div className="service-faq-list">
              {service.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="service-cta-section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="service-cta-card">
              <div>
                <span className="h4-heading">Kayseri {service.title}</span>
                <h2 className="h2-heading">Bilgi ve randevu için bize ulaşın</h2>
                <p>{site.address}</p>
              </div>
              <div className="service-cta-actions">
                <a href={site.phoneHref} className="common-button w-button">{site.phoneDisplay}</a>
                <Link href="/#iletisim" className="common-button button-outline w-button">İletişim Formu</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
