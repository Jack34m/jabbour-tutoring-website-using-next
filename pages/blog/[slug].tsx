import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface PostProps {
  postData: {
    slug: string;
    title: string;
    date: string;
    contentHtml: string;
    coverImage?: string | null;
  };
}

export default function Post({ postData }: PostProps) {
  return (
    <>
      <Head>
        <title>{postData.title} | Jabbour Tutoring</title>
        <meta name="description" content={`Read: ${postData.title}`} />
      </Head>
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
        <p className="text-gray-500 mb-8">
          {new Date(postData.date).toLocaleDateString()}
        </p>

        {postData.coverImage && (
          <img
            src={postData.coverImage}
            alt={postData.title}
            className="w-full h-auto rounded-lg shadow mb-8"
          />
        )}

        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  return {
    props: {
      postData,
    },
  };
};
