import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt?: string;
};

type BlogProps = {
  allPostsData: Post[];
};

export default function Blog({ allPostsData }: BlogProps) {
  return (
    <>
      <Head>
        <title>Our Blog | Jabbour Tutoring</title>
        <meta
          name="description"
          content="Education tips, study strategies, and subject roadmaps from Jabbour Tutoring. Resources for students in Hammana, Dbayeh, and across Lebanon."
        />
        <meta property="og:title" content="Our Blog | Jabbour Tutoring" />
        <meta
          property="og:description"
          content="Study tips & resources from Jabbour Tutoring for students in Hammana, Dbayeh & all over Lebanon."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jabbourtutoring.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Blog | Jabbour Tutoring" />
        <meta
          name="twitter:description"
          content="Expert tutoring tips, study guides, and educational insights from Jabbour Tutoring."
        />
      </Head>

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-10">Our Blog</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allPostsData.map(({ slug, date, title, coverImage, excerpt }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300"
            >
              {coverImage && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={coverImage}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(date).toLocaleDateString()}
                </p>
                <h2 className="text-lg font-semibold mb-3">{title}</h2>
                <p className="text-gray-600 text-sm">
                  {excerpt || "Click to read more..."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getAllPosts();
  return { props: { allPostsData } };
}
