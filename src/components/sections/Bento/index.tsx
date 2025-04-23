'use client';

import { Medal } from "lucide-react";

const Bento = () => {
    return (
        <>
            {/* Título visible solo en mobile */}
            <div className="block md:hidden bg-gray-800 mt-32 px-6 py-8 text-white text-center w-full max-w-screen mx-auto">
                <h2 className="text-2xl font-bold mb-2 break-words whitespace-normal">
                    Premiados por hacer lo que amamos
                </h2>
                <p className="text-lg leading-relaxed break-words whitespace-normal">
                    Orgullosos de cada reconocimiento recibido gracias a ustedes, nuestros clientes.
                </p>
            </div>

            <section className="grid grid-cols-4 md:grid-cols-7 grid-rows-2 md:grid-rows-6 gap-8 mt-16 md:gap-2 max-w-sm sm:max-w-4xl xl:max-w-6xl mx-auto px-8 md:px-0">
                {/* Card 2 */}
                <div className="h-75 col-start-1 row-start-1 col-span-4 row-span-1 md:col-start-3 md:row-start-1 md:col-span-3 md:row-span-3 rounded-md overflow-hidden relative">
                    <img
                        src="/images/bento/bento-2.webp"
                        alt="Imagen 1"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-around text-white text-center px-4">
                        <Medal className="w-16 h-16 text-yellow-500" />
                        <h3 className="text-2xl font-bold mb-2">Campeones 2022 <br /> Mejor pizza</h3>
                        <a
                            href="#"
                            className="mt-2 px-4 py-2 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-200 transition"
                        >
                            Ver más
                        </a>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="h-75 w-auto col-start-1 row-start-2 col-span-4 row-span-1 md:col-start-5 md:row-start-4 md:col-span-3 md:row-span-3 rounded-md overflow-hidden relative">
                    <img
                        src="/images/bento/bento-5.webp"
                        alt="Imagen 4"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-around text-white text-center px-4">
                        <Medal className="w-16 h-16 text-yellow-500" />
                        <h3 className="text-2xl font-bold mb-2">Campeones 2023 <br /> Mejor pizza</h3>
                        <a
                            href="#"
                            className="mt-2 px-4 py-2 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-200 transition"
                        >
                            Ver más
                        </a>
                    </div>
                </div>

                {/* Otras cards */}
                <div className="hidden md:block h-75 w-auto md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-3 rounded-md overflow-hidden relative">
                    <img
                        src="/images/bento/bento-1.webp"
                        alt="Imagen 0"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="hidden md:block h-75 w-auto md:col-start-6 md:row-start-1 md:col-span-2 md:row-span-3 rounded-md overflow-hidden relative">
                    <img
                        src="/images/bento/bento-3.webp"
                        alt="Imagen 2"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="hidden md:block h-75 w-auto md:col-start-1 md:row-start-4 md:col-span-2 md:row-span-3 rounded-md overflow-hidden relative">
                    <img
                        src="/images/bento/bento-4.webp"
                        alt="Imagen 3"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="hidden md:block h-75 w-auto md:col-start-3 md:row-start-4 md:col-span-2 md:row-span-3 rounded-md overflow-hidden relative">
                    <img
                        src="/images/bento/bento-6.webp"
                        alt="Imagen 5"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </>
    );
};

export default Bento;
