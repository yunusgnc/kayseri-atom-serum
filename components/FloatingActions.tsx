import { site } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Hızlı iletişim bağlantıları">
      <a href={site.phoneHref} className="floating-action phone-action" aria-label={`Kayseri Atom Serum'u ara: ${site.phoneDisplay}`}>
        <span aria-hidden="true">☎</span>
        <span className="floating-label">Ara</span>
      </a>
      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="floating-action whatsapp-action" aria-label="Kayseri Atom Serum'a WhatsApp üzerinden yaz">
        <span aria-hidden="true">W</span>
        <span className="floating-label">WhatsApp</span>
      </a>
    </div>
  );
}
