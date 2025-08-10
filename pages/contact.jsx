import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter]">
        <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-[Playfair Display] font-bold text-green-800 mb-4">
            Feel free to Contact Us by WhatsApp or Email
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            📞 WhatsApp:{" "}
            <a
              href="https://wa.me/96171855369"
              target="_blank"
              className="text-green-700 font-semibold hover:underline"
            >
              +961 71 855 369
            </a>
            <br></br>
            <a
              href="https://wa.me/96171855369"
              target="_blank"
              className="text-green-700 font-semibold hover:underline"
            >
              +961 70 278 248
            </a>
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-10">
            📧 Email:{" "}
            <a
              href="mailto:JamesJabbour88@gmail.com"
              className="text-green-700 font-semibold hover:underline"
            >
              jabbourtutoring@gmail.com
            </a>
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 space-y-6 text-left"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
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
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition duration-300"
            >
              Send Message
            </button>
            {status && (
              <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
