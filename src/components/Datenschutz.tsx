import { X } from 'lucide-react';

interface LegalModalProps {
  onClose: () => void;
}

export function Datenschutz({ onClose }: LegalModalProps) {
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

        <h2 className="font-['Anton'] text-3xl uppercase text-white mb-6">Datenschutzerklärung</h2>

        <div className="space-y-6 text-sm leading-relaxed text-neutral-300">
          
          <div>
            <h3 className="font-bold text-white text-base mb-1">1. Datenschutz auf einen Blick</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white text-base mb-1">2. Verantwortliche Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">
              <strong>Smoky Head & Shisha Shop</strong><br />
              Bahnhofstraße 20<br />
              50169 Kerpen-Horrem<br />
              Telefon: 02273 / 9918823
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white text-base mb-1">3. Datenerfassung auf unserer Website</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Wenn Sie das Kontaktformular nutzen, werden Ihre eingegebenen Formulardaten zwecks Bearbeitung der Anfrage verarbeitet und gespeichert.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white text-base mb-1">4. Ihre Rechte</h3>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-500">
            <p>Hinweis: Diese Datenschutzerklärung dient als Platzhalter und sollte vor Veröffentlichung juristisch geprüft werden.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
