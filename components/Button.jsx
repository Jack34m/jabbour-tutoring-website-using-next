// File: components/Button.jsx
import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-brand-700 text-ivory hover:bg-brand-800 border border-brand-700",
  secondary:
    "bg-transparent text-brand-700 border border-brand-700/40 hover:border-brand-700 hover:bg-brand-50",
  gold: "bg-transparent text-gold-600 border border-gold-500/50 hover:bg-gold-500/10",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-block px-6 py-3 rounded-full font-medium tracking-wide transition-colors duration-300 ${VARIANTS[variant]} ${className}`;

  // tel:, mailto:, and absolute http(s) links should be plain anchors —
  // next/link's client-side routing only makes sense for in-app paths.
  const isExternal = href && /^(tel:|mailto:|https?:)/.test(href);

  if (href && isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
