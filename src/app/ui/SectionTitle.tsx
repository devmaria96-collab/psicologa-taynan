interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string | readonly string[];
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  const paragraphs = description
    ? Array.isArray(description)
      ? description
      : [description]
    : [];

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display text-balance text-[clamp(2.4rem,5.8vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-[var(--color-foreground)]">
        {title}
      </h2>
      {paragraphs.length > 0 && (
        <div className="mt-6 max-w-2xl space-y-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-pretty text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
