// pages/sitemap.xml.ts

import { GetServerSideProps } from "next";
import { getAllPosts } from "@/lib/posts"; // blog post fetching logic
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://www.jabbourtutoring.com";
  const today = new Date().toISOString();

  // Get blog posts
  const posts = getAllPosts(); // returns [{ slug: 'post-title', date: '2025-08-09' }, ...]

  // Static pages with optional lastmod
  const staticPages = [
    { url: "", changefreq: "monthly", priority: 1.0 },
    { url: "about", changefreq: "monthly", priority: 0.8 },
    { url: "contact", changefreq: "monthly", priority: 0.8 },
    { url: "blog", changefreq: "weekly", priority: 0.8 },
    {
      url: "tutoring-in-hammana",
      changefreq: "weekly",
      priority: 0.9,
      lastmod: today,
    },
    {
      url: "tutoring-in-zouk-mosbeh",
      changefreq: "weekly",
      priority: 0.9,
      lastmod: today,
    },
  ];

  const smStream = new SitemapStream({ hostname: baseUrl });

  // Add static pages
  staticPages.forEach((page) => {
    smStream.write({
      url: `/${page.url}`,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: page.lastmod || today, // gives all pages a fresh lastmod date
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
