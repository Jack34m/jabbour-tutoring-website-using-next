import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAllPosts } from "../../lib/posts";

export default function Blog({ allPosts }: { allPosts: any[] }) {
  const siteUrl = "https://www.jabbourtutoring.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Jabbour Tutoring Blog",
    description:
      "Educational tips, tutoring strategies, and academic success guides from Jabbour Tutoring in Hammana and Dbayeh.",
    itemListElement: allPosts.map((post, index) => ({
      "@type": "BlogPosting",
      position: index + 1,
      headline: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      image: post.coverImage
        ? `${siteUrl}${post.coverImage}`
        : `${siteUrl}/logo.png`,
      author: {
        "@type": "Organization",
        name: "Jabbour Tutoring",
      },
    })),
  };

  return (
    <>
      <Head>
        <title>Our Blog | Jabbour Tutoring</title>
        <meta
          name="description"
          content="Read our latest articles on private tutoring, study strategies, and academic success tips in Lebanon."
        />
      </Head>

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-16 bg-ivory">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gold-600 font-semibold mb-4">
            Insights
          </p>
          <div className="mx-auto mb-6 h-px w-16 bg-gold-500" />
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-800">
            Our Blog
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white border border-brand-900/10 rounded-xl hover:border-gold-500/50 transition-colors duration-300 overflow-hidden flex flex-col"
            >
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-serif font-semibold mb-2 text-brand-800">
                  <Link href={`/blog/${post.slug}`} className="hover:text-gold-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-ink/40 text-sm mb-3">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="text-ink/60 flex-grow text-sm leading-relaxed">
                  {post.description
                    ? post.description.slice(0, 120) + "..."
                    : "Read more about this topic."}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-brand-700 hover:text-gold-600 font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return { props: { allPosts } };
}
