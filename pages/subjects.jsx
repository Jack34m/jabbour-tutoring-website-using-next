import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SubjectsPage() {
  return (
    <>
      <Head>
        <title>English, Mathematics and Science roadmaps</title>
        <meta
          name="description"
          content="Explore the subjects we cover for all Lebanese students. English, Math and Physics lessons are available in person or online."
        />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter]">
        <section className="py-20 px-4 md:px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-[Playfair Display] font-bold text-green-800 mb-6">
            Subjects We Teach
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            At Jabbour Tutoring, we offer expert guidance in Math, English, and
            Physics. Whether you're preparing for exams, looking to catch up
            academically, or just wanting to boost your confidence, we're here
            to help.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                Mathematics
              </h2>
              <p className="text-sm text-gray-600">
                We cover all elementary, middle school and high-school
                mathematics. The most popular areas of math tutoring among our
                clients are algebra, geometry,trigonometry, and calculus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                English
              </h2>
              <p className="text-sm text-gray-600">
                We offer a wide-range of English services for non-native English
                speakers and beginners. Our program focusses primarily on
                reading, writing, grammar, pronunciation and literature.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                Physics
              </h2>
              <p className="text-sm text-gray-600">
                We offer Physics for all middle school and high school students.
                Our Physics program follows that of the Lebanese cirriculum. The
                most popular service among our clients is the Physics official
                exam preparation roadmap.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
