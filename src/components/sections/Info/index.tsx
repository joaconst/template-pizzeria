'use client';

const Info = () => {
    return (
        <section className="bg-gray-900 py-16 md:py-32 mt-32 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center md:items-stretch w-full gap-0 md:gap-8 mx-auto px-4">
                
                {/* Card 1 */}
                <div className="flex flex-col items-center w-full md:w-auto p-6 md:px-6 max-w-[500px]">
                    <h3 className="text-4xl md:text-5xl font-semibold mb-6 md:mb-8 text-white">Envios</h3>
                    <p className="text-lg md:text-xl leading-relaxed mb-6 md:mb-8 text-white">
                        Realizamos envíos en toda la ciudad.<br />
                        Tiempo estimado de entrega: 30-45 minutos.
                    </p>
                    <a href="" className="text-yellow-400 underline text-lg md:text-xl">Cotizar envio</a>
                </div>

                {/* Separador visible */}
                <div className="hidden md:block h-[1px] md:h-full w-full md:w-[1px] bg-white opacity-20 my-4 md:my-0" />

                {/* Separador móvil */}
                <div className="md:hidden w-3/4 h-[1px] bg-white opacity-20 my-4" />

                {/* Card 2 */}
                <div className="flex flex-col items-center w-full md:w-auto p-6 md:px-6 max-w-[500px]">
                    <h3 className="text-4xl md:text-5xl font-semibold mb-6 md:mb-8 text-white">Retiros</h3>
                    <p className="text-lg md:text-xl leading-relaxed mb-6 md:mb-8 text-white">
                        Nos encontramos en Av. Italia 456, Local 3<br />
                        Abierto todos los días de 12:00 a 23:00.
                    </p>
                    <a href="" className="text-yellow-400 underline text-lg md:text-xl">Ver maps</a>
                </div>

            </div>
        </section>
    );
};

export default Info;