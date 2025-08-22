import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Private Tutoring in Hammana, Mount Lebanon
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Boost grades with personalized one-on-one lessons in{" "}
            <Link
              href="services"
              className="text-green-600 underline hover:text-yellow-300"
            >
              <strong>Math</strong>,<strong>English</strong>, and{" "}
              <strong>Science</strong>.
            </Link>{" "}
            In-person sessions in Hammana or online anywhere in Lebanon—tailored
            to your learning objectives, exams and expectations.
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
              Why choose Jabbour tutoring?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
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
            <p className="text-gray-700">
              Prefer studying from home? We also offer{" "}
              <Link
                href="/contact"
                className="text-green-600 underline hover:text-yellow-300"
              >
                online tutoring
              </Link>{" "}
              with the same personalized approach.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow">
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
