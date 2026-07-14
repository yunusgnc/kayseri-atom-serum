import Link from "next/link";

type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  href?: string;
};

export function ServiceCard({ index, title, description, href }: ServiceCardProps) {
  const content = (
    <>
      <div className={`service-icon-div service-card-${((index - 1) % 6) + 1}`} aria-hidden="true">
        <span className="service-card-number">{String(index).padStart(2, "0")}</span>
      </div>
      <h3 className="h3-heading">{title}</h3>
      <p className="paragraph">{description}</p>
      {href ? <span className="service-card-link-text">Detaylı Bilgi <span aria-hidden="true">→</span></span> : null}
    </>
  );

  return (
    <article className="service-div reveal">
      {href ? (
        <Link href={href} className="service-card service-card-link" aria-label={`${title} hakkında detaylı bilgi`}>
          {content}
        </Link>
      ) : (
        <div className="service-card">{content}</div>
      )}
    </article>
  );
}
