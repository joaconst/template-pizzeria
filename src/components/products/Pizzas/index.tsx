'use client';
import { useState, useEffect, useRef } from 'react';
import pizzas from '@/data/pizzas.json';

const PizzaModal = ({ pizza, allPizzas, onClose }: { pizza: any, allPizzas: any[], onClose: () => void }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedHalf, setSelectedHalf] = useState('');
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Función para manejar el clic fuera del modal
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Añadir el event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup del event listener al desmontar
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-8">
      <div 
        ref={modalRef} 
        className="bg-gray-900 rounded-xl max-w-6xl w-full h-[90vh] overflow-y-auto p-3 sm:p-6 relative mx-1 sm:mx-2 scrollbar-hide"
      >
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-xl sm:text-2xl text-white hover:text-secondary transition-colors"
        >
          &times;
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
          <h3 className="text-xl sm:text-3xl font-bold text-white text-center sm:text-left flex-1 order-1">{pizza.title}</h3>
          <div className="relative w-24 h-24 md:w-32 md:h-32 order-2">
            <img
              src={pizza.image}
              alt={pizza.title}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Cantidad */}
          <div className="flex flex-col gap-2">
            <label className="text-white font-medium text-base sm:text-lg">Cantidad</label>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 sm:px-4 py-2 bg-secondary rounded-lg text-white hover:bg-secondary/80"
                >
                  -
                </button>
                <span className="text-white text-xl w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 sm:px-4 py-2 bg-secondary rounded-lg text-white hover:bg-secondary/80"
                >
                  +
                </button>
              </div>
              <button className="w-full sm:w-auto mt-3 sm:mt-0 py-2 px-4 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors text-base sm:text-lg font-semibold">
                Añadir al carrito - ${Number(pizza.price) * quantity}
              </button>
            </div>
          </div>

          {/* Sección combinada Mitades + Ingredientes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Mitades */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-white font-medium text-base sm:text-lg">Mitades</label>
              <select
                className="bg-gray-800 text-white rounded-lg p-2 sm:p-3 border border-gray-600 text-sm sm:text-base"
                value={selectedHalf}
                onChange={(e) => setSelectedHalf(e.target.value)}
              >
                <option value="">Seleccione mitades</option>
                {allPizzas
                  .filter(p => p.id !== pizza.id)
                  .map(p => (
                    <option key={`mitad-${p.id}`} value={p.title}>
                      Mitad {p.title}
                    </option>
                  ))
                }
              </select>
            </div>

            {/* Quitar ingredientes */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium text-base">Quitar ingredientes</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {pizza.ingredients.map((ingredient: string) => (
                  <label
                    key={ingredient}
                    className="flex items-center gap-1.5 text-white bg-gray-800 p-1.5 rounded-md text-xs sm:text-sm"
                  >
                    <input
                      type="checkbox"
                      className="w-3 h-3 sm:w-4 sm:h-4 accent-secondary"
                      checked={removedIngredients.includes(ingredient)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setRemovedIngredients([...removedIngredients, ingredient]);
                        } else {
                          setRemovedIngredients(removedIngredients.filter(i => i !== ingredient));
                        }
                      }}
                    />
                    <span className="truncate">{ingredient}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Ingredientes y Características */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-700">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Ingredientes</h4>
              <ul className="list-disc pl-5 text-white/90 space-y-1 sm:space-y-2">
                {pizza.ingredients.map((ingredient: string) => (
                  <li key={ingredient} className="text-base sm:text-lg">{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Características</h4>
              <ul className="list-disc pl-5 text-white/90 space-y-1 sm:space-y-2">
                {pizza.characteristics.map((char: string) => (
                  <li key={char} className="text-base sm:text-lg">{char}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PizzaGrid = () => {
  const [selectedPizza, setSelectedPizza] = useState<any>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12" id='pizzas'>
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
        Nuestras Pizzas
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
        {pizzas.slice(3).map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-2 transform transition-all duration-300 hover:scale-[1.02]"
          >
            <article className="relative w-full h-82 rounded-lg overflow-hidden flex flex-col items-center text-center bg-transparent">
              <div className="relative z-10 w-[140px] h-[140px] md:w-[160px] md:h-[160px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center justify-between h-full px-3 mt-3 w-full">
                <div className="flex flex-col items-center w-full">
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-xl text-white/90 font-medium text-center">
                    ${item.price}
                  </p>
                </div>

                <div className="mt-3 mb-2 flex justify-center w-full">
                  <button
                    onClick={() => setSelectedPizza(item)}
                    className="inline-block px-6 py-2 text-base font-medium bg-secondary text-white rounded-lg transition-all duration-300 hover:bg-secondary/90"
                  >
                    Ver más
                  </button>
                </div>
              </div>

              <div className="absolute top-[20%] left-0 w-full h-[80%] bg-primary/80 rounded-t-lg z-0" />
            </article>
          </div>
        ))}
      </div>

      {selectedPizza && (
        <PizzaModal
          pizza={selectedPizza}
          allPizzas={pizzas}
          onClose={() => setSelectedPizza(null)}
        />
      )}
    </section>
  );
};

export default PizzaGrid;