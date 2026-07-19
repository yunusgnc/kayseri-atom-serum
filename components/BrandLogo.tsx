import Link from "next/link";

type BrandLogoProps = {
  footer?: boolean;
};

export function BrandLogo({ footer = false }: BrandLogoProps) {
  return (
    <Link
      href="/#anasayfa"
      className={footer ? "footer-image-link brand-logo" : "logo-link brand-logo"}
      aria-label="Kayseri Atom Serum ana sayfa"
    >
      <span className="brand-logo-mark">
        <span className="brand-logo-line brand-logo-line--primary">Kayseri</span>
        <span className="brand-logo-line brand-logo-line--secondary">Atom Serum</span>
      </span>
    </Link>
  );
}
