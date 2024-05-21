import { useState } from 'react';
import '@fontsource-variable/cinzel'; // Importing Cinzel Variable font

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative z-10">
      <button onClick={toggleMenu} className="text-white focus:outline-none">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 text-white rounded-lg shadow-lg bg-transparent z-20">
          <a href="#experiencia" className="block px-4 py-2 hover:text-yellow-400" style={{ fontFamily: 'Cinzel Variable, serif', textTransform: 'uppercase' }}>Experiencia</a>
          <a href="#about" className="block px-4 py-2 hover:text-yellow-400" style={{ fontFamily: 'Cinzel Variable, serif', textTransform: 'uppercase' }}>About</a>
          <a href="#tecnologias" className="block px-4 py-2 hover:text-yellow-400" style={{ fontFamily: 'Cinzel Variable, serif', textTransform: 'uppercase' }}>Tecnologías</a>
          <a href="#contacto" className="block px-4 py-2 hover:text-yellow-400" style={{ fontFamily: 'Cinzel Variable, serif', textTransform: 'uppercase' }}>Contacto</a>
        </div>
      )}
    </div>
  );
}

export default Menu;
