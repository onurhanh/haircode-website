"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#fdf6ec] dark:bg-[#3b3b3b] text-[#3b3b3b] dark:text-[#e7d9c4] px-4 sm:px-6 md:px-10 py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-[#8b7e74] dark:text-[#e7d9c4]">Hair Code</h2>
          <p className="mt-2 text-sm italic">Zarafet burada başlar.</p>
        </div>

        {/* İletişim */}
        <div className="text-l space-y-3 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaMapMarkerAlt className="text-[#a78c6b]" />
            <span>Suadiye, İstanbul</span>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaPhoneAlt className="text-[#a78c6b]" />
            <a href="tel:+905412524864" className="hover:underline">+90 541 252 48 64</a>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaInstagram className="text-[#a78c6b]" />
            <a href="https://instagram.com/haircode" target="_blank" rel="noreferrer" className="hover:underline">haircode</a>
          </div>
        </div>

        {/* Hizmetler */}
        <div className="text-l space-y-2 text-center md:text-left">
          <a href="#hizmetler" className="block hover:text-[#8b7e74] transition">Hizmetlerimiz</a>
          <a href="#gallery" className="block hover:text-[#8b7e74] transition">Galeri</a>
          <a href="#pricing" className="block hover:text-[#8b7e74] transition">Fiyat Listesi</a>
          <a href="#appointment" className="block hover:text-[#8b7e74] transition">Randevu</a>
        </div>

        {/* Çalışma Saatleri */}
        <div className="text-l space-y-2 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-start gap-2">
            <FaClock className="mt-1 text-[#a78c6b]" />
            <div>
              <p>Pazartesi - Cumartesi</p>
              <p>09:00 - 19:00</p>
              <p className="mt-1">Pazar: Kapalı</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="mt-10 text-center text-sm text-[#7a6e65] dark:text-[#d6c4b2] border-t pt-6 border-[#e7d9c4] dark:border-[#a78c6b]">
        © {new Date().getFullYear()} Hair Code Kuaför. Tüm hakları saklıdır.
      </div>
    </motion.footer>
  );
}
