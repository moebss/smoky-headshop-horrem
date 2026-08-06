import productsImg from '../images/products.jpg'
import { Flame, Sparkles, Box, Wrench, CheckCircle2 } from 'lucide-react'

export function Products() {
  const categories = [
    {
      title: 'Shisha & Wasserpfeifen',
      desc: 'Edelstahl-, Aluminium- und Reise-Shishas namhafter Hersteller (Aladin, Moze, Ocean, Steamulation & mehr). Vom soliden Einsteiger-Modell bis zum High-End Setup.',
      icon: Flame,
      tags: ['Edelstahl', 'Aluminium', 'Plug-In', 'Reise-Shishas'],
    },
    {
      title: 'Tabak & Naturkohle',
      desc: 'Riesiges Tabaksortiment bester Marken in allen Geschmacksrichtungen. Dazu Premium-Naturkohle (26mm & 27mm) sowie Anzünder für optimale Hitzeentwicklung.',
      icon: Sparkles,
      tags: ['Top-Hersteller', 'Naturkohle', 'Kohleanzünder', 'Molasse'],
    },
    {
      title: 'Headshop & Equipment',
      desc: 'Glasbongs, Acrylbongs, Vaporizer, Metall- & Holz-Grinder, Waagen, Aktivkohlefilter sowie Qualitäts-Papers & Filtertips.',
      icon: Box,
      tags: ['Bongs', 'Grinder', 'Vaporizer', 'Papers & Filter'],
    },
    {
      title: 'Zubehör & Ersatzteile',
      desc: 'Phunnel- & Mehrlochköpfe, Heat Management Devices (HMDs), Edelstahlzangen, Silikonschläuche, Ersatzgläser & Reinigungszubehör.',
      icon: Wrench,
      tags: ['Phunnels & HMDs', 'Ersatzgläser', 'Reinigungsset', 'Schläuche'],
    },
  ]

  return (
    <section id="sortiment" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-2">
            UNSER SORTIMENT IN HORREM
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Alles für deine perfekte Session
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Wir führen ausschließlich geprüfte Markenware. Egal ob Ersatzteil oder Komplettset – bei uns bekommst du Markenqualität mit persönlicher Beratung.
          </p>
        </div>

        {/* Grid Layout with Showcase Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Categories Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                    {cat.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Product Image Showcase */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
            <img
              src={productsImg}
              alt="Smoky Headshop Premium Zubehör"
              className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
              <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Fachberatung inklusive</span>
              </div>
              <h4 className="font-display font-bold text-xl text-white">
                Unentschlossen beim Kauf?
              </h4>
              <p className="text-slate-300 text-sm mt-1">
                Komm einfach im Laden in Horrem vorbei! Wir beraten dich persönlich zum passenden Tabak-Kopf, HMD oder der richtigen Shisha.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
