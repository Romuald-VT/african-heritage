"use client"
import { useState, useEffect } from "react";
import Link from 'next/link'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-2xl lg:text-xl font-bold text-gray-800 shrink-0">
          <span className="text-indigo-600">AFRICAN</span>HERITAGE
        </Link>

        {/* Menu Desktop */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            Accueil
          </Link>
          <Link href="/service" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            Services
          </Link>
          <Link href="/expertise" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            Expertise
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Boutons Desktop */}
        <div className="hidden lg:flex space-x-2">
          <Link
            href="/registration"
            className="bg-indigo-600 text-white px-3 py-2 sm:px-4 rounded-md hover:bg-indigo-700 transition duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            inscription 
          </Link>
          <Link
            href="/login"
            className="bg-indigo-600 text-white px-3 py-2 sm:px-4 rounded-md hover:bg-indigo-700 transition duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            connexion
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Menu Mobile */}
        <div 
          className={`${
            isOpen ? 'block animate-fadeIn' : 'hidden'
          } absolute top-full right-0 left-0 bg-white shadow-lg mt-2 py-2 lg:hidden`}
        >
          <Link href="/" 
            className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
            onClick={toggleMenu}
          >
            Accueil
          </Link>
          <Link href="/service" 
            className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link href="/expertise" 
            className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
            onClick={toggleMenu}
          >
            Expertise
          </Link>
          <Link href="/contact" 
            className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <div className="px-4 py-2 space-y-2">
            <Link href="/expert-login" 
              className="block text-indigo-600 hover:bg-indigo-50 py-2"
              onClick={toggleMenu}
            >
              Je suis un expert
            </Link>
            <Link href="/user-login" 
              className="block text-indigo-600 hover:bg-indigo-50 py-2"
              onClick={toggleMenu}
            >
              Connexion
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
