// File: components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Jabbour Tutoring Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-semibold text-green-800">
            Jabbour Tutoring
          </span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-green-700">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-700">
            About
          </Link>
          <Link href="/subjects" className="text-gray-700 hover:text-green-700">
            Subjects
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-green-700">
            Services
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-green-700">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-700">
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
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
        <div className="md:hidden bg-white mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3 px-4">
            <Link href="/" className="text-gray-700 hover:text-green-700 py-2">
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-700 py-2"
            >
              About
            </Link>
            <Link
              href="/subjects"
              className="text-gray-700 hover:text-green-700 py-2"
            >
              Subjects
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-700 py-2"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-green-700 py-2"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-700 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
