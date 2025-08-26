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

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Blog</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <div
              key={post.slug}
              className="border rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 flex-grow">
                  {post.description
                    ? post.description.slice(0, 120) + "..."
                    : "Read more about this topic."}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
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
