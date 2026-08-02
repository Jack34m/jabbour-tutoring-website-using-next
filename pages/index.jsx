// File: pages/index.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
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
              sameAs: [
                "https://www.instagram.com/jabbour_tutoring_lb/",
                "https://www.facebook.com/profile.php?id=61592028136397",
                "https://www.youtube.com/@JabbourTutoring",
                "https://x.com/Jabbourtutoring",
                "https://www.linkedin.com/company/108147552/",
              ],
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
                "SAT Preparation",
                "Lebanese Baccalaureate Preparation",
                "Brevet Exam Preparation",
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
      </Head>
      <Navbar />
      <main className="w-full min-h-screen bg-ivory text-ink font-sans">
        {/* Hero Section */}
        <section className="w-full py-24 px-6 text-center bg-gradient-to-b from-brand-50 to-ivory sm:px-8 md:px-0">
          <div className="max-w-5xl mx-auto">
            <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gold-600 font-semibold mb-4 animate-fade-in">
              Hammana &amp; Dbayeh, Lebanon
            </p>
            <div className="mx-auto mb-6 h-px w-16 bg-gold-500 animate-fade-in" />
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-brand-800 mb-6 leading-tight animate-fade-in">
              Welcome to Jabbour Tutoring, a private tutoring service for
              Lebanese students.
            </h1>
            <h3 className="text-lg sm:text-xl text-ink/70 font-normal max-w-2xl mx-auto animate-fade-in delay-150">
              We offer{" "}
              <Link
                href="/services"
                className="text-brand-700 underline decoration-gold-500 hover:text-gold-600"
              >
                personalized tutoring in English, Mathematics, and Science,{" "}
              </Link>{" "}
              available both in person and online. Through one-on-one tutoring,
              we help students overcome academic hurdles to rise far above their
              peers. You can learn more about us{" "}
              <Link
                href="/about"
                className="text-brand-700 underline decoration-gold-500 hover:text-gold-600"
              >
                here
              </Link>
              .
            </h3>
            <div className="mt-8 animate-fade-in delay-300">
              <Button href="/contact">Get Started</Button>
            </div>
          </div>
        </section>

        {/* Why Jabbour Tutoring */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-800 text-center mb-14">
              Why Families Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
              {[
                {
                  title: "Truly One-on-One",
                  body: "Every lesson is tailored to your child's pace, goals, and learning style — never a one-size-fits-all classroom.",
                },
                {
                  title: "In-Person or Online",
                  body: "Meet us in Hammana or Dbayeh, or join from anywhere in Lebanon through flexible online sessions.",
                },
                {
                  title: "Real Progress Tracking",
                  body: "Clear, measurable goals and regular parent updates so you always know how your student is progressing.",
                },
              ].map((item) => (
                <div key={item.title} className="px-4">
                  <div className="mx-auto mb-5 h-px w-10 bg-gold-500" />
                  <h3 className="text-lg font-serif font-semibold text-brand-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/60 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Preview */}
        <section className="py-20 px-6 bg-brand-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-800 mb-4">
              Programs We Prepare You For
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto mb-12">
              We tutor all subjects — and specialize in preparing students for
              the exams and curricula that matter most.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {["SAT", "Lebanese Baccalaureate", "Brevet"].map((program) => (
                <div
                  key={program}
                  className="bg-white border border-brand-900/10 rounded-xl p-8 hover:border-gold-500/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-serif font-semibold text-brand-800">
                    {program}
                  </h3>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/subjects" variant="secondary">
                Explore Programs &amp; Subjects
              </Button>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-800 mb-12">
              Tutoring Locations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/tutoring-in-hammana"
                className="block bg-ivory border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-serif font-semibold text-brand-800 mb-2">
                  Hammana
                </h3>
                <p className="text-sm text-ink/60">
                  Baabda District, Mount Lebanon — in-person &amp; online
                  lessons.
                </p>
              </Link>
              <Link
                href="/tutoring-in-Dbayeh"
                className="block bg-ivory border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-serif font-semibold text-brand-800 mb-2">
                  Dbayeh
                </h3>
                <p className="text-sm text-ink/60">
                  Metn District, Mount Lebanon — in-person &amp; online
                  lessons.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Social Icons */}
        <section className="py-16 px-6 bg-brand-900 text-center">
          <h3 className="text-xl font-serif font-semibold mb-6 text-ivory">
            Follow Us
          </h3>
          <SocialLinks className="flex justify-center space-x-6 text-ivory/70" />
        </section>
      </main>
      <Footer />
    </>
  );
}
