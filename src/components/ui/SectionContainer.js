export default function SectionContainer({
  id,
  as: Tag = "section",
  eyebrow,
  title,
  description,
  children,
  className = "",
  contentClassName = "",
}) {
  return (
    <Tag id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${contentClassName}`}>
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-3xl sm:mb-12">
            {eyebrow ? (
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-navy">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-body/90 sm:text-lg sm:leading-8">
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </Tag>
  );
}
