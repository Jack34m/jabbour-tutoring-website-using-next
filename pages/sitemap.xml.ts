// pages/sitemap.xml.ts

import { GetServerSideProps } from "next";
import { getAllPosts } from "@/lib/posts"; // your blog post fetching logic
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://www.jabbourtutoring.com";

  // Get blog posts
  const posts = getAllPosts(); // returns [{ slug: 'post-title', date: '2025-08-09' }, ...]

  // Static routes
  const staticPages = [
    "",
    "about",
    "contact",
    "blog",
    "tutoring-in-hammana",
    "tutoring-in-zouk-mosbeh",
  ];

  const smStream = new SitemapStream({ hostname: baseUrl });

  // Add static pages
  staticPages.forEach((page) => {
    smStream.write({
      url: `/${page}`,
      changefreq: "monthly",
      priority: page === "" ? 1.0 : 0.8,
    });
  });

  // Add blog posts
  posts.forEach((post) => {
    smStream.write({
      url: `/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: "weekly",
      priority: 0.7,
    });
  });

  smStream.end();

  const sitemapOutput = await streamToPromise(Readable.from(smStream)).then(
    (data) => data.toString()
  );

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapOutput);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
