import { useState } from 'react';
import { Flame, Phone, MapPin, Heart } from 'lucide-react';
import { Impressum } from './Impressum';
import { Datenschutz } from './Datenschutz';

export function Footer() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  return (
    <>
      <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            
            {/* Col 1: Brand */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-neutral-950">
                  <Flame className="w-5 h-5 fill-neutral-950" />
                </div>
                <span className="font-['Anton'] text-2xl text-white tracking-wider uppercase">
                  SMOKY HEAD & SHISHA SHOP
                </span>
              </div>
              <p className="text-neutral-400 max-w-sm text-sm leading-relaxed">
                Der erste Head- & Shishashop im Rhein-Erft Kreis. Seit 2014 dein kompetenter Ansprechpartner für Wasserpfeifen, Tabak, Bongs & Grow-Bedarf.
              </p>
              <p className="text-xs text-neutral-500">
                "Keinen Kopf machen, erstmal noch nen Kopf machen!"
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="font-['Anton'] text-white uppercase text-lg mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">Über Uns</a></li>
                <li><a href="#headshop" className="hover:text-amber-400 transition-colors">Headshop & Bongs</a></li>
                <li><a href="#shisha" className="hover:text-amber-400 transition-colors">Shisha & Tabak</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Kontakt & Anfahrt</a></li>
              </ul>
            </div>

            {/* Col 3: Legal & NAP */}
            <div>
              <h4 className="font-['Anton'] text-white uppercase text-lg mb-4">Rechtliches & NAP</h4>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-white font-semibold">Smoky Head & Shisha Shop</p>
                <p>Bahnhofstraße 20</p>
                <p>50169 Kerpen-Horrem</p>
                <p className="text-amber-400">Tel: 02273 / 9918823</p>
              </div>
              <div className="flex flex-col space-y-1.5 text-xs text-neutral-400">
                <button
                  onClick={() => setShowImpressum(true)}
                  className="text-left hover:text-amber-400 underline transition-colors"
                >
                  Impressum
                </button>
                <button
                  onClick={() => setShowDatenschutz(true)}
                  className="text-left hover:text-amber-400 underline transition-colors"
                >
                  Datenschutzerklärung
                </button>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} Smoky Head & Shisha Shop Kerpen. Alle Rechte vorbehalten.</p>
            <p className="flex items-center gap-1">
              Erstellt für lokalen Erfolg im Rhein-Erft Kreis
            </p>
          </div>
        </div>
      </footer>

      {showImpressum && <Impressum onClose={() => setShowImpressum(false)} />}
      {showDatenschutz && <Datenschutz onClose={() => setShowDatenschutz(false)} />}
    </>
  );
}
