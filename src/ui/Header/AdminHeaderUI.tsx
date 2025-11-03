"use client"
import Link from 'next/link';
import React, { useState } from 'react';

interface HeaderProps {
  brandName?: string;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  brandName = '',
  isDarkMode = false,
  onToggleDarkMode 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Help', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white  shadow-[0_1px_0_#e5e7eb] dark:shadow-[0_1px_0_#26262b] backdrop-blur-md backdrop-saturate-[160%]">
      <div className="max-w-[1080px] mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3.5">
         <Link href="/" className="text-lg md:text-2xl lg:text-xl font-bold text-gray-800 flex-shrink-0">
          <span className="text-indigo-600">UNESCOPATRIMOINE </span>AFRIQUE
        </Link>
        <a href="#" className="inline-flex items-center gap-2.5 no-underline text-[#111111] dark:text-[#f5f5f7]">
          <span className="font-mono text-xl -translate-y-px" aria-hidden="true">
            ⌾
          </span>
          <span className="font-semibold tracking-wide">{brandName}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-4 justify-center" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              className="bg-transparent border-0 text-[#6b7280] dark:text-[#a1a1aa] px-2.5 py-2 rounded-lg cursor-pointer transition-all duration-150 hover:text-[#111111] dark:hover:text-[#f5f5f7] hover:-translate-y-px"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="inline-flex items-center gap-2.5">
          {/* Theme Toggle */}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden border border-[#e5e7eb] dark:border-[#26262b] bg-transparent text-[#111111] dark:text-[#f5f5f7] px-2.5 py-2 rounded-[10px] cursor-pointer transition-all duration-150 hover:-translate-y-px hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Toggle menu"
          >
            <span className="inline-block w-[18px] h-0.5 bg-current relative">
              <span className="absolute left-0 w-[18px] h-0.5 bg-current -top-1.5"></span>
              <span className="absolute left-0 w-[18px] h-0.5 bg-current top-1.5"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      {isMenuOpen && (
        <div className="border-t border-[#e5e7eb] dark:border-[#26262b] bg-white dark:bg-[#0e0e10]">
          <nav className="grid gap-1 px-5 pt-2.5 pb-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="no-underline text-[#6b7280] dark:text-[#a1a1aa] px-3 py-2.5 rounded-lg transition-all duration-150 hover:text-[#111111] dark:hover:text-[#f5f5f7] hover:bg-black/5 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header