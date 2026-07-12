"use client";

import { useRef, useState } from "react";

const cards = [
  { title: "Telefon", text: "0551 860 01 38 numarasını arayarak güncel bilgi isteyebilirsiniz." },
  { title: "WhatsApp", text: "WhatsApp üzerinden hizmet kapsamı ve randevu süreci hakkında yazabilirsiniz." },
  { title: "Konum", text: "Sağlık kabini Sahabiye Mahallesi, Arda Sokak, Kocasinan / Kayseri adresindedir." },
  { title: "Hizmet Bölgesi", text: "Ana hizmet bölgesi Kayseri'dir; ayrıntılar için doğrudan iletişime geçebilirsiniz." },
  { title: "Randevu", text: "Uygunluk ve randevu bilgisi telefon veya WhatsApp üzerinden paylaşılır." },
  { title: "Güncel Bilgi", text: "Çalışma saatleri ve hizmet detayları için sağlık kabininden teyit alabilirsiniz." },
] as const;

export function InformationSlider() {
  const viewport = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const scroll = (direction: number) => {
    const element = viewport.current;
    if (!element) return;
    element.scrollBy({ left: direction * element.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="testimonial-slider info-slider">
      <div
        className="info-slider-viewport"
        ref={viewport}
        onScroll={(event) => {
          const element = event.currentTarget;
          setPage(Math.round(element.scrollLeft / Math.max(element.clientWidth, 1)));
        }}
      >
        {cards.map((card, index) => (
          <article className="testimonial-slide-wrapper" key={card.title}>
            <div className={`testimonial-card _${(index % 6) + 1}`}>
              <div className="patient-detail-div info-card-heading">
                <span className="info-card-number" aria-hidden="true">{index + 1}</span>
                <h3 className="h3-heading patient-name">{card.title}</h3>
              </div>
              <p className="paragraph">{card.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="info-slider-controls">
        <button type="button" onClick={() => scroll(-1)} aria-label="Önceki bilgiler">←</button>
        <span aria-live="polite">{page + 1}. görünüm</span>
        <button type="button" onClick={() => scroll(1)} aria-label="Sonraki bilgiler">→</button>
      </div>
    </div>
  );
}
