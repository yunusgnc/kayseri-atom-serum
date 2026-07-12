type SectionTitleProps = {
  eyebrow: string;
  title: string;
  centered?: boolean;
};

export function SectionTitle({ eyebrow, title, centered = false }: SectionTitleProps) {
  return (
    <div className="common-heading-div">
      <div className={`h4-heading ${centered ? "sub-heading-center" : ""}`}>{eyebrow}</div>
      <h2 className={`h2-heading ${centered ? "center-heading" : ""}`}>{title}</h2>
    </div>
  );
}
