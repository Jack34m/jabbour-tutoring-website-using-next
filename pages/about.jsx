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

      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter]">
        <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-[Playfair Display] font-bold text-green-800 mb-6">
            Meet the Tutors
          </h1>
          <h3 className="text-base sm:text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Jabbour Tutoring is a newly established tutoring service with
            locations in both Hammana and Dbayeh. Our{" "}
            <Link
              href="/services"
              className="text-green-600 underline hover:text-yellow-300"
            >
              services
            </Link>{" "}
            include{" "}
            <Link
              href="/subjects"
              className="text-green-600 underline hover:text-yellow-300"
            >
              English, Math, and Science{" "}
            </Link>{" "}
            lessons for all grades. Our key focus is always on problem-solving,
            development and academic catch-up. We bring passion, patience, and
            personalized strategies to every lesson.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* James Card */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/james.jpg"
                  alt="James Jabbour tutor"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-lg font-semibold text-green-800">
                James Jabbour
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                James is a private Mathematics and Physics tutor with over 3
                years of tutoring experience. In his spare time, James enjoys
                studying, reading and working out.
              </p>
            </div>

            {/* Nicole Card */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/nicole.jpg"
                  alt="Nicole Jabbour tutor"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-lg font-semibold text-green-800">
                Nicole Jabbour
              </h2>
              <p className="text-sm text-gray-600 mt-2">
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
