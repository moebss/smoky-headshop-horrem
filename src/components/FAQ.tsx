import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Wo befindet sich der Smoky Head & Shisha Shop?",
      a: "Du findest uns direkt auf der Bahnhofstraße 20 in 50169 Kerpen-Horrem im Großraum Köln / Rhein-Erft Kreis."
    },
    {
      q: "Wie sind eure Öffnungszeiten?",
      a: "Wir haben von Montag bis Freitag durchgehend von 11:00 bis 19:00 Uhr geöffnet. Samstags sind wir von 11:00 bis 16:00 Uhr für dich da."
    },
    {
      q: "Welche Shishatabak Marken habt ihr im Sortiment?",
      a: "Unser Sortiment umfasst alle beliebten Marken von A wie Al Fakher bis Z wie Zomo (z.B. Holster, Nameless, O's, 187 Strassenbande uvm.). Regelmäßig treffen frische Neuheiten bei uns ein."
    },
    {
      q: "Bietet ihr auch Zubehör für den Growbereich an?",
      a: "Ja! Im Headshop- und Growbereich stehen wir euch beratend zur Seite. Auf Bestellung ist fast alles machbar – sprecht uns einfach im Laden an."
    },
    {
      q: "Kann ich Produkte reservieren oder telefonisch anfragen?",
      a: "Selbstverständlich! Rufen uns einfach unter 02273 / 9918823 an und frage nach der Verfügbarkeit deines Wunschtabaks oder Zubehörs."
    }
  ];

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Häufige Fragen</span>
          </div>
          <h2 className="font-['Anton'] text-4xl uppercase tracking-tight text-white">
            FAQ & Wissenswertes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left font-bold text-white flex items-center justify-between gap-4 hover:text-amber-400 transition-colors"
                >
                  <span className="text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-neutral-400 font-['Lora'] text-base border-t border-neutral-800/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
