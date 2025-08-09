// File: pages/index.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Jabbour Tutoring",
              image: "https://www.jabbourtutoring.com/logo.png",
              url: "https://www.jabbourtutoring.com",
              telephone: "+961 71 855 369",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hammana",
                addressCountry: "LB",
                addressRegion: "Mount Lebanon",
                postalCode: "1234",
                streetAddress: "Main Street",
              },
              priceRange: "$$",
              description:
                "Jabbour Tutoring provides expert Math, English, and Physics tutoring for students of all levels across Lebanon.",
              areaServed: {
                "@type": "Place",
                name: "Lebanon",
              },
              founder: {
                "@type": "Person",
                name: "James Jabbour",
              },
            }),
          }}
        />
        <title>Jabbour Tutoring | Personalized Tutoring in Lebanon</title>
        <meta
          name="description"
          content="Math, English, and Physics tutoring for students across Lebanon, Hammana. Personalized support for elementary to high school. Private tutoring across Lebanon"
        />
        <meta
          name="keywords"
          content="tutoring, Lebanon, math tutor, English, physics, high school tutor, Beirut"
        />
        <meta
          property="og:title"
          content="Jabbour Tutoring | Personalized Tutoring in Lebanon"
        />
        <meta
          property="og:description"
          content="Personalized support in Math, English, and Physics for students across Lebanon."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jabbourtutoring.com/" />
        <meta
          property="og:image"
          content="https://www.jabbourtutoring.com/logo.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main className="w-full min-h-screen bg-gray-50 text-gray-800 font-inter">
        {/* Hero Section */}
        <section className="w-full py-24 px-6 text-center bg-gradient-to-b from-green-100 to-white sm:px-8 md:px-0">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-playfair font-bold text-green-800 mb-4 animate-fade-in">
              Welcome to Jabbour Tutoring, for all students across Lebanon.
            </h1>
            <h3 className="text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in delay-150">
              Personalized tutoring in English, Mathematics, and Physics,
              available both in person and online. We help students overcome
              academic hurdles to rise far above their peers.
            </h3>
            <div className="mt-6 animate-fade-in delay-300">
              <a
                href="/contact"
                className="inline-block bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 transition duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Featured Stock Image */}
        <section className="py-12 bg-white text-center">
          {/* <div className="max-w-4xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1600195077073-3be06a6d1d2c?auto=format&fit=crop&w=1280&q=80"
              alt="Students learning with Jabbour Tutoring in Lebanon"
              width={1280}
              height={720}
              className="rounded-lg shadow-lg mx-auto"
            />
            <p className="mt-4 text-sm text-gray-500"></p>
          </div> */}
        </section>

        {/* Social Icons Placeholder */}
        <section className="py-10 bg-white text-center">
          <h3 className="text-2xl font-semibold mb-4 font-playfair">
            Follow Us on Instagram, Facebook and LinkedIn.
          </h3>
          <div className="flex justify-center space-x-6 text-gray-600 text-2xl">
            <a href="#" aria-label="Instagram" className="hover:text-green-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-green-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-green-700">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p className="mt-2 text-sm text-gray-500 italic">
            (Links coming soon)
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
