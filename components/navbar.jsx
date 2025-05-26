'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";


const Navbar = () => {
  const [show, setShow] = useState(true);
  const [bgTransparent, setBgTransparent] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTimeoutRef = useRef(null);

  // Menü durumu için ref (her zaman güncel değeri taşır)
  const isMenuOpenRef = useRef(false);

  // isMenuOpen değiştiğinde ref’i güncelle
  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // SADECE MASAÜSTÜ İÇİN (>= 1024px)
      if (window.innerWidth >= 1024) {
        // Scroll esnasında gizle
        setShow(false);

        // Önceki timeout'u temizle
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        // Scroll durduktan sonra 200ms içinde göster
        scrollTimeoutRef.current = setTimeout(() => {
          setShow(true);
        }, 200);
      } else {
        // Mobil ve tablet: navbar hep açık
        setShow(true);
      }

      // Menü açıksa scroll ile kapat
      if (isMenuOpenRef.current) {
        setIsMenuOpen(false);
      }

      setBgTransparent(currentY <= 50);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLink = (href, label) => (
    <div className="relative group px-2 py-1 inline-block cursor-pointer">
      <a href={href} className="text-white">
        {label}
      </a>
      <span className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-0 
                    group-hover:w-full transition-all duration-300"></span>
    </div>
  );

  const navLinkMobile = (href, label) => (
    <a
      href={href}
      className="text-white relative group px-2 py-1 inline-block cursor-pointer"
    >
      {label}
      <span className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-0 
                     group-hover:w-full transition-all duration-300"></span>
    </a>
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
      <div className="max-w-7xl mx-auto py-4 px-8 md:px-14 lg:px-4 flex justify-between items-center relative">
        {/* Mobilde sol: hamburger */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Masaüstüde sol: normal linkler */}
        <div className="hidden lg:flex space-x-3 text-sm">
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
          <div className="hidden lg:block">
            {navLink("#yoltarifi", "Yol Tarifi")}
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="rounded-none cursor-pointer text-xs md:text-sm lg:text-base">
                Randevu Al
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>WhatsApp'a yönlendirileceksiniz</AlertDialogTitle>
                <AlertDialogDescription>
                  Randevu almak için WhatsApp üzerinden iletişim kurmak istiyor musunuz?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Vazgeç</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() =>
                    window.open(
                      "https://wa.me/905412524864?text=Merhaba%2C%20randevu%20almak%20istiyorum",
                      "_blank"
                    )
                  }
                >
                  Evet, devam et
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>


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
            className="lg:hidden flex flex-col bg-black text-white px-4 py-4 space-y-3 text-base"
          >
            {navLinkMobile("/", "Anasayfa")}
            {navLinkMobile("#hakkimizda", "Hakkımızda")}
            {navLinkMobile("#hizmetler", "Hizmetler")}
            {navLinkMobile("#iletisim", "İletişim")}
            {navLinkMobile("#iletisim", "Yol Tarifi")}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
