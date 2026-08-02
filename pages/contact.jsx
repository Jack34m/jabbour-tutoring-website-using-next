import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Email error:", err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <>
      <Head>
        <title>
          Contact us at Jabbour Tutoring, based in Hammana and Dbayeh
        </title>
        <meta
          name="description"
          content="Feel free to reach out to us by what's up or email. Get your free consultation today for any private lessons in mathematics, science, and english. "
        />
        <meta
        property="og:description"
        content="Get in touch for private Math, English & Science lessons in Hammana & Dbayeh. In-person & online tutoring available."
        />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-ivory text-ink font-sans">
        <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gold-600 font-semibold mb-4">
            Contact
          </p>
          <div className="mx-auto mb-6 h-px w-16 bg-gold-500" />
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-800 mb-4">
            Feel free to Contact Us by WhatsApp or Email
          </h1>
          <p className="text-base md:text-lg text-ink/70 mb-6">
            📞 WhatsApp:{" "}
            <a
              href="https://wa.me/96171855369"
              target="_blank"
              className="text-brand-700 font-semibold hover:text-gold-600"
            >
              +961 71 855 369
            </a>
            <br></br>
            <a
              href="https://wa.me/96171855369"
              target="_blank"
              className="text-brand-700 font-semibold hover:text-gold-600"
            >
              +961 70 278 248
            </a>
          </p>
          <p className="text-base md:text-lg text-ink/70 mb-12">
            📧 Email:{" "}
            <a
              href="mailto:JamesJabbour88@gmail.com"
              className="text-brand-700 font-semibold hover:text-gold-600"
            >
              jabbourtutoring@gmail.com
            </a>
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
                htmlFor="subject"
                className="block text-sm font-medium text-ink/80 mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-brand-900/15 rounded-md focus:ring-2 focus:ring-gold-500/40 focus:border-brand-700 focus:outline-none"
                required
              >
                <option value="">Select a Subject</option>
                <option value="math">Mathematics</option>
                <option value="english">English</option>
                <option value="physics">Physics</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink/80 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-brand-900/15 rounded-md focus:ring-2 focus:ring-gold-500/40 focus:border-brand-700 focus:outline-none"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-700 text-ivory py-3 rounded-full font-medium hover:bg-brand-800 transition-colors duration-300"
            >
              Send Message
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
