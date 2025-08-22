import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
                "https://www.instagram.com/yourhandle",
                "https://www.facebook.com/yourhandle",
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

      <main className="mx-auto px-6 py-12 w-full bg-gradient-to-b from-green-100 to-white ">
        <section className="text-center ">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Private Tutoring in Dbayeh, Metn
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Get effective one-on-one support in <Link href="/services" className="text-green-600 underline hover:text-yellow-300"><strong>Math</strong>,{" "}
            <strong>English</strong>, and <strong>Science</strong></Link> with flexible
            in-person sessions in Dbayeh or online lessons anywhere in Lebanon.
            Learn at your time, on your pace.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${phone}`}
              className="px-6 py-3 rounded-xl shadow-sm border text-base font-semibold hover:opacity-90"
            >
              Call {phone.replace("+961", "+961 ")}
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl shadow-sm border text-base font-semibold hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl shadow-sm border text-base font-semibold hover:opacity-90"
            >
              Book a Free Consultation
            </Link>
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Why choose Jabbour Tutoring?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Personalized plans for school curriculum & exams.</li>
              <li>Clear progress tracking and parent updates.</li>
              <li>Practice tests and homework available upon request.</li>
              <li>Evening and weekend availability. (For urgent cases Sundays are always available!)</li>
              <li>Customer loyalty programs</li>
              <li>Option to switch between in-person and online anytime.</li>
            </ul>
            <p className="text-gray-700">
              Want subject details? See our{" "}
              <Link href="/services" className="text-green-600 underline hover:text-yellow-300">
                services
              </Link>{" "}
              or{" "}
              <Link href="/blog" className="text-green-600 underline hover:text-yellow-300">
                blog
              </Link>{" "}
              for study tips and guides.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow">
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
