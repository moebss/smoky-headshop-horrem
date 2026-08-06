import { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, Flame } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/90 border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-neutral-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 fill-neutral-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Anton'] text-xl sm:text-2xl tracking-wider uppercase text-white leading-none">
                SMOKY
              </span>
              <span className="text-[10px] sm:text-xs text-amber-500 font-semibold tracking-wider uppercase leading-none mt-1 whitespace-nowrap">
                Head & Shisha Shop
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-neutral-300 hover:text-amber-500 font-medium transition-colors">
              Über Uns
            </a>
            <a href="#headshop" className="text-sm text-neutral-300 hover:text-amber-500 font-medium transition-colors">
              Headshop
            </a>
            <a href="#shisha" className="text-sm text-neutral-300 hover:text-amber-500 font-medium transition-colors">
              Shisha & Tabak
            </a>
            <a href="#contact" className="text-sm text-neutral-300 hover:text-amber-500 font-medium transition-colors">
              Kontakt & Anfahrt
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+4922739918823"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-5 py-2.5 rounded-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              <Phone className="w-4 h-4 fill-neutral-950" />
              <span>02273 / 9918823</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
            aria-label="Menü öffnen"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950/98 px-4 pt-2 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-3 pt-2">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-base text-neutral-200 hover:text-amber-500 font-medium py-1"
            >
              Über Uns
            </a>
            <a
              href="#headshop"
              onClick={() => setIsOpen(false)}
              className="text-base text-neutral-200 hover:text-amber-500 font-medium py-1"
            >
              Headshop
            </a>
            <a
              href="#shisha"
              onClick={() => setIsOpen(false)}
              className="text-base text-neutral-200 hover:text-amber-500 font-medium py-1"
            >
              Shisha & Tabak
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-base text-neutral-200 hover:text-amber-500 font-medium py-1"
            >
              Kontakt & Anfahrt
            </a>
          </nav>
          <div className="pt-2">
            <a
              href="tel:+4922739918823"
              className="w-full flex items-center justify-center gap-2 bg-amber-500 text-neutral-950 font-bold px-4 py-3 rounded-lg text-center"
            >
              <Phone className="w-4 h-4 fill-neutral-950" />
              <span>Direkt Anrufen</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
