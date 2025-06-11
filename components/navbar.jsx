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
  const [showLogo, setShowLogo] = useState(true);
  const scrollTimeoutRef = useRef(null);
  const isMenuOpenRef = useRef(false);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (window.innerWidth >= 1024) {
        setShow(false);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => setShow(true), 200);
      } else {
        setShow(true);
      }

      if (isMenuOpenRef.current) {
        setIsMenuOpen(false);
      }

      if (currentY > lastScrollY && currentY > 50) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }

      setBgTransparent(currentY <= 50);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLink = (href, label) => (
    <button className="relative group px-2 inline-block cursor-pointer">
      <a href={href} className="text-white">
        {label}
      </a>
      <a href={href} className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></a>
    </button>
  );

  const navLinkMobile = (href, label, isExternal = false) => {
    const commonClasses = "text-white relative group px-2 inline-block cursor-pointer";


    if (isExternal) {
      return (
        <div className="inline-block">
          <button
            onClick={() => window.open(href, "_blank")}
            className={commonClasses}
          >
            {label}
          </button>
        </div>
      );
    }

    return (
      <a href={href} className={commonClasses}>
        {label}
      </a>
    );
  };



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
      <div className="lg:max-w-7xl mx-auto py-4 px-8 md:px-14 lg:px-4 flex justify-between items-center relative">
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <button className="hidden lg:flex space-x-3 text-sm">
          {navLink("/", "Anasayfa")}
          {navLink("#hakkimizda", "Hakkımızda")}
          {navLink("#hizmetler", "Hizmetler")}
          {navLink("#galeri", "Galeri")}
          {navLink("#iletisim", "İletişim")}
        </button>

        <div className='absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300'>
          {showLogo ? (
            <span className="text-white text-xl sm:text-3xl font-bold">HAIR CODE</span>
          ) : (
            <span className="text-white text-xl sm:text-2xl font-bold">HAIR CODE</span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Hair+Code+Suadiye+Kuaf%C3%B6r/@40.9603149,29.0764145,17z/data=!3m1!4b1!4m6!3m5!1s0x14cac751c5bf33dd:0x7c10b5cb411b305e!8m2!3d40.9603149!4d29.0789894!16s%2Fg%2F11y9d2jx51?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D",
                "_blank"
              )
            }
            className="relative group px-2 py-1 lg:inline-block cursor-pointer hidden"
          >
            <span className="text-white">Yol Tarifi</span>
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
          </button>


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
            className="lg:hidden flex flex-col bg-black text-white px-4 py-4 space-y-3 text-base w-full max-w-full"
          >
            {navLinkMobile("/", "Anasayfa")}
            {navLinkMobile("#hakkimizda", "Hakkımızda")}
            {navLinkMobile("#hizmetler", "Hizmetler")}
            {navLinkMobile("#galeri", "Galeri")}
            {navLinkMobile("#iletisim", "İletişim")}
            {navLinkMobile("https://www.google.com/maps/place/Hair+Code+Suadiye+Kuaf%C3%B6r/@40.9603149,29.0764145,17z/data=!3m1!4b1!4m6!3m5!1s0x14cac751c5bf33dd:0x7c10b5cb411b305e!8m2!3d40.9603149!4d29.0789894!16s%2Fg%2F11y9d2jx51?entry=ttu",
              "Yol Tarifi", true)}

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;