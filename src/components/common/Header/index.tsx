'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between p-4 mx-auto">
            <nav className="bg-black/50 px-4 pr-2 rounded-2xl">
                <ul className="flex items-center gap-4">
                    <li>
                        <Link
                            href="/"
                            className="relative text-xl font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/productos#pizzas"
                            className="relative text-xl font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Pizzas
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/productos#bebidas"
                            className="relative text-xl font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Bebidas
                        </Link>
                    </li>
                    <li>
                        <Link href="#"><Image src="/images/favicon.webp" alt="Logo" width={64} height={64} /></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
