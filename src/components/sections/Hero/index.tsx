'use client';

import Link from 'next/link';

const Hero = () => {
    return (
        <section className="w-full max-w-sm sm:max-w-6xl mx-auto flex flex-col items-center justify-center text-center mt-8 px-4 md:px-8">
            <h1 className="text-5xl md:text-8xl font-bold break-words">
                Pizzas a la leña
            </h1>
            <p className="text-xl md:text-4xl font-medium mt-8 text-pretty">
                Descubrí el sabor de nuestras pizzas caseras, hechas con ingredientes frescos, masa madre y a la leña!
            </p>
            <Link
                href="/productos"
                className="relative inline-block py-3 px-8 mt-8 rounded-2xl font-medium bg-primary text-white overflow-hidden transition-all duration-300 ease-in-out hover:brightness-105 hover:scale-105 shadow-md hover:shadow-lg"
            >
                <span className="relative text-2xl z-10">¡Hacé tu pedido!</span>
                <span className="absolute inset-0 bg-white/10 rounded-2xl blur-md opacity-0 hover:opacity-100 transition duration-500" />
            </Link>
        </section>
    );
};

export default Hero;