'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import pizzas from '@/data/pizzas.json';

const Slider = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    // Limitar a los primeros 3 elementos del JSON
    const limitedPizzas = pizzas.slice(0, 6);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="max-w-sm sm:max-w-6xl mx-auto mt-8 md:mt-16">
            <div className="container mx-auto px-4 sm:px-8 lg:px-0 relative">
                {/* Botones de navegación */}
                <button
                    ref={prevRef}
                    className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 bg-secondary/90 p-2 rounded-full border-2 border-white shadow-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:scale-105 transition-transform"
                    aria-label="Slide anterior"
                >
                    <span className="text-white font-bold text-lg sm:text-xl">←</span>
                </button>

                <button
                    ref={nextRef}
                    className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 bg-secondary/90 p-2 rounded-full border-2 border-white shadow-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:scale-105 transition-transform"
                    aria-label="Slide siguiente"
                >
                    <span className="text-white font-bold text-lg sm:text-xl">→</span>
                </button>

                <Swiper
                    className="custom-swiper"
                    loop={true}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            centeredSlides: true,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                    }}
                >
                    {limitedPizzas.map((item, index) => {
                        const isCenter = windowWidth >= 1024 && index === (activeIndex + 1) % limitedPizzas.length;

                        return (
                            <SwiperSlide key={item.id} className="p-2 sm:p-4">
                                <article
                                    className={`relative w-[250px] md:w-[300px] h-[475px] mx-auto rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center bg-transparent transition-all duration-300 ease-in-out ${
                                        isCenter ? 'lg:scale-110 lg:z-10' : 'lg:scale-95'
                                    } after:content-[''] after:absolute after:top-[20%] after:left-0 after:w-full after:h-[80%] after:bg-primary after:rounded-t-2xl after:z-0`}
                                >
                                    <div className="relative z-10 w-[200px] md:w-[215px] h-[200px] md:h-[215px]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-full"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="relative z-10 flex flex-col items-center justify-between h-full px-4">
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mt-4">{item.title}</h3>
                                            <p className="text-xl text-white/90 mt-4 leading-tight">{item.description}</p>
                                        </div>

                                        <div className="mt-6 mb-4 flex justify-center">
                                            <Link
                                                href="#"
                                                className="inline-block px-8 py-2 text-lg font-semibold bg-secondary text-white rounded-2xl transition-all duration-300 hover:bg-secondary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 shadow-[4px_4px_10px_rgba(0,0,0,0.5)]"
                                            >
                                                Ver más
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                
                <Link
                    href="#"
                    className="mt-12 block w-fit mx-auto px-12 py-3 text-2xl font-semibold bg-secondary text-white rounded-2xl transition-all duration-300 hover:bg-secondary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 shadow-[4px_4px_10px_rgba(0,0,0,0.5)]"
                >
                    Ver todas
                </Link>
            </div>
        </section>
    );
};

export default Slider;