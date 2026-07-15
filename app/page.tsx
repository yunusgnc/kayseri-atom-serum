import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ContactModal } from "@/components/ContactModal";
import { Faq } from "@/components/Faq";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { InformationSlider } from "@/components/InformationSlider";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { faqs, site } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: { absolute: "Erciyesevler Atom Serum | Kayseri Sağlık Kabini" },
  description:
    "Erciyesevler Atom Serum Sağlık Kabini; atom serum, vitamin-mineral serumları, glutatyon, B12 ve destek uygulamaları sunar. Bilgi ve randevu alın.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Erciyesevler Atom Serum | Kayseri Sağlık Kabini",
    description:
      "Erciyesevler, Kocasinan ve Kayseri bölgesinde sağlık kabini hizmetleri hakkında bilgi ve randevu iletişimi.",
    url: "/",
  },
  robots: { index: true, follow: true },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: `${site.url}/`,
  telephone: site.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.locality,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: "TR",
  },
  areaServed: { "@type": "City", name: "Kayseri" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: "Erciyesevler Atom Serum Sağlık Kabini",
  url: `${site.url}/`,
  inLanguage: "tr-TR",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="anasayfa" className="hero-section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="row w-row">
              <div className="col w-col w-col-6 w-col-stack">
                <div className="h4-heading bg-color reveal">Kayseri Sağlık Kabini</div>
                <h1 className="h1-heading reveal">Erciyesevler Atom Serum Sağlık Kabini</h1>
                <p className="paragraph-large reveal">
                  Erciyesevler, Kocasinan ve Kayseri bölgesinde sağlık kabini hizmetlerinin kapsamı hakkında bilgi almak ve randevu talebinizi iletmek için bize ulaşın.
                </p>
                <div className="hero-button-div reveal">
                  <Link href="/#iletisim" className="common-button button-outline button-right-margin w-button">
                    Bilgi ve Randevu
                  </Link>
                  <ContactModal />
                </div>
              </div>
              <div className="col w-col w-col-6 w-col-stack">
                <HeroSlider />
              </div>
            </div>
            <div className="trusted-client-section">
              <div className="trusted-client-heading-div">
                <div className="h4-heading client-logo-heading">Erciyesevler Atom Serum</div>
                <div className="location-separator" aria-hidden="true">•</div>
                <div className="h4-heading client-logo-heading">Erciyesevler / Kocasinan</div>
              </div>
              <div className="brand-logo-div local-facts">
                <a href={site.phoneHref} className="local-fact"><strong>Telefon</strong><span>{site.phoneDisplay}</span></a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="local-fact"><strong>WhatsApp</strong><span>Mesaj Gönderin</span></a>
                <div className="local-fact"><strong>Adres</strong><span>İpek Diamond Sitesi No: 11/C</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="hizmetler" className="section">
          <div className="w-layout-blockcontainer container w-container">
            <SectionTitle eyebrow="Hizmetlerimiz" title="Kayseri'de serum ve destek uygulamaları" centered />
            <p className="section-intro centered-intro">
              Her uygulama kişisel sağlık durumu ve profesyonel değerlendirme doğrultusunda planlanır. Hizmet kapsamını inceleyin, ayrıntılı bilgi ve randevu için bize ulaşın.
            </p>
            <div className="w-layout-grid service-grid">
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
          </div>
        </section>

        <section id="hakkimizda" className="section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="row about-us-row w-row">
              <div className="col w-col w-col-6">
                <div className="about-image-div reveal">
                  <Image src="/images/hakkimizda-serum-hazirligi.webp" width={1132} height={1390} alt="Erciyesevler Atom Serum sağlık kabininde serum hazırlığı" className="about-us-image" sizes="(max-width: 767px) 84vw, 40vw" />
                </div>
              </div>
              <div className="col w-col w-col-6">
                <SectionTitle eyebrow="Hakkımızda" title="Erciyesevler Atom Serum Sağlık Kabini" />
                <p className="paragraph-large">
                  Erciyesevler Atom Serum, Erciyesevler Mahallesi’ndeki sağlık kabini adresinde bilgi ve randevu talepleriniz için iletişim sağlar. Sunulan uygulamalar ve uygunluk hakkında güncel bilgiyi doğrudan işletmeden alabilirsiniz.
                </p>
                <div className="hero-button-div">
                  <Link href="/#iletisim" className="common-button button-outline w-button">İletişime Geçin</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="row about-us-row row-tablate-view w-row">
              <div className="col w-col w-col-6 w-col-stack">
                <SectionTitle eyebrow="Neden Bize Ulaşmalısınız?" title="Doğrudan ve tutarlı iletişim bilgileri" />
                <p className="paragraph-large margin-bottom">
                  Sağlık hizmetleri hakkında karar vermeden önce kapsam, uygunluk ve randevu bilgisini sağlık kabininden teyit edin.
                </p>
                <div className="expertise-card">
                  <div className="service-icon-div service-card-1 expertise-symbol" aria-hidden="true">✓</div>
                  <div className="expertise-detail-div">
                    <h3 className="h3-heading expertise-card-heading">Tek Telefon Numarası</h3>
                    <p className="paragraph">Telefon ve WhatsApp iletişiminde 0538 697 69 73 numarası kullanılır.</p>
                  </div>
                </div>
                <div className="expertise-card">
                  <div className="service-icon-div service-card-6 expertise-symbol" aria-hidden="true">⌖</div>
                  <div className="expertise-detail-div">
                    <h3 className="h3-heading expertise-card-heading">Açık Adres Bilgisi</h3>
                    <p className="paragraph">Erciyesevler Mahallesi, Ferruha Güpgüp Caddesi, İpek Diamond Sitesi No: 11/C, 38030 Kocasinan / Kayseri.</p>
                  </div>
                </div>
              </div>
              <div className="col w-col w-col-6 w-col-stack">
                <div className="about-image-div reveal">
                  <Image src="/images/neden-bize-ulasmalisiniz.webp" width={1101} height={1429} alt="Erciyesevler Atom Serum sağlık danışmanlığı ve bilgilendirme görüşmesi" className="why-choose-us-image" sizes="(max-width: 991px) 97vw, 40vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="bilgi" className="section">
          <div className="w-layout-blockcontainer container w-container">
            <SectionTitle eyebrow="İletişim Rehberi" title="Bilgi ve randevu için kullanabileceğiniz yollar" centered />
            <InformationSlider />
          </div>
        </section>

        <section id="sikca-sorulan-sorular" className="section">
          <div className="w-layout-blockcontainer container w-container">
            <SectionTitle eyebrow="Merak Edilenler" title="Sıkça Sorulan Sorular" centered />
            <Faq />
          </div>
        </section>

        <section className="contact-section">
          <div className="w-layout-blockcontainer container w-container">
            <div id="iletisim" className="row contact-row w-row">
              <div className="col contact-col w-col w-col-5 w-col-stack">
                <div className="contact-image-div reveal">
                  <Image src="/images/iletisim-randevu.webp" width={1067} height={1474} alt="Erciyesevler Atom Serum bilgi ve randevu görüşmesi" className="contact-image" sizes="(max-width: 991px) 99vw, 41vw" />
                </div>
              </div>
              <div className="col contact-col w-col w-col-7 w-col-stack">
                <div className="contact-card">
                  <div className="h4-heading contact-eyebrow">Kayseri / Kocasinan</div>
                  <h2 className="h2-heading color-white">Bilgi ve Randevu Alın</h2>
                  <div className="contact-direct-links">
                    <a href={site.phoneHref}>{site.phoneDisplay}</a>
                    <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ile yazın</a>
                    <address>{site.address}</address>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
