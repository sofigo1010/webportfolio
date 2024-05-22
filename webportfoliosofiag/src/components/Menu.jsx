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
          <a href="#about" className="block text-sm px-4 py-2 hover:text-yellow-400" style={{ fontFamily: 'Cinzel Variable, serif', textTransform: 'uppercase' }}>About</a>
          <a href="#experiencia" className="block text-sm px-4 py-2 hover:text-yellow-400" style={{ fontFamily: 'Cinzel Variable, serif', textTransform: 'uppercase' }}>Experience</a>
          <a href="#projects" className="block text-sm px-4 py-2 hover:text-yellow-400" style={{ fontFamily: 'Cinzel Variable, serif', textTransform: 'uppercase' }}>Projects</a>
          <a href="#tecnologias" className="block text-sm px-4 py-2 hover:text-yellow-400" style={{ fontFamily: 'Cinzel Variable, serif', textTransform: 'uppercase' }}>Technologies</a>
          <a href="#contacto" className="block text-sm px-4 py-2 hover:text-yellow-400" style={{ fontFamily: 'Cinzel Variable, serif', textTransform: 'uppercase' }}>Contact</a>
        </div>
      )}
    </div>
  );
}

export default Menu;
