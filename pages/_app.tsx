// File: pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { Playfair_Display, Inter } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Force all <img> in Markdown to lazy-load
    const imgs = document.querySelectorAll("article img");
    imgs.forEach((img) => {
      if (!img.getAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }
    });
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7J5M99WEQ1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7J5M99WEQ1');
        `}
      </Script>

      <div className={`${playfairDisplay.variable} ${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
