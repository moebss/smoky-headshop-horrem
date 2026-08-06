import { Star, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export function TrustStrip() {
  return (
    <section className="bg-neutral-900/60 border-b border-neutral-800/80 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          
          {/* Trust item 1: Rating */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-white text-lg">Top bewertet</span>
              </div>
              <p className="text-xs text-neutral-400">Eines der beliebtesten Geschäfte im Erftkreis</p>
            </div>
          </div>

          {/* Trust item 2: Experience */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-white text-lg block">Seit Feb 2014</span>
              <p className="text-xs text-neutral-400">12+ Jahre Erfahrung & Beratung</p>
            </div>
          </div>

          {/* Trust item 3: First in area */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-white text-lg block">1. Shop im Kreis</span>
              <p className="text-xs text-neutral-400">Pionier im Rhein-Erft Kreis</p>
            </div>
          </div>

          {/* Trust item 4: Variety */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-amber-400">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-white text-lg block">Riesenauswahl</span>
              <p className="text-xs text-neutral-400">Von Spar-Budget bis Luxus</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
