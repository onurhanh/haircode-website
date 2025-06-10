"use client";

import React from "react";

const instagramImages = [
  "https://www.instagram.com/p/DKMRpThIonm/",
  "https://www.instagram.com/p/DKSUgUvsXaL/",
  "https://www.instagram.com/p/DJ9Yh6mIGlc/",
];

export default function InstagramFeed() {
  return (
    <section id="galeri" className="bg-[#f8f4ee] py-10 px-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Instagram'da Biz</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {instagramImages.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com/haircode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-300"
          >
            <img src={src} alt={`Post ${i + 1}`} className="rounded-lg w-full h-auto" />
          </a>
        ))}
      </div>
    </section>
  );
}
