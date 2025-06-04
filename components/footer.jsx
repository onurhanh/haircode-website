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
      className="bg-[#191919] text-[#DDD8D4] px-4 sm:px-6 md:px-10 py-12 sm:py-16"
    >
      <div className="max-w-7xl items-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo */}
        <div className="text-center md:text-left">
          <img src="/logo.png" alt="logo" className="flex"/>
        </div>

        {/* İletişim */}
        <div className="text-l space-y-3 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaMapMarkerAlt className="text-[#DDD8D4]" />
            <span>Suadiye, Pembegül Sok. <br /> Zatibey Apt. No:2/A<br />
              Kadıköy / İstanbul</span>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaPhoneAlt className="text-[#DDD8D4]" />
            <a href="tel:+905412524864" className="hover:underline">+90 541 252 48 64</a>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaInstagram className="text-[#DDD8D4]" />
            <a href="https://instagram.com/haircode" target="_blank" rel="noreferrer" className="hover:underline">haircode</a>
          </div>
        </div>

        {/* Hizmetler */}
        <div className="text-l space-y-2 text-center md:text-left">
          <a href="#hakkimizda" className="block hover:text-[#8b7e74] transition">Hakkımızda</a>
          <a href="#hizmetler" className="block hover:text-[#8b7e74] transition">Hizmetler</a>
          <a href="#iletisim" className="block hover:text-[#8b7e74] transition">İletişim</a>
          <button             onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Hair+Code+Suadiye+Kuaf%C3%B6r/@40.9603149,29.0764145,17z/data=!3m1!4b1!4m6!3m5!1s0x14cac751c5bf33dd:0x7c10b5cb411b305e!8m2!3d40.9603149!4d29.0789894!16s%2Fg%2F11y9d2jx51?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D",
                "_blank"
              )
            } className="block hover:text-[#8b7e74] cursor-pointer transition">Yol Tarifi</button>
        </div>

        {/* Çalışma Saatleri */}
        <div className="text-l space-y-2 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-start gap-2">
            <FaClock className="mt-1 text-[#DDD8D4]" />
            <div>
              <p>Pazartesi - Cumartesi</p>
              <p>09:00 - 19:00</p>
              <p className="mt-1">Pazar: Kapalı</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="mt-10 text-center text-sm text-[#DDD8D4] border-t pt-6 border-[#DDD8D4] ">
        © {new Date().getFullYear()} Hair Code Kuaför. Tüm hakları saklıdır.
      </div>
    </motion.footer>
  );
}
