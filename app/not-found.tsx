import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <BrandLogo />
      <div className="not-found-code" aria-hidden="true">404</div>
      <h1 className="h1-heading">Aradığınız sayfa bulunamadı</h1>
      <p className="paragraph-large">Bağlantı değişmiş veya sayfa kaldırılmış olabilir.</p>
      <Link href="/" className="common-button w-button">Ana Sayfaya Dön</Link>
    </main>
  );
}
