// File: components/Footer.tsx
import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-ivory/80 mt-10 border-t border-gold-500/40">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1: Branding */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-ivory mb-2">
            Jabbour Tutoring
          </h3>
          <p className="text-ivory/60 text-sm leading-relaxed">
            Helping students excel with personalized in-person and online
            tutoring across Lebanon.
          </p>
          <SocialLinks className="flex justify-center md:justify-start space-x-4 mt-4 text-ivory/60" iconClassName="w-4 h-4" />
          <p className="mt-4 text-ivory/40 text-xs">
            © {new Date().getFullYear()} Jabbour Tutoring. All rights reserved.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-gold-400 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-gold-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-400 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gold-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-gold-400 transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Tutoring Locations with SEO text */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-gold-400 mb-3">
            Tutoring Locations
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/tutoring-in-hammana"
                className="hover:text-gold-400 transition-colors font-medium"
              >
                Hammana (Baabda District)
              </Link>
              <p className="text-ivory/50 text-xs mt-1">
                Local tutoring in Hammana with flexible timing and schedules.
              </p>
            </li>
            <li>
              <Link
                href="/tutoring-in-Dbayeh"
                className="hover:text-gold-400 transition-colors font-medium"
              >
                Dbayeh (Metn District)
              </Link>
              <p className="text-ivory/50 text-xs mt-1">
                Personalized tutoring in Dbayeh for all lebanese students.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
