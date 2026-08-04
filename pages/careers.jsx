import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function CareersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    languages: "",
    skills: "",
    experience: "",
    coverLetter: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-career-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Application sent successfully! We'll be in touch.");
        setForm({
          name: "",
          email: "",
          phone: "",
          languages: "",
          skills: "",
          experience: "",
          coverLetter: "",
        });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Career application error:", err);
      setStatus("Failed to send application.");
    }
  };

  return (
    <>
      <Head>
        <title>Careers at Jabbour Tutoring, Join Our Team</title>
        <meta
          name="description"
          content="Looking to join Jabbour Tutoring? Apply to become a private tutor in Hammana or Dbayeh, Lebanon. Submit your experience, languages, and cover letter."
        />
        <link
          rel="canonical"
          href="https://www.jabbourtutoring.com/careers"
        />
        <meta
          property="og:title"
          content="Careers at Jabbour Tutoring, Join Our Team"
        />
        <meta
          property="og:description"
          content="Apply to join the Jabbour Tutoring team as a private tutor in Hammana or Dbayeh, Lebanon."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.jabbourtutoring.com/careers"
        />
        <meta
          property="og:image"
          content="https://www.jabbourtutoring.com/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Careers at Jabbour Tutoring, Join Our Team"
        />
        <meta
          name="twitter:description"
          content="Apply to join the Jabbour Tutoring team as a private tutor in Hammana or Dbayeh, Lebanon."
        />
        <meta
          name="twitter:image"
          content="https://www.jabbourtutoring.com/logo.png"
        />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-ivory text-ink font-sans">
        <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gold-600 font-semibold mb-4">
            Careers
          </p>
          <div className="mx-auto mb-6 h-px w-16 bg-gold-500" />
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-800 mb-4">
            Join Our Team
          </h1>
          <p className="text-base md:text-lg text-ink/70 mb-12 max-w-2xl mx-auto">
            We're always glad to hear from passionate tutors. Fill out the
            form below to apply — no attachments needed, just tell us about
            yourself.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-brand-900/10 rounded-xl p-8 space-y-6 text-left"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-ink/80 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-brand-900/15 rounded-md focus:ring-2 focus:ring-gold-500/40 focus:border-brand-700 focus:outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-ink/80 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-brand-900/15 rounded-md focus:ring-2 focus:ring-gold-500/40 focus:border-brand-700 focus:outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-ink/80 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-brand-900/15 rounded-md focus:ring-2 focus:ring-gold-500/40 focus:border-brand-700 focus:outline-none"
                placeholder="+961 71 855 369"
                required
              />
            </div>
            <div>
              <label
                htmlFor="languages"
                className="block text-sm font-medium text-ink/80 mb-1"
              >
                Languages You Speak
              </label>
              <input
                type="text"
                id="languages"
                name="languages"
                value={form.languages}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-brand-900/15 rounded-md focus:ring-2 focus:ring-gold-500/40 focus:border-brand-700 focus:outline-none"
                placeholder="e.g. Arabic, English, French"
                required
              />
            </div>
            <div>
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-ink/80 mb-1"
              >
                Skills
              </label>
              <textarea
                id="skills"
                name="skills"
                value={form.skills}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-brand-900/15 rounded-md focus:ring-2 focus:ring-gold-500/40 focus:border-brand-700 focus:outline-none"
                placeholder="e.g. Subjects you can teach, curriculum planning, communication, patience with young learners"
                required
              />
            </div>
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-ink/80 mb-1"
              >
                Tutoring Experience (if any)
              </label>
              <textarea
                id="experience"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-brand-900/15 rounded-md focus:ring-2 focus:ring-gold-500/40 focus:border-brand-700 focus:outline-none"
                placeholder="Tell us about any previous tutoring or teaching experience"
              />
            </div>
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-ink/80 mb-1"
              >
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={form.coverLetter}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-brand-900/15 rounded-md focus:ring-2 focus:ring-gold-500/40 focus:border-brand-700 focus:outline-none"
                placeholder="Tell us why you'd like to join Jabbour Tutoring"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-700 text-ivory py-3 rounded-full font-medium hover:bg-brand-800 transition-colors duration-300"
            >
              Submit Application
            </button>
            {status && (
              <p className="text-center text-sm text-ink/60 mt-2">{status}</p>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
