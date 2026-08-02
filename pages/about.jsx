// pages/about.tsx
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>The start of Jabbour Tutoring</title>
        <meta
          name="description"
          content="Learn about Jabbour Tutoring, a family-run service offering personalized Math, English, and Science lessons in Hammana and Dbayeh, Lebanon."
        />
        <meta
        property="og:description"
        content="Family-run tutoring service in Hammana & Dbayeh offering tailored Math, English & Science lessons for all Lebanese students."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-ivory text-ink font-sans">
        <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gold-600 font-semibold mb-4">
            About Us
          </p>
          <div className="mx-auto mb-6 h-px w-16 bg-gold-500" />
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-800 mb-6">
            Meet the Tutors
          </h1>
          <h3 className="text-base sm:text-lg text-ink/70 mb-14 max-w-3xl mx-auto">
            Jabbour Tutoring is a newly established tutoring service with
            locations in both Hammana and Dbayeh. Our{" "}
            <Link
              href="/services"
              className="text-brand-700 underline decoration-gold-500 hover:text-gold-600"
            >
              services
            </Link>{" "}
            include{" "}
            <Link
              href="/subjects"
              className="text-brand-700 underline decoration-gold-500 hover:text-gold-600"
            >
              English, Math, and Science{" "}
            </Link>{" "}
            lessons for all grades. Our key focus is always on problem-solving,
            development and academic catch-up. We bring passion, patience, and
            personalized strategies to every lesson.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* James Card */}
            <div className="bg-white border border-brand-900/10 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="w-40 h-40 mb-5 rounded-full overflow-hidden ring-2 ring-gold-500/40">
                <Image
                  src="/james.jpg"
                  alt="James Jabbour tutor"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-lg font-serif font-semibold text-brand-800">
                James Jabbour
              </h2>
              <p className="text-sm text-ink/60 mt-3 leading-relaxed">
                James is a private Mathematics and Physics tutor with over 3
                years of tutoring experience. In his spare time, James enjoys
                studying, reading and working out.
              </p>
            </div>

            {/* Nicole Card */}
            <div className="bg-white border border-brand-900/10 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="w-40 h-40 mb-5 rounded-full overflow-hidden ring-2 ring-gold-500/40">
                <Image
                  src="/nicole.jpg"
                  alt="Nicole Jabbour tutor"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-lg font-serif font-semibold text-brand-800">
                Nicole Jabbour
              </h2>
              <p className="text-sm text-ink/60 mt-3 leading-relaxed">
                Nicole is a private English and Mathematics tutor. As a proud
                graduate from AUST, Nicole holds 2 degrees in teaching, with
                over 7 years of tutoring experience. In her spare time, she
                enjoys writing poetry.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
