// components/AuthorCard.jsx
import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="mt-12 p-6 border border-brand-900/10 rounded-xl flex items-center gap-4 bg-white">
      <Image
        src="/james.jpg"
        alt="James - Author"
        width={80}
        height={80}
        className="rounded-full ring-2 ring-gold-500/40"
      />
      <div>
        <h3 className="font-serif font-semibold text-lg text-brand-800">Written by James</h3>
        <p className="text-sm text-ink/60">
          SEO marketer & co-owner of a tutoring business in Hammana, Lebanon.
          Passionate about making websites rank better & perform faster.
        </p>
      </div>
    </div>
  );
}
