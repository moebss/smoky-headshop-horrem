import { CheckCircle2, Flame } from 'lucide-react';
import headshopImg from '../images/headshop.jpg';
import tobaccoImg from '../images/tobacco.jpg';

export function Categories() {
  return (
    <section className="py-24 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-2">
            Unser Sortiment
          </span>
          <h2 className="font-['Anton'] text-4xl sm:text-5xl uppercase tracking-tight text-white mb-6">
            Alles für deine perfekte Session
          </h2>
          <p className="text-neutral-400 font-['Lora'] text-lg">
            Vom Einsteiger-Equipment bis zur absoluten Premium-Klasse. Wir beraten dich persönlich und individuell vor Ort in Kerpen-Horrem.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Headshop */}
          <div id="headshop" className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src={headshopImg}
                alt="Headshop Produkte Bongs Grinder"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-amber-500 text-neutral-950 text-xs font-bold uppercase rounded">
                  Headshop & Grow
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-['Anton'] text-2xl uppercase text-white mb-4">
                  Headshop, Bongs & Grow-Bedarf
                </h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  In unserem Headshop-Bereich erwartet dich eine riesige Auswahl an Zubehör für jeden Geschmack. Wir führen Qualitätsware führender Hersteller.
                </p>
                <ul className="space-y-2.5 text-sm text-neutral-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>Bongs, Vorkühler & Köpfe verschiedenster Schliffgrößen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>Grinder, Purpfeifen, Vaporizer & Aktivkohlefilter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>Blättchen, Papers, Tip-Blocks & Roll-Zubehör</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>Growbereich-Beratung & individuelle Bestellung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Shisha & Tabak */}
          <div id="shisha" className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src={tobaccoImg}
                alt="Shisha Tabak Hookah Sortiment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-amber-500 text-neutral-950 text-xs font-bold uppercase rounded">
                  Shisha & Tabak
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-['Anton'] text-2xl uppercase text-white mb-4">
                  Wasserpfeifen, Tabak & Zubehör
                </h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  Von A wie Al Fakher bis Z wie Zomo stehen bei uns alle Top-Marken in den Vitrinen. Regelmäßig treffen frische Tabak-Neuheiten ein!
                </p>
                <ul className="space-y-2.5 text-sm text-neutral-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>Hookahs für kleine Geldbörsen bis hin zur Luxus Shisha</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>Riesige Sortenvielfalt an Marken-Shishatabak</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>Pimp your Shisha: Mundstücke, Molassefänger & LED-Untersetzer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>Naturkohle, Selbstzünder & leistungsstarke Kohleanzünder</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
