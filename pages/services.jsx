import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link"

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Jabbour Tutoring: English, Mathematics and Science lessons</title>
        <meta
          name="description"
          content="Discover our personalized private tutoring services covering English, Math and Science. Available online or in-person for all Lebanese students."
        />
        <meta
        property="og:description"
        content="Private Math, English & Science tutoring in Hammana & Dbayeh. Flexible in-person or online sessions to fit your schedule."
        />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-ivory text-ink font-sans">
        <section className="py-20 px-4 md:px-6 max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gold-600 font-semibold mb-4">
            Services
          </p>
          <div className="mx-auto mb-6 h-px w-16 bg-gold-500" />
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-800 mb-6">
            Our Tutoring Services
          </h1>
          <p className="text-base md:text-lg text-ink/70 mb-14 max-w-3xl mx-auto">
            We offer customized one-on-one tutoring in person or online,
            tailored to meet each student's goals, learning style, and schedule.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
              <h2 className="text-xl font-serif font-semibold text-brand-800 mb-3">
                Online Tutoring
              </h2>
              <p className="text-sm text-ink/60 leading-relaxed">
                Learn from the comfort and convenience of your home! Online private lessons are available for all <Link href="/subjects" className="text-brand-700 underline decoration-gold-500 hover:text-gold-600">subjects</Link> at all levels.
              </p>
            </div>
            <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
              <h2 className="text-xl font-serif font-semibold text-brand-800 mb-3">
                In-Person Tutoring
              </h2>
              <p className="text-sm text-ink/60 leading-relaxed">
                For students in our area, we offer in-person tutoring at Hammana and Dbayeh. For select students, we offer home visits. For students who may require home visits, we kindly ask that you <Link href="/contact" className="text-brand-700 underline decoration-gold-500 hover:text-gold-600">reach out</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
