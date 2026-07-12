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
      <span>Kayseri</span>
      <strong>Atom Serum</strong>
    </Link>
  );
}
