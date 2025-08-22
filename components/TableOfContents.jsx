"use client";
import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const collectedHeadings = Array.from(
      document.querySelectorAll("article h2, article h3")
    )
      .filter(
        (el) =>
          !["Written by James", "Table of Contents"].includes(el.innerText)
      )
      .map((el) => {
        // generate a clean id
        const cleanId = el.innerText
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");

        if (!el.id) {
          el.id = cleanId; // assign id directly to heading
        }

        return {
          text: el.innerText,
          id: el.id,
          level: el.tagName,
        };
      });

    setHeadings(collectedHeadings);
  }, []);

  return (
    <aside className="sticky top-20 max-h-[80vh] overflow-y-auto p-4 rounded-2xl border shadow-sm bg-white/60 backdrop-blur-sm">
      <h2 className="font-bold text-lg mb-3">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id} className={h.level === "H3" ? "ml-4 text-sm" : ""}>
            <a
              href={`#${h.id}`}
              className="text-blue-600 hover:text-yellow-500 transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
