type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
};

export function ServiceCard({ index, title, description }: ServiceCardProps) {
  return (
    <article className="service-div reveal">
      <div className="service-card">
        <div className={`service-icon-div service-card-${index}`} aria-hidden="true">
          <span className="service-card-number">{index}</span>
        </div>
        <h3 className="h3-heading">{title}</h3>
        <p className="paragraph">{description}</p>
      </div>
    </article>
  );
}
