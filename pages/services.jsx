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
      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter]">
        <section className="py-20 px-4 md:px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-[Playfair Display] font-bold text-green-800 mb-6">
            Our Tutoring Services
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            We offer customized one-on-one tutoring in person or online,
            tailored to meet each student's goals, learning style, and schedule.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                Online Tutoring
              </h2>
              <p className="text-sm text-gray-600">
                Learn from the comfort and convenience of your home! Online private lessons are available for all <Link href="/subjects" className="text-green-600 underline hover:text-yellow-300">subjects</Link> at all levels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                In-Person Tutoring
              </h2>
              <p className="text-sm text-gray-600">
                For students in our area, we offer in-person tutoring at Hammana and Dbayeh. For select students, we offer home visits. For students who may require home visits, we kindly ask that you <Link href="/contact" className="text-green-600 underline hover:text-yellow-300">reach out</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
