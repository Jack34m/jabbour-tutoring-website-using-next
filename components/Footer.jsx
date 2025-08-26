// File: components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-10 py-10 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Branding */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Jabbour Tutoring
          </h3>
          <p className="text-gray-500">
            Helping students excel with personalized in-person and online
            tutoring across Lebanon.
          </p>
          <p className="mt-3 text-gray-400">
            © {new Date().getFullYear()} Jabbour Tutoring. All rights reserved.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-2">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Tutoring Locations with SEO text */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-2">
            Tutoring Locations
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/tutoring-in-hammana"
                className="hover:text-blue-600 font-medium"
              >
                Hammana (Baabda District)
              </Link>
              <p className="text-gray-500 text-xs mt-1">
                Local tutoring in Hammana with flexible timing and schedules.
              </p>
            </li>
            <li>
              <Link
                href="/tutoring-in-Dbayeh"
                className="hover:text-blue-600 font-medium"
              >
                Dbayeh (Metn District)
              </Link>
              <p className="text-gray-500 text-xs mt-1">
                Personalized tutoring in Dbayeh for all lebanese students.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
