'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [show, setShow] = useState(true);
  const [bgTransparent, setBgTransparent] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // sadece geniş ekranlarda scroll gizleme
      if (window.innerWidth >= 768) {
        if (currentY > lastScrollY && currentY > 100) {
          setShow(false);
        } else {
          setShow(true);
        }
      } else {
        setShow(true); // mobilde daima görünür
      }

      setBgTransparent(currentY <= 50);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLink = (href, label) => (
    <div className="relative group px-2 py-1 inline-block cursor-pointer">
      <a href={href} className="text-white">
        {label}
      </a>
      <span className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-0 
                       group-hover:w-full transition-all duration-300"></span>
    </div>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${show ? 'translate-y-0' : '-translate-y-full'}
        ${bgTransparent ? 'bg-transparent' : 'bg-black'} 
        text-white`}
    >
      <div className="max-w-7xl mx-auto py-4 px-8 sm:px-4 flex justify-between items-center relative">
        {/* Mobilde sol: hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Masaüstüde sol: normal linkler */}
        <div className="hidden md:flex space-x-2">
          {navLink("/", "Anasayfa")}
          {navLink("#hakkimizda", "Hakkımızda")}
          {navLink("#hizmetler", "Hizmetler")}
          {navLink("#iletisim", "İletişim")}
        </div>

        {/* Ortadaki başlık */}
        <h1 className="font-bold text-2xl absolute left-1/2 transform -translate-x-1/2">
          HAIR CODE
        </h1>

        {/* Sağ: “Yol Tarifi” ve “Randevu Al” */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            {navLink("#iletisim", "Yol Tarifi")}
          </div>
          <Button asChild className="rounded-none cursor-pointer text-sm md:text-base">
            <a
              href="https://wa.me/905412524864?text=Merhaba%2C%20randevu%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Randevu Al
            </a>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden flex flex-col bg-black text-white px-4 py-4 space-y-3"
          >
            {navLink("/", "Anasayfa")}
            {navLink("#hakkimizda", "Hakkımızda")}
            {navLink("#hizmetler", "Hizmetler")}
            {navLink("#iletisim", "İletişim")}
            {navLink("#iletisim", "Yol Tarifi")}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
