import { X } from 'lucide-react';

interface LegalModalProps {
  onClose: () => void;
}

export function Impressum({ onClose }: LegalModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md overflow-y-auto p-4 sm:p-6 md:p-10 flex justify-center items-start">
      <div className="bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-2xl max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl my-8">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-['Anton'] text-3xl uppercase text-white mb-6">Impressum</h2>

        <div className="space-y-6 text-sm leading-relaxed text-neutral-300">
          <div>
            <h3 className="font-bold text-white text-base mb-1">Angaben gemäß § 5 TMG</h3>
            <p className="font-semibold text-amber-400">Smoky Head & Shisha Shop</p>
            <p>Inhaber: [INHABER NAME EINTRAGEN]</p>
            <p>Bahnhofstraße 20</p>
            <p>50169 Kerpen-Horrem</p>
          </div>

          <div>
            <h3 className="font-bold text-white text-base mb-1">Kontakt</h3>
            <p>Telefon: 02273 / 9918823</p>
            <p>E-Mail: [E-MAIL ADRESSE EINTRAGEN]</p>
            <p>Website: www.smoky-headshop.de</p>
          </div>

          <div>
            <h3 className="font-bold text-white text-base mb-1">Umsatzsteuer-ID</h3>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>[UST-ID EINTRAGEN, Z.B. DE123456789]</p>
          </div>

          <div>
            <h3 className="font-bold text-white text-base mb-1">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>[NAME UND ANSCHRIFT VERANTWORTLICHER EINTRAGEN]</p>
          </div>

          <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-500">
            <p>Hinweis: Bitte ersetzen Sie die in eckigen Klammern [ ] markierten Platzhalter durch die juristisch korrekten Daten Ihres Unternehmens.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
