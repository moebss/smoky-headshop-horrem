import { Sparkles, MapPin, Phone, ArrowRight } from 'lucide-react';
import heroImg from '../images/hero.jpg';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-neutral-950 overflow-hidden border-b border-neutral-900">
      
      {/* 50/50 Split Grid */}
      <div className="w-full grid lg:grid-cols-2 min-h-[90vh]">
        
        {/* Left Column: Text & Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-24 max-w-2xl mx-auto lg:max-w-none">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest w-fit mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Erster Head- & Shishashop im Rhein-Erft Kreis seit 2014</span>
          </div>

          {/* Headline */}
          <h1 className="font-['Anton'] text-3.5xl xs:text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.08] mb-6">
            Keinen Kopf machen, <br className="hidden sm:inline" />
            <span className="text-amber-500 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-amber-400 sm:via-amber-500 sm:to-amber-600 block sm:inline mt-1 sm:mt-0">
              erstmal noch nen Kopf machen!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-400 text-lg sm:text-xl font-['Lora'] leading-relaxed mb-8 max-w-xl">
            Deine Premium-Adresse in Kerpen-Horrem für professionelle Beratung, exklusive Pfeifen, Marken-Tabak, Bongs & Zubehör.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="tel:+4922739918823"
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 hover:-translate-y-0.5 text-base"
            >
              <Phone className="w-5 h-5 fill-neutral-950" />
              <span>02273 / 9918823 Anrufen</span>
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-semibold px-6 py-4 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors text-base group"
            >
              <MapPin className="w-5 h-5 text-amber-500" />
              <span>Bahnhofstraße 20, Kerpen</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick info list */}
          <div className="pt-6 border-t border-neutral-900 grid grid-cols-2 gap-4 text-sm text-neutral-400">
            <div>
              <span className="block text-white font-bold">Mo – Fr</span>
              <span>11:00 – 19:00 Uhr</span>
            </div>
            <div>
              <span className="block text-white font-bold">Samstag</span>
              <span>11:00 – 16:00 Uhr</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Edge-to-Edge Image with Animated Smoke Effect */}
        <div className="relative min-h-[400px] lg:min-h-full w-full bg-neutral-900 overflow-hidden">
          
          {/* Background Image */}
          <img
            src={heroImg}
            alt="Smoky Head & Shisha Shop Hookah Ambient"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 scale-105"
          />

          {/* Gradient Overlay for seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent lg:bg-gradient-to-r lg:from-neutral-950 lg:via-transparent lg:to-transparent z-10" />
          
          {/* --- SHISHA SMOKE ANIMATION OVERLAY --- */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            
            {/* Ambient smoke puff 1 */}
            <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-neutral-100/10 blur-3xl animate-smoke" />
            
            {/* Ambient smoke puff 2 */}
            <div className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl animate-smoke-delay-1" />
            
            {/* Ambient smoke puff 3 */}
            <div className="absolute bottom-4 right-10 w-80 h-80 rounded-full bg-neutral-200/15 blur-3xl animate-smoke-delay-2" />
            
            {/* Light mist overlay */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent" />
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-8 right-8 z-30 hidden sm:flex items-center gap-3 bg-neutral-950/80 backdrop-blur-md p-4 rounded-xl border border-neutral-800 text-xs">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <span className="block text-white font-bold">Jetzt Geöffnet</span>
              <span className="text-neutral-400">Bahnhofstraße 20 in Horrem</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
