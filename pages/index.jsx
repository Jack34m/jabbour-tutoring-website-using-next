// File: pages/index.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": [
                "EducationalOrganization",
                "LocalBusiness",
                "ProfessionalService",
              ],
              name: "Jabbour Tutoring",
              image: "https://www.jabbourtutoring.com/logo.png",
              url: "https://www.jabbourtutoring.com",
              hasPart: [
                {
                  "@type": "WebPage",
                  url: "https://www.jabbourtutoring.com/about",
                  name: "About Us",
                },
                {
                  "@type": "WebPage",
                  url: "https://www.jabbourtutoring.com/subjects",
                  name: "Our Subjects",
                },
                {
                  "@type": "WebPage",
                  url: "https://www.jabbourtutoring.com/services",
                  name: "Our Math, English and Science Services.",
                },
                {
                  "@type": "WebPage",
                  url: "https://www.jabbourtutoring.com/blog",
                  name: "Our Blog Page",
                },
                {
                  "@type": "WebPage",
                  url: "https://www.jabbourtutoring.com/contact",
                  name: "Our Contact Page",
                },
              ],
              telephone: ["+961 71 855 369", "+961 70 278 248"],
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Hammana",
                  addressCountry: "LB",
                  addressRegion: "Mount Lebanon",
                  postalCode: "1234",
                  streetAddress: "Main Street",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Dbayeh",
                  addressCounty: "LB",
                  addressRegion: "Metn",
                  postalCode: "2314",
                  streetAddress: "Chruch of Our Lady of the cave street",
                },
              ],
              priceRange: "$8 - $12",
              description:
                "Jabbout Tutoring is a private tutoring service that offers private lessons in Math, English, and Science for all Lebanese Students. We offer in-person tutoring at Hammana and Dbayeh. For students outside of these areas, we offer online tutoring.",
              areaServed: [
                {
                  "@type": "Place",
                  name: "Hammana, Baabda Disctrict, Mount Lebanon, Lebanon",
                },
                {
                  "@type": "Place",
                  name: "Dbaye, Matn District, Mount Lebanon, Lebanon",
                },
              ],
              founder: [
                {
                  "@type": "Person",
                  name: "James Jabbour",
                },
                {
                  "@type": "Person",
                  name: "Nicole Jabbour",
                },
              ],
              serviceType: [
                "Private Math Tutoring",
                "Private English Tutoring",
                "Private Science Tutoring",
                "Online Tutoring",
              ],
              offers: {
                "@type": "Offer",
                name: "Private Tutoring Sessions",
                description:
                  "One on one private lessons in Math, English, and Science for all Lebanese students.",
                price: "8-12",
                priceCurrency: "USD",
                eligibleRegion: [
                  {
                    "@type": "Place",
                    name: "Lebanon",
                  },
                ],
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
        <title>Jabbour Tutoring, Private tutor in Hammana and Dbaye</title>
        <meta
          name="description"
          content="Private Math, English, and Science tutoring in Hammana and Dbayeh, Lebanon. One-on-one lessons in person or online for all Lebanese students."
        />
        <meta
          property="og:title"
          content="Jabbour Tutoring, Personalized Tutoring in Hammana and Dbayeh."
        />
        <meta
          property="og:description"
          content="Expert Math, English & Science tutoring in Hammana & Dbayeh. In-person & online lessons for all ages across Lebanon."
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
              Welcome to Jabbour Tutoring, a private tutoring service for
              Lebanese students.
            </h1>
            <h3 className="text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in delay-150">
              We offer{" "}
              <Link
                href="/services"
                className="text-green-600 underline hover:text-yellow-300"
              >
                personalized tutoring in English, Mathematics, and Science,{" "}
              </Link>{" "}
              available both in person and online. Through one-on-one tutoring,
              we help students overcome academic hurdles to rise far above their
              peers. You can learn more about us{" "}
              <Link
                href="/about"
                className="text-green-600 underline hover:text-yellow-300"
              >
                here
              </Link>
              .
            </h3>
            <div className="mt-6 animate-fade-in delay-300">
              <a
                href="/contact"
                className="inline-block bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 transition duration-300"
              >
                Get Started!
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
