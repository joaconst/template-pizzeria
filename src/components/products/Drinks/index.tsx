'use client';

import Image from 'next/image';
import drinks from '@/data/drinks.json';

interface Drink {
  id: number;
  title: string;
  image: string;
  price: number;
}

const DrinkGrid = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12" id="bebidas">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
        Nuestras Bebidas
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
        {drinks.map((item) => {
          const drink: Drink = {
            ...item,
            price: typeof item.price === 'string' ? Number(item.price) : item.price,
          };

          return (
            <div
              key={drink.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-2 transform transition-all duration-300 hover:scale-[1.02]"
            >
              <article className="relative w-full h-82 rounded-lg overflow-hidden flex flex-col items-center text-center bg-transparent">
                <div className="relative z-10 w-[160px] h-[160px]">
                  <Image
                    src={drink.image}
                    alt={drink.title}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-between h-full px-3 mt-3 w-full">
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-xl font-bold text-white mb-2 text-center">
                      {drink.title}
                    </h3>
                    <p className="text-xl text-white/90 font-medium text-center">
                      ${drink.price}
                    </p>
                  </div>

                  <div className="mt-3 mb-2 flex justify-center w-full">
                    <button className="inline-block px-6 py-2 text-base font-medium bg-secondary text-white rounded-lg transition-all duration-300 hover:bg-secondary/90">
                      Ver más
                    </button>
                  </div>
                </div>

                <div className="absolute top-[20%] left-0 w-full h-[80%] bg-primary/80 rounded-t-lg z-0" />
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DrinkGrid;
