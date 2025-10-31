"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <div>
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#191919] text-[#DDD8D4] px-4 sm:px-6 md:px-10 py-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6 py-10 items-start font-sans">
        {/* Logo */}
        <div className="text-center sm:text-left">
          <img src="/logo.png" alt="logo" className="mx-auto sm:mx-0 w-50 h-auto" />
        </div>

        <div className="space-y-2 text-center sm:text-left">
          <a href="#hakkimizda" className="block hover:text-[#8b7e74] transition">Hakkımızda</a>
          <a href="#hizmetler" className="block hover:text-[#8b7e74] transition">Hizmetler</a>
          <a href="#iletisim" className="block hover:text-[#8b7e74] transition">İletişim</a>
          <a href="#galeri" className="block hover:text-[#8b7e74] transition">Galeri</a>
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Hair+Code+Suadiye+Kuaf%C3%B6r/@40.9603149,29.0764145,17z/data=!3m1!4b1!4m6!3m5!1s0x14cac751c5bf33dd:0x7c10b5cb411b305e!8m2!3d40.9603149!4d29.0789894!16s%2Fg%2F11y9d2jx51?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D",
                "_blank"
              )
            }
            className="block hover:text-[#8b7e74] cursor-pointer transition mx-auto sm:mx-0"
          >
            Yol Tarifi
          </button>
        </div>

        {/* İletişim */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start items-start gap-2">
            <FaMapMarkerAlt className="text-[#DDD8D4] mt-1" />
            <p>
              Suadiye, Pembegül Sok. <br /> Zatibey Apt. No:2/A<br />
              Kadıköy / İstanbul
            </p>
          </div>
          <div className="flex justify-center sm:justify-start items-center gap-2">
            <FaPhoneAlt className="text-[#DDD8D4]" />
            <div className="flex-row">
              <div>
                <a href="tel:+905412524864" className="hover:underline ">+90 541 252 48 64</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start items-center gap-2">
            <FaInstagram className="text-[#DDD8D4]" />
            <a href="https://instagram.com/hair.c0de" target="_blank" rel="noreferrer" className="hover:underline pl-1">hair.c0de</a>
          </div>
        </div>

        {/* Hizmetler */}


        {/* Çalışma Saatleri */}
        <div className="text-center sm:text-left space-y-2">
          <div className="flex justify-center sm:justify-start items-start gap-2">
            <FaClock className="text-[#DDD8D4] mt-1" />
            <div>
              <p>Pazartesi - Pazar</p>
              <p>10:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>


      {/* Alt Bilgi */}
      <div className="mt-10 text-center text-sm text-[#DDD8D4] border-t pt-6 border-[#DDD8D4] font-sans max-w-6xl mx-auto">
        © <a target="blank" href="https://www.onurhanh.net">onurhanh</a> 2025 Hair Code Kuaför. Tüm hakları saklıdır.
      </div>
    </motion.footer>
    </div>
    </section>
  );
}
