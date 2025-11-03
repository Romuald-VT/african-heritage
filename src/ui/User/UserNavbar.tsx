"use client"

import Link from "next/link";
import { useState } from "react";
import Button from "../Miscellanous/ButtonUI";

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout=()=>{
    
  }

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <span className="text-indigo-600">UNESCOPATRIMOINE </span>AFRIQUE
        </Link>

        {/* Bouton de menu hamburger pour petits écrans */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Bouton réutilisé */}
        {/* <div className="hidden md:flex space-x-2">
          <Button text="Deconnexion" to="/user-login"/>
        </div> */}
      </nav>
    </header>
  );
};

export default UserNavbar;
