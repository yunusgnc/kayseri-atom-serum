"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="accordion-wrapper">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`accordion w-dropdown ${isOpen ? "is-open" : ""}`} key={faq.question}>
            <button
              type="button"
              className={`accordion-toggle w-dropdown-toggle ${isOpen ? "w--open" : ""}`}
              aria-expanded={isOpen}
              aria-controls={`sss-yanit-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="accordion-icon" aria-hidden="true">⌄</span>
              <span className="h4-heading faq-heading">{faq.question}</span>
            </button>
            <div
              id={`sss-yanit-${index}`}
              className="accordion-list w-dropdown-list"
              hidden={!isOpen}
            >
              <p className="faq-paragraph">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
