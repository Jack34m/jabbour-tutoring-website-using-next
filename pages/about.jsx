// pages/about.tsx
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Jabbour Tutoring</title>
        <meta
          name="description"
          content="Meet the founders of Jabbour Tutoring — a mother-son team offering tailored academic help to Lebanese students. Lebanese official exam help included. High quality private math and physics tutoring."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter]">
        <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-[Playfair Display] font-bold text-green-800 mb-6">
            Meet the Team
          </h1>
          <h3 className="text-base sm:text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Jabbour Tutoring is a private tutoring center proudly co-owned and
            operated by a mother and son team dedicated to helping students rise
            to new academic heights in English, Mathematics, and Physics. We
            bring passion, patience, and personalized strategies to every
            lesson.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* James Card */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/james.jpg"
                  alt="James Jabbour"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-lg font-semibold text-green-800">
                James Jabbour
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Math and Physics tutor. James is a third-year civil engineering
                student at NDU. With over 2 years of tutoring experience, James
                anticipates where students might get stuck and helps them move
                forward.
              </p>
            </div>

            {/* Nicole Card */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/nicole.jpg"
                  alt="Nicole Jabbour"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-lg font-semibold text-green-800">
                Nicole Jabbour
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                English and Math tutor. Nicole holds a graduate degree in
                English and a post-grad in teaching from AUST. She has over 4
                years of tutoring experience and enjoys writing poems in her
                free time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
