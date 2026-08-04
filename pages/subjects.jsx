import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SubjectsPage() {
  return (
    <>
      <Head>
        <title>SAT, IB, AP, GCSE, Brevet &amp; Baccalaureate Tutoring</title>
        <meta
          name="description"
          content="Jabbour Tutoring prepares students for the SAT, Brevet, Lebanese Baccalaureate, GCSE, IB, and AP exams, and covers all school subjects in person or online."
        />
        <link
          rel="canonical"
          href="https://www.jabbourtutoring.com/subjects"
        />
        <meta
          property="og:title"
          content="SAT, IB, AP, GCSE, Brevet & Baccalaureate Tutoring"
        />
        <meta
          property="og:description"
          content="Jabbour Tutoring prepares students for the SAT, Brevet, Lebanese Baccalaureate, GCSE, IB, and AP exams, and covers all school subjects in person or online."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.jabbourtutoring.com/subjects"
        />
        <meta
          property="og:image"
          content="https://www.jabbourtutoring.com/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SAT, IB, AP, GCSE, Brevet & Baccalaureate Tutoring"
        />
        <meta
          name="twitter:description"
          content="Jabbour Tutoring prepares students for the SAT, Brevet, Lebanese Baccalaureate, GCSE, IB, and AP exams, and covers all school subjects in person or online."
        />
        <meta
          name="twitter:image"
          content="https://www.jabbourtutoring.com/logo.png"
        />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-ivory text-ink font-sans">
        <section className="py-20 px-4 md:px-6 max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gold-600 font-semibold mb-4">
            Programs
          </p>
          <div className="mx-auto mb-6 h-px w-16 bg-gold-500" />
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-800 mb-6">
            Programs We Prepare You For
          </h1>
          <p className="text-base md:text-lg text-ink/70 mb-14 max-w-3xl mx-auto">
            We tutor all subjects, with a special focus on the exams and
            curricula that shape a student's academic future. Whether you're
            preparing for a major exam, catching up academically, or building
            confidence, we're here to help.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
              <h2 className="text-xl font-serif font-semibold text-brand-800 mb-3">
                SAT
              </h2>
              <p className="text-sm text-ink/60 leading-relaxed">
                Focused SAT preparation covering Math, Reading, and Writing,
                with practice tests and strategies tailored to each student's
                target score. Our students regularly score 1400+.
              </p>
            </div>
            <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
              <h2 className="text-xl font-serif font-semibold text-brand-800 mb-3">
                Brevet
              </h2>
              <p className="text-sm text-ink/60 leading-relaxed">
                Comprehensive Brevet exam preparation to help middle school
                students build strong fundamentals and exam confidence. Our students regularly see scores of 16+/20
              </p>
            </div>
            <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
              <h2 className="text-xl font-serif font-semibold text-brand-800 mb-3">
                Lebanese Baccalaureate
              </h2>
              <p className="text-sm text-ink/60 leading-relaxed">
                Structured preparation for the official Lebanese Baccalaureate
                exams, aligned with the Lebanese curriculum across all
                sections. Our students regularly score 15+/20 on the official exams.
              </p>
            </div>
            <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
              <h2 className="text-xl font-serif font-semibold text-brand-800 mb-3">
                GCSE
              </h2>
              <p className="text-sm text-ink/60 leading-relaxed">
                Support across GCSE coursework and exams, building strong
                foundations for further study in core and elective subjects.
              </p>
            </div>
            <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
              <h2 className="text-xl font-serif font-semibold text-brand-800 mb-3">
                International Baccalaureate (IB)
              </h2>
              <p className="text-sm text-ink/60 leading-relaxed">
                Guidance through the IB Diploma Programme, from coursework and
                internal assessments to final exam preparation.
              </p>
            </div>
            <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
              <h2 className="text-xl font-serif font-semibold text-brand-800 mb-3">
                Advanced Placement (AP)
              </h2>
              <p className="text-sm text-ink/60 leading-relaxed">
                AP exam preparation across a range of subjects, helping
                students earn college credit and stand out in applications. Our students regularly excel at AP Chemistry and AP Mathematics.
              </p>
            </div>
          </div>
        </section>

        {/* Core Subjects — supporting section */}
        <section className="py-20 px-4 md:px-6 bg-brand-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-semibold text-brand-800 mb-4">
              Core Subjects We Cover
            </h2>
            <p className="text-base text-ink/70 mb-12 max-w-3xl mx-auto">
              Every program is built on a strong foundation. We offer expert
              guidance in Math, English, Physics, and Chemistry for every grade level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
                <h3 className="text-lg font-serif font-semibold text-brand-800 mb-3">
                  Mathematics
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  We cover all elementary, middle school and high-school
                  mathematics. The most popular areas of math tutoring among
                  our clients is calculus.
                </p>
              </div>
              <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
                <h3 className="text-lg font-serif font-semibold text-brand-800 mb-3">
                  English
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  We offer a wide-range of English services for 
                  English speakers at all levels. Our program focusses
                  primarily on reading, writing, grammar, pronunciation and
                  literature.
                </p>
              </div>
              <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
                <h3 className="text-lg font-serif font-semibold text-brand-800 mb-3">
                  Physics
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  We offer Physics for all middle school and high school
                  students as well as University students in select courses. Our Physics program follows that of the Lebanese
                  curriculum, and the most popular service among our clients
                  is the Physics official exam preparation roadmap.
                </p>
              </div>
              <div className="bg-white border border-brand-900/10 rounded-xl p-8 text-left hover:border-gold-500/50 transition-colors duration-300">
                <h3 className="text-lg font-serif font-semibold text-brand-800 mb-3">
                  Chemistry
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  We offer Chemistry tutoring for middle school and high
                  school students. Chemistry at the University level is available for specific courses.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
