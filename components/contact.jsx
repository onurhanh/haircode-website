import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="iletisim" className=" text-[#2e2e2e] py-15 sm:py-20 px-4 font-sans sm:px-6 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">İletişim</h2>
        <p className="text-sm text-gray-600 mb-5 sm:mb-12">
          Aşağıdaki bilgiler üzerinden bizimle iletişime geçebilirsiniz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adres */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-[#8b7e74] text-2xl mb-2" />
            <h3 className="text-lg font-semibold mb-1">Adres</h3>
            <p className="text-sm leading-relaxed">
              Suadiye, Pembegül Sok. Zatibey Apt. No:2/A<br />
              Kadıköy / İstanbul
            </p>
          </motion.div>

          {/* Telefon */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="flex flex-col items-center text-center md:border-l md:border-r border-gray-300 px-0 md:px-4">
            <FaPhoneAlt className="text-[#8b7e74] text-2xl mb-2" />
            <h3 className="text-lg font-semibold mb-1">Telefon</h3>
            <div className="space-y-1">
              <p className="text-sm">+90 (541) 252 48 64</p>
              <p className="text-sm">+90 (534) 688 87 41</p>
            </div>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center">
            <FaInstagram className="text-[#8b7e74] text-2xl mb-2" />
            <h3 className="text-lg font-semibold mb-1">Instagram</h3>
            <a
              href="https://instagram.com/hair.c0de"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-sm"
            >
              @haircode
            </a>
          </motion.div>

        </div>
      </div>

      {/* Harita */}
      <div className="max-w-6xl mx-auto sm:pt-16 pt-6 px-4">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <iframe
            title="Salon Konumu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266.31122451400495!2d29.078803708830662!3d40.96028940020194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac751c5bf33dd%3A0x7c10b5cb411b305e!2sHair%20Code%20Suadiye%20Kuaf%C3%B6r!5e0!3m2!1str!2str!4v1747927102592!5m2!1str!2str"
            width="100%"
            height="100%"
            className="rounded-lg border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section >
  );
}
