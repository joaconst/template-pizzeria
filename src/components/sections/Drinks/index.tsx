'use client';

const Drinks = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 mt-32">
            <h2 className="text-5xl md:text-7xl font-bold text-center">Bebidas</h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 text-center">
                {/* Card 1 */}
                <a
                    href="#"
                    className="w-[300px] lg:w-[350px] h-[150px] md:h-[200px] bg-primary rounded-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.15)] p-6 transition-transform hover:scale-105 hover:shadow-[6px_6px_14px_rgba(0,0,0,0.2)] flex items-center justify-center"
                >
                    <h3 className="text-4xl font-bold text-white">Gaseosas</h3>
                </a>

                {/* Card 2 */}
                <a
                    href="#"
                    className="w-[300px] lg:w-[350px] h-[150px] md:h-[200px] bg-primary rounded-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.15)] p-6 transition-transform hover:scale-105 hover:shadow-[6px_6px_14px_rgba(0,0,0,0.2)] flex items-center justify-center"
                >
                    <h3 className="text-4xl font-bold text-white">Vinos</h3>
                </a>

                {/* Card 3 */}
                <a
                    href="#"
                    className="w-[300px] lg:w-[350px] h-[150px] md:h-[200px] bg-primary rounded-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.15)] p-6 transition-transform hover:scale-105 hover:shadow-[6px_6px_14px_rgba(0,0,0,0.2)] flex items-center justify-center"
                >
                    <h3 className="text-4xl font-bold text-white">Jugos</h3>
                </a>
            </div>

            <a
                href="#"
                className="mt-20 block w-fit mx-auto px-16 py-3 text-2xl font-semibold bg-secondary text-white rounded-2xl transition-all duration-300 hover:bg-secondary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 shadow-[4px_4px_10px_rgba(0,0,0,0.5)]"
            >
                Ver todas
            </a>
        </section>
    );
};

export default Drinks;