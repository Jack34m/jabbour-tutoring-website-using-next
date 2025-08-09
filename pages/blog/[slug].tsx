import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type BlogPostProps = {
  postData: {
    slug: string;
    title: string;
    date: string;
    coverImage?: string;
    contentHtml: string;
    excerpt?: string;
  };
};

export default function BlogPost({ postData }: BlogPostProps) {
  const metaDescription =
    postData.excerpt || `Read ${postData.title} on Jabbour Tutoring's Blog.`;

  return (
    <>
      <Head>
        <title>{postData.title} | Jabbour Tutoring</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content={`tutoring, education, ${postData.title}`}
        />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={metaDescription} />
        {postData.coverImage && (
          <meta property="og:image" content={postData.coverImage} />
        )}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://jabbourtutoring.com/blog/${postData.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={metaDescription} />
        {postData.coverImage && (
          <meta name="twitter:image" content={postData.coverImage} />
        )}
      </Head>

      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {postData.coverImage && (
          <img
            src={postData.coverImage}
            alt={postData.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
        <p className="text-gray-500 mb-6">
          {new Date(postData.date).toLocaleDateString()}
        </p>
        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  return { props: { postData } };
};
