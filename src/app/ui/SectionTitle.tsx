interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
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

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h1 className="font-display text-balance text-[clamp(2.7rem,7vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-[var(--color-foreground)]">
        {title}
      </h1>
      {description && (
        <p className="text-pretty mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
