import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function TutoringInDbayeh() {
  const phone = "+96170278248";
  const whatsapp =
    "https://wa.me/96170278248?text=Hi%20Jabbour%20Tutoring%20—%20I%27m%20interested%20in%20lessons";

  return (
    <>
      <Head>
        <title>Private Tutoring in Dbayeh for Math, English & Science</title>
        <meta
          name="description"
          content="Personalized tutoring in Dbayeh for Math, English, and Science. One-on-one lessons, flexible timings, and online options. Book a free consultation."
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
              name: "Jabbour Tutoring — Dbayeh",
              url: "https://www.jabbourtutoring.com/tutoring-in-dbayeh",
              areaServed: { "@type": "Place", name: "Dbayeh, Mount Lebanon" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dbayeh",
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
            Dbayeh, Metn
          </p>
          <div className="mx-auto mb-6 h-px w-16 bg-gold-500" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-brand-800">
            Private Tutoring in Dbayeh, Metn
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink/70">
            Get effective one-on-one support in <Link href="/services" className="text-brand-700 underline decoration-gold-500 hover:text-gold-600"><strong>Math</strong>,{" "}
            <strong>English</strong>, and <strong>Science</strong></Link> with flexible
            in-person sessions in Dbayeh or online lessons anywhere in Lebanon.
            Learn at your time, on your pace.
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
              Why choose Jabbour Tutoring?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-ink/70">
              <li>Personalized plans for school curriculum & exams.</li>
              <li>Clear progress tracking and parent updates.</li>
              <li>Practice tests and homework available upon request.</li>
              <li>Evening and weekend availability. (For urgent cases Sundays are always available!)</li>
              <li>Customer loyalty programs</li>
              <li>Option to switch between in-person and online anytime.</li>
            </ul>
            <p className="text-ink/70">
              Want subject details? See our{" "}
              <Link href="/services" className="text-brand-700 underline decoration-gold-500 hover:text-gold-600">
                services
              </Link>{" "}
              or{" "}
              <Link href="/blog" className="text-brand-700 underline decoration-gold-500 hover:text-gold-600">
                blog
              </Link>{" "}
              for study tips and guides.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-brand-900/10">
            {/* Placeholder Google Map embed for Dbayeh (Dbaye) */}
            <iframe
              title="Dbayeh Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d554.1168947397455!2d35.607636406878065!3d33.93956355818124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2slb!4v1755369684165!5m2!1sen!2slb"
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
