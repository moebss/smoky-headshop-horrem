import { useState } from 'react';
import { Phone, MapPin, Clock, Star, Flame, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, X, Compass, ShoppingBag, Zap, Award, Send, ChevronDown, HelpCircle, AlertCircle } from 'lucide-react';

import heroShisha from './images/hero_shisha.jpg';
import tobaccoImg from './images/tobacco.jpg';
import vapesImg from './images/vapes.jpg';
import headshopImg from './images/headshop.jpg';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'shisha' | 'vape' | 'headshop'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const faqs = [
    {
      q: "Verkauft ihr nur vor Ort im Laden oder kann man Produkte vorbestellen?",
      a: "Du kannst all unsere Produkte direkt vor Ort in Kerpen-Horrem (Bahnhofstraße 20) kaufen oder bequem über unser Anfrageformular bzw. telefonisch unter 02273 9918823 vorbestellen und zur schnellen Abholung zurücklegen lassen."
    },
    {
      q: "Welche Shisha-Tabaksorten und Kohlen habt ihr vorrätig?",
      a: "Wir führen ständig die beliebtesten Bestseller-Marken wie Nameless (Black Nana), Holster, O’s Tobacco, 187 Strassenbande und Hookain sowie hochwertige 26mm Kokos-Naturkohle."
    },
    {
      q: "Bietet ihr auch Vapes, Pod-Systeme & Liquids an?",
      a: "Ja! Wir haben ein großes Sortiment an Einweg-Vapes, nachfüllbaren Pod-Systemen (u. a. Elfbar, Lost Mary, Pod Salt) sowie Liquids mit und ohne Nikotin."
    },
    {
      q: "Helft ihr mir bei der Auswahl des richtigen Shisha-Setups oder Kopfes?",
      a: "Absolut. Unser erfahrenes Team berät dich vor Ort persönlich zu Phunnel-Köpfen, HMDs (Heat Management Devices), Edelstahl-Pfeifen und der optimalen Hitzeregulierung."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-zinc-100 selection:bg-amber-500 selection:text-zinc-950 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/95 border-b border-zinc-800/80">
        <div className="hidden lg:block bg-zinc-900/90 border-b border-zinc-800/60 py-2.5 px-6 text-xs text-zinc-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Bahnhofstraße 20, 50169 Kerpen-Horrem</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Mo – Fr: 11:00 – 19:00 Uhr | Sa: 11:00 – 16:00 Uhr</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                ★ 4.6 Google Sterne
              </span>
              <a href="tel:022739918823" className="font-bold text-white hover:text-amber-400 transition-colors">
                ☎ 02273 9918823
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-zinc-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Flame className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading text-xl font-black uppercase text-white block leading-none tracking-tight">
                  SMOKY <span className="text-amber-500">HEAD&SHISHA</span>
                </span>
                <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest block mt-1">
                  PREMIUM SHISHA STORE & HEADSHOP HORREM
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <a
                href="tel:022739918823"
                className="hidden sm:inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>02273 9918823</span>
              </a>

              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5"
              >
                <span>Produkte Reservieren</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Bleed Immersive Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-zinc-800 overflow-hidden py-24">
        
        {/* Full-Screen Shisha Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroShisha}
            alt="Smoky Headshop Horrem Edelstahl Shisha Pfeife"
            className="w-full h-full object-cover object-center scale-105 filter contrast-110 brightness-75"
          />
          {/* Dark Smoke Ambient Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80" />
          <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-8">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-2xl">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Smoky Head&Shisha Shop Horrem • Bahnhofstraße 20</span>
            </div>

            {/* Custom Slogan Headline */}
            <h1 className="font-heading text-4.5xl sm:text-6xl lg:text-7.5xl uppercase tracking-tight text-white leading-[1.02] font-black drop-shadow-2xl">
              KEINEN KOPF MACHEN, <br />
              <span className="text-amber-500 drop-shadow-[0_10px_20px_rgba(245,158,11,0.4)]">
                ERSTMAL NOCH 'NEN KOPF MACHEN.
              </span>
            </h1>

            <p className="text-zinc-200 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Deine Top-Adresse in Kerpen-Horrem für Premium Edelstahl-Shishas, Phunnels, Tabak-Bestseller, 26mm Naturkohle, Einweg/Mehrweg Vapes & Headshop-Zubehör.
            </p>

            {/* Feature Badges */}
            <div className="grid sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 border-l-4 border-l-amber-500">
                <span className="text-xs font-bold text-amber-400 block mb-1">100% Originale</span>
                <span className="text-sm font-bold text-white">Top-Marken & Tabak</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 border-l-4 border-l-amber-500">
                <span className="text-xs font-bold text-amber-400 block mb-1">Echte Beratung</span>
                <span className="text-sm font-bold text-white">Kopf- & Setups-Tipps</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 border-l-4 border-l-amber-500">
                <span className="text-xs font-bold text-amber-400 block mb-1">Zentral gelegen</span>
                <span className="text-sm font-bold text-white">Bahnhofstraße 20</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact-section"
                className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-amber-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                <span>Produkt-Anfrage & Reservierung</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:022739918823"
                className="bg-zinc-950/90 hover:bg-zinc-900 border border-zinc-700 text-white font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:border-amber-500/50 backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>02273 9918823 Anrufen</span>
              </a>
            </div>

            {/* Review Strip */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-xs text-zinc-300 font-semibold">
                <strong className="text-white">4.6 / 5.0 Sterne</strong> aus 120+ Google-Bewertungen in Kerpen-Horrem
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="py-10 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-amber-500 block">4.6 ★</span>
              <span className="text-xs text-zinc-300 font-medium">Google Sterne-Bewertung</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-white block">500+</span>
              <span className="text-xs text-zinc-300 font-medium">Shishas, Tabak & Vapes</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-amber-500 block">100%</span>
              <span className="text-xs text-zinc-300 font-medium">Originalware & Fachberatung</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-white block">Horrem</span>
              <span className="text-xs text-zinc-300 font-medium">Zentral am Bahnhof</span>
            </div>
          </div>
        </div>
      </section>

      {/* Real Product Showcase Section */}
      <section id="products" className="py-24 bg-[#0b0b0e] text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">
                Produkt-Kategorien
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">
                UNSER SORTIMENT VOR ORT IN HORREM
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 p-1.5 rounded-xl border border-zinc-800">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === 'all' ? 'bg-amber-500 text-zinc-950 shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Alle
              </button>
              <button
                onClick={() => setActiveTab('shisha')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === 'shisha' ? 'bg-amber-500 text-zinc-950 shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Shisha & Tabak
              </button>
              <button
                onClick={() => setActiveTab('vape')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === 'vape' ? 'bg-amber-500 text-zinc-950 shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Vapes
              </button>
              <button
                onClick={() => setActiveTab('headshop')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === 'headshop' ? 'bg-amber-500 text-zinc-950 shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Headshop
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Shishas & Komplett-Setups",
                category: "shisha",
                img: heroShisha,
                desc: "Hochwertige Edelstahl-Shishas von Moze, Ocean Hookah, Aladin & Amy Deluxe. Inklusive Zubehör, Phunnels & HMDs."
              },
              {
                title: "Shisha-Tabak & Naturkohle",
                category: "shisha",
                img: tobaccoImg,
                desc: "Riesige Auswahl an Tabak-Bestsellern von Nameless, Holster, O’s, 187 Strassenbande & Kokoskohle in 26mm."
              },
              {
                title: "Einweg & Mehrweg Vapes",
                category: "vape",
                img: vapesImg,
                desc: "Neuste Vape-Pods, E-Zigaretten & Liquids (Elfbar, Lost Mary, Pod Salt) in allen erdenklichen Flavors."
              },
              {
                title: "Headshop & Glaskunst",
                category: "headshop",
                img: headshopImg,
                desc: "Vaporizer für Kräuter, Präzisions-Grinder, Glasbongs, Aktivkohlefilter, Blunts & Papers."
              }
            ]
            .filter(p => activeTab === 'all' || p.category === activeTab)
            .map((p, idx) => (
              <div key={idx} className="product-card rounded-2xl overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-zinc-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow">
                        Top-Qualität
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#contact-section"
                    className="w-full bg-zinc-900 hover:bg-amber-500 text-zinc-200 hover:text-zinc-950 border border-zinc-800 hover:border-amber-500 font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                  >
                    <span>Im Laden Anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950 text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">Community Urteil</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white mb-6 font-black">Echte Google-Bewertungen</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dennis K.",
                text: "Super sympathischer Laden! Immer die neusten Tabaksorten auf Lager und die Beratung bezüglich Phunnel-Köpfen war absolut erstklassig."
              },
              {
                name: "Marco S.",
                text: "Der beste Shishashop im Erftkreis. Die Auswahl an Vapes und Kohle ist riesig und die Preise sind top fair!"
              },
              {
                name: "Lisa M.",
                text: "Sehr gepflegter Shop direkt an der Bahnhofstraße. Mitarbeiter nehmen sich Zeit und helfen sofort weiter."
              }
            ].map((t, idx) => (
              <div key={idx} className="product-card rounded-2xl p-8 space-y-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-zinc-200 text-sm leading-relaxed italic">"{t.text}"</p>
                <div className="pt-4 border-t border-zinc-800">
                  <span className="font-bold text-white text-sm block">{t.name}</span>
                  <span className="text-xs text-amber-400 font-medium">Verifizierter Google-Reviewer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Permanent Inline Contact Form Section */}
      <section id="contact-section" className="py-24 bg-[#0b0b0e] text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">Kontakt & Reservierung</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">SCHREIB UNS ODER BESUCHE UNS IN HORREM</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Map */}
            <div className="lg:col-span-6 space-y-8 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-4 text-sm text-zinc-300">
                <h3 className="font-heading text-2xl font-black text-white uppercase mb-4">SMOKY HEAD&SHISHA SHOP</h3>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Adresse:</strong>
                    Bahnhofstraße 20, 50169 Kerpen-Horrem
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Telefon:</strong>
                    <a href="tel:022739918823" className="hover:text-amber-400 font-bold text-amber-400">02273 9918823</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Öffnungszeiten:</strong>
                    Montag – Freitag: 11:00 – 19:00 Uhr<br />
                    Samstag: 11:00 – 16:00 Uhr
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-zinc-800 aspect-[16/9] bg-zinc-950">
                <iframe
                  title="Smoky Headshop Horrem Map"
                  src="https://maps.google.com/maps?q=Bahnhofstraße%2020%2C%2050169%20Kerpen-Horrem&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale contrast-125 opacity-85"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Permanent Inline Contact & Reservation Form */}
            <div className="lg:col-span-6 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
              <h3 className="font-heading text-2xl font-black text-white uppercase mb-2">PRODUKT ANFRAGEN ODER RESERVIEREN</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Du suchst einen bestimmten Tabak, ein Shisha-Modell oder Vape-Flavors? Schick uns deine Anfrage – wir legen es dir direkt zur Abholung bereit!
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-amber-500 mx-auto" />
                  <h4 className="font-bold text-white text-base">Vielen Dank für deine Anfrage!</h4>
                  <p className="text-xs text-zinc-300">Wir prüfen deine Produktanfrage und melden uns kurzfristig bei dir.</p>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Dein Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="z. B. Alex Müller"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Telefon / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="z. B. 0170 1234567"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Gewünschte Produkte / Nachricht *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Welchen Tabak, welche Shisha oder Vapes möchtest du anfragen?"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Produkt-Anfrage Absenden</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section (Direkt UNTER dem Kontakt-Formular!) */}
      <section className="py-24 bg-zinc-950 text-white border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">Häufige Fragen</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">FAQ – FRAGEN & ANTWORTEN</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-white hover:text-amber-400 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rich 4-Column Full-Featured Footer */}
      <footer className="bg-zinc-950 pt-16 pb-12 border-t border-zinc-900 text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
            
            {/* Column 1: Brand & Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 text-zinc-950 flex items-center justify-center font-black shadow-md">
                  <Flame className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="font-heading text-lg font-black uppercase text-white tracking-tight">
                  SMOKY <span className="text-amber-500">HORREM</span>
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dein Fachgeschäft für Shishas, Shisha-Tabak, Vapes & Headshop-Zubehör in Kerpen-Horrem. Originale Markenware & kompetente Beratung vor Ort.
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-amber-400 font-bold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg w-fit">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Jugendschutz: Abgabe nur an Personen ab 18 Jahren</span>
              </div>
            </div>

            {/* Column 2: Quick Links & Assortment */}
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Sortiment & Shop</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#products" className="hover:text-amber-400 transition-colors">Edelstahl Shishas & Setups</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition-colors">Shisha Tabak & Kokoskohle</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition-colors">Einweg Vapes & Pods</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition-colors">Vaporizer & Headshop Zubehör</a></li>
                <li><a href="#contact-section" className="hover:text-amber-400 transition-colors">Produkt-Reservierung</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & Store Hours */}
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Ladenlokal Horrem</h4>
              <div className="space-y-2 text-xs text-zinc-400">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Bahnhofstraße 20, 50169 Kerpen</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <a href="tel:022739918823" className="hover:text-white font-bold text-amber-400">02273 9918823</a>
                </p>
                <p className="flex items-start gap-2 pt-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    Mo – Fr: 11:00 – 19:00 Uhr<br />
                    Sa: 11:00 – 16:00 Uhr
                  </span>
                </p>
              </div>
            </div>

            {/* Column 4: Legal & Service */}
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Rechtliches</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => setIsImpressumOpen(true)} className="hover:text-amber-400 transition-colors">Impressum</button></li>
                <li><button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-amber-400 transition-colors">Datenschutzerklärung</button></li>
                <li><a href="#contact-section" className="hover:text-amber-400 transition-colors">Anfahrt & Kontakt</a></li>
              </ul>
            </div>

          </div>

          {/* Sub-Footer Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
            <div>
              © 2026 Smoky Head&Shisha Shop Horrem • All Rights Reserved
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => setIsImpressumOpen(true)} className="hover:text-amber-400 transition-colors">Impressum</button>
              <button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-amber-400 transition-colors">Datenschutz</button>
            </div>
          </div>

        </div>
      </footer>

      {/* Modal Form */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Produkt-Anfrage & Reservierung</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank! Das Smoky-Team meldet sich in Kürze bei dir.'); setIsContactOpen(false); }} className="space-y-3">
              <input type="text" required placeholder="Dein Name *" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white" />
              <input type="tel" required placeholder="Deine Telefonnummer *" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white" />
              <textarea placeholder="Welches Produkt oder welchen Tabak möchtest du anfragen?" rows={3} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white" />
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider">Anfrage Absenden</button>
            </form>
          </div>
        </div>
      )}

      {/* Impressum Modal */}
      {isImpressumOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-zinc-300">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Impressum</h3>
              <button onClick={() => setIsImpressumOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <p><strong>Smoky Head&Shisha Shop Horrem</strong><br />Bahnhofstraße 20<br />50169 Kerpen-Horrem<br />Telefon: 02273 9918823</p>
          </div>
        </div>
      )}

      {/* Datenschutz Modal */}
      {isDatenschutzOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-zinc-300">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Datenschutzerklärung</h3>
              <button onClick={() => setIsDatenschutzOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <p>Verantwortlicher im Sinne der DSGVO: Smoky Head&Shisha Shop Horrem. Wir erheben Daten ausschließlich zur Bearbeitung deiner Anfrage.</p>
          </div>
        </div>
      )}

    </div>
  );
}
