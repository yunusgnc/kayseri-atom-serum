"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { routes } from "@/lib/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar w-nav">
      <div className="container w-container">
        <div className="nav-wrapper">
          <BrandLogo />
          <nav
            className={`nav-menu w-nav-menu ${isOpen ? "is-open" : ""}`}
            aria-label="Ana menü"
          >
            {routes.map((route) => (
              <Link
                href={route.href}
                className="nav-link w-nav-link"
                onClick={closeMenu}
                key={route.href}
              >
                {route.label}
              </Link>
            ))}
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
