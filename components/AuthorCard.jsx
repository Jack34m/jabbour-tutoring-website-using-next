// components/AuthorCard.jsx
import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="mt-12 p-6 border rounded-2xl shadow-md flex items-center gap-4 bg-white/80 backdrop-blur-sm">
      <Image
        src="/james.jpg" 
        alt="James - Author"
        width={80}
        height={80}
        className="rounded-full"
      />
      <div>
        <h3 className="font-semibold text-lg">Written by James</h3>
        <p className="text-sm text-gray-600">
          SEO marketer & co-owner of a tutoring business in Hammana, Lebanon.
          Passionate about making websites rank better & perform faster.
        </p>
      </div>
    </div>
  );
}
