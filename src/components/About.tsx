import { Heart, Users, MapPin, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-neutral-900/40 border-y border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Über das Team Smoky</span>
            </div>

            <h2 className="font-['Anton'] text-4xl sm:text-5xl uppercase tracking-tight text-white mb-6">
              Dein Fachgeschäft im Rhein-Erft Kreis
            </h2>

            <div className="space-y-4 text-neutral-300 font-['Lora'] leading-relaxed">
              <p>
                Herzlich Willkommen! Das Team Smoky begrüßt euch auf unserer Website. Wir sind ein mittelständisches Unternehmen mit einem jungen, dynamischen Team aus dem Großraum Köln.
              </p>
              <p>
                Im <strong className="text-white">Februar 2014</strong> haben wir stolz den ersten Head- & Shishashop im Rhein-Erft Kreis in Kerpen-Horrem eröffnet. 
              </p>
              <p>
                Durch unsere jahrelange Erfahrung bieten wir euch eine fachliche und kompetente Beratung rund um das Thema Wasserpfeifen, Tabak und Headshop-Bedarf. Wir nehmen uns Zeit für jeden Kunden – egal ob du Anfänger bist oder erfahrener Shisha-Kenner.
              </p>
            </div>

            <div className="mt-8 p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
              <span className="font-['Anton'] text-amber-500 text-xl uppercase block mb-1">
                "Keinen Kopf machen, erstmal noch nen Kopf machen!"
              </span>
              <span className="text-xs text-neutral-400 font-sans tracking-widest uppercase">
                — Euer Team Smoky
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-center text-center">
              <span className="font-['Anton'] text-5xl text-amber-500 block mb-2">2014</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider block">Gegründet</span>
              <span className="text-xs text-neutral-400 mt-1">Pionier im Erftkreis</span>
            </div>

            <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-center text-center">
              <span className="font-['Anton'] text-5xl text-amber-500 block mb-2">100%</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider block">Leidenschaft</span>
              <span className="text-xs text-neutral-400 mt-1">Echte Fachberatung</span>
            </div>

            <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-center text-center col-span-2">
              <span className="font-['Anton'] text-3xl text-white uppercase block mb-1">Markenvielfalt</span>
              <p className="text-xs text-neutral-400">
                Von Al Fakher, Nameless, Holster, O`s bis hin zu Zomo – täglich frische Ware & Neuheiten auf Lager.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
