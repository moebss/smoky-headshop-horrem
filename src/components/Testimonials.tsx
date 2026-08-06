import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const reviews = [
    {
      name: 'Dennis K.',
      role: 'Stammkunde aus Kerpen',
      text: 'Bester Shisha Laden in der ganzen Umgebung! Der Besitzer nimmt sich immer Zeit für eine ausführliche Beratung. Riesige Tabakauswahl und faire Preise. Absolut empfehlenswert!',
      rating: 5,
    },
    {
      name: 'Marvin B.',
      role: 'Kunde aus Horrem',
      text: 'Super freundlich und kompetent. Habe mir hier meine erste Edelstahl-Shisha geholt und wurde perfekt beraten bezüglich Phunnel-Kopf und HMD. Läuft bis heute perfekt!',
      rating: 5,
    },
    {
      name: 'Sabrina T.',
      role: 'Kundin aus Bergheim',
      text: 'Toller Laden! Sehr gut sortierter Headshop-Bereich mit allem was man braucht. Sehr sauberes Geschäft und klasse Service seit vielen Jahren.',
      rating: 5,
    },
  ]

  return (
    <section id="bewertungen" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-2">
            ECHTE KUNDENSTIMMEN
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            4,6 Sterne aus über 140 Google-Bewertungen
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Das sagen Kunden über unseren Service und unser Sortiment in Kerpen-Horrem.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between relative group hover:border-slate-700 transition-all"
            >
              <Quote className="w-10 h-10 text-slate-800 absolute top-6 right-6" />

              <div>
                {/* Neutral Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-slate-200 stroke-slate-200" />
                  ))}
                </div>

                <p className="text-slate-300 text-base leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="font-bold text-white text-base">{rev.name}</div>
                <div className="text-xs text-amber-500">{rev.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA Note */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=Bahnhofstraße+20+50169+Kerpen-Horrem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 underline decoration-slate-700 underline-offset-4 transition-colors"
          >
            <span>Alle Google-Bewertungen ansehen & eigene Erfahrung teilen ↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}
