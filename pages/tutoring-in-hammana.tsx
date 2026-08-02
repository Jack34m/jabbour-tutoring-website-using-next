import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function TutoringInHammana() {
  const phone = "+96171855369";
  const whatsapp =
    "https://wa.me/96171855369?text=Hi%20Jabbour%20Tutoring%20—%20I%27m%20interested%20in%20lessons";

  return (
    <>
      <Head>
        <title>Private Tutoring in Hammana for Math, English & Science</title>
        <meta
          name="description"
          content="One-on-one private tutoring in Hammana for Math, English, and Science. Flexible scheduling, in-person or online. Book a free consultation today."
        />
        {/* LocalBusiness schema for this location */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": [
                "LocalBusiness",
                "EducationalOrganization",
                "ProfessionalService",
              ],
              name: "Jabbour Tutoring — Hammana",
              url: "https://www.jabbourtutoring.com/tutoring-in-hammana",
              areaServed: { "@type": "Place", name: "Hammana, Mount Lebanon" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hammana",
                addressRegion: "Mount Lebanon",
                addressCountry: "LB",
              },
              telephone: ["+961 71 855 369", "+961 70 278 248"],
              sameAs: [
                "https://www.instagram.com/jabbour_tutoring_lb/",
                "https://www.facebook.com/profile.php?id=61592028136397",
                "https://www.youtube.com/@JabbourTutoring",
                "https://x.com/Jabbourtutoring",
                "https://www.linkedin.com/company/108147552/",
              ],
              serviceType: [
                "Math Tutoring",
                "English Tutoring",
                "Science Tutoring",
              ],
            }),
          }}
        />
      </Head>

      <Navbar />

      <main className="mx-auto px-6 py-16 w-full bg-ivory text-ink">
        <section className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gold-600 font-semibold mb-4">
            Hammana, Mount Lebanon
          </p>
          <div className="mx-auto mb-6 h-px w-16 bg-gold-500" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-brand-800">
            Private Tutoring in Hammana, Mount Lebanon
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink/70">
            Boost grades with personalized one-on-one lessons in{" "}
            <Link
              href="/services"
              className="text-brand-700 underline decoration-gold-500 hover:text-gold-600"
            >
              <strong>Math</strong>, <strong>English</strong>, and{" "}
              <strong>Science</strong>
            </Link>
            . In-person sessions in Hammana or online anywhere in Lebanon—tailored
            to your learning objectives, exams and expectations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`tel:${phone}`} variant="secondary">
              Call {phone.replace("+961", "+961 ")}
            </Button>
            <Button href={whatsapp} target="_blank" rel="noopener noreferrer" variant="secondary">
              Chat on WhatsApp
            </Button>
            <Button href="/contact">Book a Free Consultation</Button>
          </div>
        </section>

        <section className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h2 className="text-2xl font-serif font-semibold text-brand-800">
              Why choose Jabbour tutoring?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-ink/70">
              <li>
                Structured lesson plans aligned with your school curriculum.
              </li>
              <li>Exam prep for midterms, finals, SAT foundations.</li>
              <li>
                Flexible scheduling (after-school & weekends) (For urgent cases
                Sunday is always available).
              </li>
              <li>
                Progress tracking with clear, measurable goals. Parent updates
                are included.
              </li>
              <li>Practice tests and homework are available upon request.</li>
              <li>Customer loyalty programs.</li>
            </ul>
            <p className="text-ink/70">
              Prefer studying from home? We also offer{" "}
              <Link
                href="/contact"
                className="text-brand-700 underline decoration-gold-500 hover:text-gold-600"
              >
                online tutoring
              </Link>{" "}
              with the same personalized approach.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-brand-900/10">
            {/* Placeholder Google Map embed for Hammana */}
            <iframe
              title="Hammana Map"
              src="https://www.google.com/maps?q=Hammana%2C%20Lebanon&z=13&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
