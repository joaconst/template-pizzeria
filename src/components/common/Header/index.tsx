'use client';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between p-4 mx-auto">
            <nav className="bg-black/50 px-4 pr-2 rounded-2xl">
                <ul className="flex items-center gap-4">
                    <li>
                        <a
                            href="#"
                            className="relative text-xl font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="relative text-xl font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Pizzas
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="relative text-xl font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Bebidas
                        </a>
                    </li>
                    <li>
                        <a href="#"><img src="/images/favicon.webp" alt="Logo" className="w-16 h-16" /></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
