"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { routes } from "@/lib/site";
import { services } from "@/lib/services";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [areServicesOpen, setAreServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setAreServicesOpen(false);
  };

  return (
    <header className="navbar w-nav">
      <div className="container w-container">
        <div className="nav-wrapper">
          <BrandLogo />
          <nav
            className={`nav-menu w-nav-menu ${isOpen ? "is-open" : ""}`}
            aria-label="Ana menü"
          >
            {routes.map((route) =>
              route.href === "/hizmetler" ? (
                <div
                  className={`nav-dropdown ${areServicesOpen ? "is-services-open" : ""}`}
                  key={route.href}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setAreServicesOpen(false);
                  }}
                >
                  <div className="nav-dropdown-trigger">
                    <Link
                      href={route.href}
                      className="nav-link w-nav-link"
                      onClick={closeMenu}
                    >
                      {route.label}
                    </Link>
                    <button
                      type="button"
                      className="services-menu-toggle"
                      aria-label="Hizmetler menüsünü aç veya kapat"
                      aria-expanded={areServicesOpen}
                      aria-controls="services-dropdown"
                      onClick={() => setAreServicesOpen((open) => !open)}
                    >
                      <span aria-hidden="true" />
                    </button>
                  </div>
                  <div
                    id="services-dropdown"
                    className="services-dropdown"
                    aria-label="Kayseri sağlık kabini hizmetleri"
                  >
                    <div className="services-dropdown-heading">
                      <span>Hizmetlerimiz</span>
                      <Link href="/hizmetler" onClick={closeMenu}>Tümünü Gör</Link>
                    </div>
                    <ul className="services-dropdown-list">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link href={`/hizmetler/${service.slug}`} onClick={closeMenu}>
                            <span aria-hidden="true">→</span>
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={route.href}
                  className="nav-link w-nav-link"
                  onClick={closeMenu}
                  key={route.href}
                >
                  {route.label}
                </Link>
              ),
            )}
            <Link
              href="/#iletisim"
              className="nav-button-link mobile-button w-inline-block"
              onClick={closeMenu}
            >
              <span className="common-button">İletişime Geçin</span>
            </Link>
          </nav>
          <Link href="/#iletisim" className="nav-button-link w-inline-block">
            <span className="common-button">İletişime Geçin</span>
          </Link>
          <button
            type="button"
            className={`menu-button w-nav-button ${isOpen ? "w--open" : ""}`}
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="menu-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
