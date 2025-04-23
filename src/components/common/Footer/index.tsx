'use client';

const Footer = () => {
    return (
        <footer className="bg-gray-500 py-16 text-center text-white">
  <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 justify-between items-center max-w-6xl">
    
    {/* Contacto */}
    <div>
      <h4 className="text-xl font-bold mb-2">Contacto</h4>
      <p>Email: info@ejemplo.com</p>
      <p>Teléfono: +54 9 1234 567890</p>
    </div>

    {/* Redes Sociales */}
    <div>
      <h4 className="text-xl font-bold mb-2">Redes Sociales</h4>
      <p>Instagram: @ejemplo</p>
      <p>Facebook: /ejemplo</p>
    </div>

    {/* Ubicación */}
    <div>
      <h4 className="text-xl font-bold mb-2">Ubicación</h4>
      <p>Av. Italia 456, Local 3</p>
      <p>CABA, Argentina</p>
    </div>

  </div>
</footer>

    );
};

export default Footer;