// components/HeroSlider.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Navbar from './navbar';
import SliderContent from './slider-content';

const HeroSlider = () => {
    const slides = [
        '/picture.jpg',
        '/picture2.jpg',
        '/picture3.jpg',
        '/picture4.jpg'
    ];

    return (
        <div>
            <div className="absolute z-50 w-full">
                <Navbar />
            </div>

            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                fadeEffect={{ crossFade: true }}
                className="w-screen h-screen z-10 relative"
                speed={1700}
            >
                {slides.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={src}
                            alt={`Slide ${i + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <SliderContent />
            </div>
        </div>

    );
};

export default HeroSlider;
