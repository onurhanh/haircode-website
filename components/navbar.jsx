'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [bgTransparent, setBgTransparent] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      if (currentY <= 50) {
        setBgTransparent(true);
      } else {
        setBgTransparent(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLink = (href, label) => (
    <div className="relative group px-2 py-1 inline-block cursor-pointer">
      <a href={href} className="text-white">{label}</a>
      <span className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
    </div>
  );

  const staticLink = (label) => (
    <div className="relative group px-2 py-1 inline-block cursor-pointer">
      <span className="text-white">{label}</span>
      <span className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
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
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="space-x-4 flex">
          {navLink("#hakkimizda", "Hakkımızda")}
          {navLink("#hizmetler", "Hizmetler")}
          {navLink("#iletisim", "İletişim")}
        </div>

        <h1 className="font-bold text-lg">HAIR CODE</h1>

        <div className="flex items-center gap-4">
          {staticLink("Yol Tarifi")}
          <Button className="rounded-none cursor-pointer">Randevu Al</Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
