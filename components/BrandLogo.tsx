import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  footer?: boolean;
};

export function BrandLogo({ footer = false }: BrandLogoProps) {
  return (
    <Link
      href="/#anasayfa"
      className={footer ? "footer-image-link brand-logo" : "logo-link brand-logo"}
      aria-label="Erciyesevler Atom Serum ana sayfa"
    >
      <Image
        src="/images/erciyesevler-atom-serum-logo.png"
        width={1148}
        height={345}
        alt="Erciyesevler Atom Serum Kayseri"
        className="brand-logo-image"
        priority={!footer}
        sizes={footer ? "220px" : "(max-width: 479px) 170px, 220px"}
      />
    </Link>
  );
}
