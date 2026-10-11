import Link from "next/link";

const variants = {
  primary:
    "bg-navy text-white shadow-[0_10px_24px_rgba(3,105,161,0.18)] hover:-translate-y-0.5 hover:bg-navy-deep",
  secondary:
    "bg-red-900 text-white shadow-lg shadow-red-900/15 hover:-translate-y-0.5 hover:bg-red-950",
  outline:
    "border border-slate-300 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white",
};

const baseClass =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2";

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...props
}) {
  const classes = `${baseClass} ${variants[variant] ?? variants.primary} ${className}`;

  if (href) {
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
