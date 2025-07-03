'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import SliderContent from './slider-content';
import { motion, AnimatePresence } from "framer-motion";


const HeroSlider = () => {
    const slides = [
        '/bg-image-desktop2.png',
        '/bg-image-desktop.png',
        '/bg-image-desktop3.png'

    ];

    const slidesMobile = [
        '/bg-image2.jpg',
        '/bg-image3.jpg',
        '/picture4.jpg'

    ];

    const slideTexts = [
        "SANA ÖZEL IŞILTI",
        "HER TARZA UYGUN DOKUNUŞ",
        "GÜZELLİĞİN EN DOĞAL HALİ",
        "KENDİNİ YENİLE",
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Ekran boyutuna göre mobil mi kontrol et
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint = 1024px
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const slideSet = isMobile ? slidesMobile : slides;

    return (
        <div className="relative overflow-x-hidden">
            {/* Ortadaki yazı */}
            <div className="absolute inset-0 flex lg:top-1/2 top-5/9 justify-center z-30 pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.h2
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-white text-3xl md:text-5xl lg:text-7xl font-bold text-center"
                    >
                        {slideTexts[activeIndex]}
                    </motion.h2>
                </AnimatePresence>
            </div>


            {/* Swiper */}
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                fadeEffect={{ crossFade: true }}
                className="h-screen w-full z-10 relative"
                speed={1700}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >

                {slideSet.map((src, i) => (
                    <SwiperSlide key={i} className="h-screen">
                        <img
                            src={src}
                            alt={`Slide ${i + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </SwiperSlide>
                ))}


            </Swiper>

            {/* Alttaki slider content (çizgi + adres) */}
            <div>
                <SliderContent />
            </div>
        </div>
    );
};

export default HeroSlider;
