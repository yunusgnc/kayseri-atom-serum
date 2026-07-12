"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const slides = [
  {
    src: "/images/66793c284401d0163d24dd8e_banner.webp",
    alt: "Kayseri sağlık kabini hizmet ortamı",
  },
  {
    src: "/images/66793c284401d0163d24dd9f_banner1.webp",
    alt: "Kayseri Atom Serum sağlık kabini görseli",
  },
  {
    src: "/images/66793c284401d0163d24dda0_banner2.webp",
    alt: "Sahabiye sağlık kabini hizmet alanı",
  },
] as const;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);

  const move = (direction: number) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <div
      className="image-slider reveal"
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const end = event.changedTouches[0]?.clientX ?? touchStart.current;
        const distance = touchStart.current - end;
        if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <div className="slider w-slider" aria-roledescription="slayt gösterisi">
        <div className="mask w-slider-mask">
          {slides.map((slide, index) => (
            <div
              className={`slide w-slide ${active === index ? "is-active" : ""}`}
              aria-hidden={active !== index}
              key={slide.src}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1528}
                height={1825}
                className="banner-image"
                priority={index === 0}
                sizes="(max-width: 767px) 90vw, (max-width: 991px) 489px, 47vw"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="left-arrow w-slider-arrow-left"
          aria-label="Önceki görsel"
          onClick={() => move(-1)}
        >
          <Image
            src="/icons/arrow-left.svg"
            width={37}
            height={37}
            alt=""
          />
        </button>
        <button
          type="button"
          className="right-arrow w-slider-arrow-right"
          aria-label="Sonraki görsel"
          onClick={() => move(1)}
        >
          <Image
            src="/icons/arrow-right.svg"
            width={37}
            height={37}
            alt=""
          />
        </button>
        <div className="accessible-slider-status" aria-live="polite">
          {active + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
