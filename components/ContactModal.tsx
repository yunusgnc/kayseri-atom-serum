"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="lightbox-link play-button-link"
        onClick={() => setIsOpen(true)}
      >
        <span className="play-button modal-info-icon" aria-hidden="true">i</span>
        <span className="play-button-text">Nasıl bilgi alırım?</span>
      </button>
      {isOpen ? (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setIsOpen(false);
          }}
        >
          <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button
              type="button"
              className="modal-close"
              aria-label="Pencereyi kapat"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <div className="h4-heading">Bilgi ve randevu</div>
            <h2 id="modal-title" className="h2-heading modal-heading">
              Kayseri Atom Serum ile iletişime geçin
            </h2>
            <p className="paragraph">
              Hizmet kapsamı ve randevu süreci hakkında doğrudan bilgi alabilirsiniz.
            </p>
            <div className="modal-actions">
              <a href={site.phoneHref} className="common-button">{site.phoneDisplay}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="common-button button-outline">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
