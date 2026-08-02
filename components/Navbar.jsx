// File: components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/subjects", label: "Programs" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-sm border-b border-brand-900/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Jabbour Tutoring Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-serif font-semibold text-brand-800">
            Jabbour Tutoring
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-ink/80 hover:text-brand-800 transition-colors duration-200 py-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-brand-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-ivory pb-4 border-t border-brand-900/10">
          <div className="flex flex-col space-y-1 px-6 pt-2">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink/80 hover:text-brand-800 py-2 border-b border-brand-900/5 last:border-none"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
