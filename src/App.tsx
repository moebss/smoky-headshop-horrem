import { useState } from 'react';
import { Phone, MapPin, Clock, Star, Flame, ShieldCheck, CheckCircle2, ArrowRight, X, ShoppingBag, Send, ChevronDown, HelpCircle, AlertCircle, Menu, XIcon, Users, Heart } from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const navLinks = [
    { label: 'Sortiment', href: '#products' },
    { label: 'Über uns', href: '#about' },
    { label: 'Bewertungen', href: '#reviews' },
    { label: 'Kontakt', href: '#contact-section' },
    { label: 'FAQ', href: '#faq' },
  ];

  const faqs = [
    { q: "Verkauft ihr nur vor Ort oder kann man Produkte vorbestellen?", a: "Du kannst all unsere Produkte direkt vor Ort in Kerpen-Horrem (Bahnhofstraße 20) kaufen oder bequem über unser Anfrageformular bzw. telefonisch unter 02273 9918823 vorbestellen und zur schnellen Abholung zurücklegen lassen." },
    { q: "Welche Shisha-Tabaksorten und Kohlen habt ihr vorrätig?", a: "Wir führen ständig die beliebtesten Bestseller-Marken wie Nameless (Black Nana), Holster, O's Tobacco, 187 Strassenbande und Hookain sowie hochwertige 26mm Kokos-Naturkohle." },
    { q: "Bietet ihr auch Vapes, Pod-Systeme & Liquids an?", a: "Ja! Wir haben ein großes Sortiment an Einweg-Vapes, nachfüllbaren Pod-Systemen (u. a. Elfbar, Lost Mary, Pod Salt) sowie Liquids mit und ohne Nikotin." },
    { q: "Helft ihr mir bei der Auswahl des richtigen Shisha-Setups?", a: "Absolut. Unser erfahrenes Team berät dich vor Ort persönlich zu Phunnel-Köpfen, HMDs (Heat Management Devices), Edelstahl-Pfeifen und der optimalen Hitzeregulierung." },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-amber-500 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ═══ HEADER mit Navigationsmenü ═══ */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-stone-200 shadow-sm">
        {/* Top Info Bar */}
        <div className="hidden lg:block bg-stone-900 py-2.5 px-6 text-xs text-stone-300">
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
              <span className="bg-amber-500/15 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">★ 4.6 Google Sterne</span>
              <a href="tel:022739918823" className="font-bold text-white hover:text-amber-400 transition-colors">☎ 02273 9918823</a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Flame className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading text-lg font-black uppercase text-stone-900 block leading-none tracking-tight">
                  SMOKY <span className="text-amber-600">HEAD&SHISHA</span>
                </span>
                <span className="text-[9px] text-amber-600 font-extrabold uppercase tracking-widest block mt-0.5">Horrem</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-amber-600 transition-colors">{l.label}</a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:022739918823" className="hidden sm:inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>02273 9918823</span>
              </a>
              <a href="#contact-section" className="bg-amber-600 hover:bg-amber-500 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-600/20 transition-all hover:-translate-y-0.5">
                Produkte Reservieren
              </a>
              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-stone-700">
                {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-stone-100 pt-3 space-y-1">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-bold text-stone-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">{l.label}</a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ═══ HERO (Dark Immersive – bleibt dunkel für Kontrast) ═══ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img src={heroShisha} alt="Smoky Headshop Horrem Edelstahl Shisha Pfeife" className="w-full h-full object-cover object-center scale-105 filter contrast-110 brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80" />
          <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay" />
        </div>

        <div className="smoke-container">
          <div className="smoke-particle" /><div className="smoke-particle" /><div className="smoke-particle" /><div className="smoke-particle" />
          <div className="smoke-particle" /><div className="smoke-particle" /><div className="smoke-particle" /><div className="smoke-particle" />
        </div>
        <div className="smoke-container">
          <div className="smoke-glow" /><div className="smoke-glow" /><div className="smoke-glow" />
        </div>
        <div className="ember-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-2xl">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Smoky Head&Shisha Shop Horrem • Bahnhofstraße 20</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.02] font-black drop-shadow-2xl">
              KEINEN KOPF MACHEN, <br />
              <span className="text-amber-500 drop-shadow-[0_10px_20px_rgba(245,158,11,0.4)]">ERSTMAL NOCH 'NEN KOPF MACHEN.</span>
            </h1>

            <p className="text-zinc-200 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Deine Top-Adresse in Kerpen-Horrem für Premium Edelstahl-Shishas, Phunnels, Tabak-Bestseller, 26mm Naturkohle, Einweg/Mehrweg Vapes & Headshop-Zubehör.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href="#contact-section" className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-amber-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 group">
                <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                <span>Produkt-Anfrage & Reservierung</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:022739918823" className="bg-zinc-950/90 hover:bg-zinc-900 border border-zinc-700 text-white font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:border-amber-500/50 backdrop-blur-md">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>02273 9918823 Anrufen</span>
              </a>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-4">
              <div className="flex text-amber-500">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />))}</div>
              <span className="text-xs text-zinc-300 font-semibold"><strong className="text-white">4.6 / 5.0 Sterne</strong> aus 120+ Google-Bewertungen</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STATS BAR ═══ */}
      <section className="py-10 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '4.6 ★', label: 'Google Sterne-Bewertung', amber: true },
              { val: '500+', label: 'Shishas, Tabak & Vapes', amber: false },
              { val: '100%', label: 'Originalware & Fachberatung', amber: true },
              { val: 'Horrem', label: 'Zentral am Bahnhof', amber: false },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <span className={`font-heading text-3xl font-black block ${s.amber ? 'text-amber-600' : 'text-stone-900'}`}>{s.val}</span>
                <span className="text-xs text-stone-500 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ÜBER UNS SEKTION ═══ */}
      <section id="about" className="py-24 bg-[#fafaf9] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-xl aspect-[4/5]">
                <img src={tobaccoImg} alt="Shisha Kohle und Tabak im Smoky Headshop Horrem" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center shadow-lg">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  <span className="text-white font-bold text-sm drop-shadow-md">Mit Leidenschaft seit Tag 1</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block">Über uns</span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-stone-900 font-black">
                MEHR ALS NUR EIN SHOP – <span className="text-amber-600">DEIN SPOT IN HORREM.</span>
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Smoky Head&Shisha ist kein anonymer Online-Versand, sondern ein echter Laden mit echten Leuten. Hier in Horrem, direkt an der Bahnhofstraße 20, stehen wir dir persönlich zur Seite – egal ob du deine erste Shisha suchst, den perfekten Tabak-Kopf bauen willst oder einfach nach den neusten Vape-Flavors schauen möchtest.
              </p>
              <p className="text-stone-600 text-base leading-relaxed">
                Unser Team kennt jede Marke, jeden Phunnel und jede Sorte im Regal und berät dich ehrlich – nicht nach Marge, sondern nach dem, was zu dir passt. Von Moze und Ocean Hookah über Nameless bis Pod Salt: Wir testen selbst, was wir verkaufen.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-200">
                  <Users className="w-8 h-8 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-bold text-stone-900 text-sm block">Persönliche Beratung</span>
                    <span className="text-xs text-stone-500">Vor Ort, nicht per Bot</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-200">
                  <ShieldCheck className="w-8 h-8 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-bold text-stone-900 text-sm block">Nur Originale</span>
                    <span className="text-xs text-stone-500">Keine Fakes, nie</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-200">
                  <MapPin className="w-8 h-8 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-bold text-stone-900 text-sm block">Mitten in Horrem</span>
                    <span className="text-xs text-stone-500">2 Min. vom Bahnhof</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SORTIMENT ═══ */}
      <section id="products" className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block mb-3">Produkt-Kategorien</span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-stone-900 font-black">UNSER SORTIMENT VOR ORT</h2>
            </div>
            <div className="flex items-center gap-2 bg-stone-100 p-1.5 rounded-xl border border-stone-200">
              {(['all', 'shisha', 'vape', 'headshop'] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === tab ? 'bg-amber-600 text-white shadow' : 'text-stone-500 hover:text-stone-900'}`}>
                  {tab === 'all' ? 'Alle' : tab === 'shisha' ? 'Shisha & Tabak' : tab === 'vape' ? 'Vapes' : 'Headshop'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Shishas & Komplett-Setups", category: "shisha" as const, img: heroShisha, desc: "Edelstahl-Shishas von Moze, Ocean Hookah, Aladin & Amy Deluxe. Inklusive Zubehör, Phunnels & HMDs." },
              { title: "Shisha-Tabak & Naturkohle", category: "shisha" as const, img: tobaccoImg, desc: "Riesige Auswahl an Bestsellern von Nameless, Holster, O's, 187 Strassenbande & Kokoskohle in 26mm." },
              { title: "Einweg & Mehrweg Vapes", category: "vape" as const, img: vapesImg, desc: "Neuste Vape-Pods, E-Zigaretten & Liquids (Elfbar, Lost Mary, Pod Salt) in allen erdenklichen Flavors." },
              { title: "Headshop & Glaskunst", category: "headshop" as const, img: headshopImg, desc: "Vaporizer für Kräuter, Präzisions-Grinder, Glasbongs, Aktivkohlefilter, Blunts & Papers." },
            ]
            .filter(p => activeTab === 'all' || p.category === activeTab)
            .map((p, idx) => (
              <div key={idx} className="product-card rounded-2xl overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow">Top-Qualität</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-stone-900 mb-2">{p.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a href="#contact-section" className="w-full bg-stone-100 hover:bg-amber-600 text-stone-700 hover:text-white border border-stone-200 hover:border-amber-600 font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
                    <span>Im Laden Anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEWERTUNGEN ═══ */}
      <section id="reviews" className="py-24 bg-[#fafaf9] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block mb-3">Community Urteil</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-stone-900 mb-6 font-black">Echte Google-Bewertungen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dennis K.", text: "Super sympathischer Laden! Immer die neusten Tabaksorten auf Lager und die Beratung bezüglich Phunnel-Köpfen war absolut erstklassig." },
              { name: "Marco S.", text: "Der beste Shishashop im Erftkreis. Die Auswahl an Vapes und Kohle ist riesig und die Preise sind top fair!" },
              { name: "Lisa M.", text: "Sehr gepflegter Shop direkt an der Bahnhofstraße. Mitarbeiter nehmen sich Zeit und helfen sofort weiter." },
            ].map((t, idx) => (
              <div key={idx} className="product-card rounded-2xl p-8 space-y-4">
                <div className="flex text-amber-500">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />))}</div>
                <p className="text-stone-600 text-sm leading-relaxed italic">"{t.text}"</p>
                <div className="pt-4 border-t border-stone-200">
                  <span className="font-bold text-stone-900 text-sm block">{t.name}</span>
                  <span className="text-xs text-amber-600 font-medium">Verifizierter Google-Reviewer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KONTAKT & FORMULAR ═══ */}
      <section id="contact-section" className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block mb-3">Kontakt & Reservierung</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-stone-900 font-black">SCHREIB UNS ODER BESUCHE UNS</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-8 bg-stone-50 border border-stone-200 rounded-3xl p-8 shadow-sm">
              <div className="space-y-4 text-sm text-stone-600">
                <h3 className="font-heading text-2xl font-black text-stone-900 uppercase mb-4">SMOKY HEAD&SHISHA SHOP</h3>
                <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-1" /><div><strong className="text-stone-900 block">Adresse:</strong>Bahnhofstraße 20, 50169 Kerpen-Horrem</div></div>
                <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-amber-600 shrink-0 mt-1" /><div><strong className="text-stone-900 block">Telefon:</strong><a href="tel:022739918823" className="hover:text-amber-600 font-bold text-amber-600">02273 9918823</a></div></div>
                <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-amber-600 shrink-0 mt-1" /><div><strong className="text-stone-900 block">Öffnungszeiten:</strong>Montag – Freitag: 11:00 – 19:00 Uhr<br />Samstag: 11:00 – 16:00 Uhr</div></div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-200 aspect-[16/9]">
                <iframe title="Smoky Headshop Horrem Map" src="https://maps.google.com/maps?q=Bahnhofstraße%2020%2C%2050169%20Kerpen-Horrem&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0" loading="lazy" />
              </div>
            </div>

            <div className="lg:col-span-6 bg-stone-50 border border-stone-200 rounded-3xl p-8 shadow-sm">
              <h3 className="font-heading text-2xl font-black text-stone-900 uppercase mb-2">PRODUKT ANFRAGEN ODER RESERVIEREN</h3>
              <p className="text-xs text-stone-500 mb-6">Du suchst einen bestimmten Tabak, ein Shisha-Modell oder Vape-Flavors? Schick uns deine Anfrage!</p>
              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-amber-600 mx-auto" />
                  <h4 className="font-bold text-stone-900 text-base">Vielen Dank für deine Anfrage!</h4>
                  <p className="text-xs text-stone-500">Wir prüfen deine Produktanfrage und melden uns kurzfristig bei dir.</p>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div><label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Dein Name *</label><input type="text" required placeholder="z. B. Alex Müller" className="w-full bg-white border border-stone-300 rounded-xl p-3.5 text-xs text-stone-900 focus:border-amber-500 outline-none transition-colors" /></div>
                  <div><label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Telefon / WhatsApp *</label><input type="tel" required placeholder="z. B. 0170 1234567" className="w-full bg-white border border-stone-300 rounded-xl p-3.5 text-xs text-stone-900 focus:border-amber-500 outline-none transition-colors" /></div>
                  <div><label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Gewünschte Produkte / Nachricht *</label><textarea required rows={4} placeholder="Welchen Tabak, welche Shisha oder Vapes möchtest du anfragen?" className="w-full bg-white border border-stone-300 rounded-xl p-3.5 text-xs text-stone-900 focus:border-amber-500 outline-none transition-colors" /></div>
                  <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-600/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /><span>Produkt-Anfrage Absenden</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-24 bg-[#fafaf9] border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block mb-3">Häufige Fragen</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-stone-900 font-black">FAQ – FRAGEN & ANTWORTEN</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-stone-900 hover:text-amber-600 transition-colors">
                    <span className="flex items-center gap-3"><HelpCircle className="w-5 h-5 text-amber-600 shrink-0" /><span>{faq.q}</span></span>
                    <ChevronDown className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (<div className="px-6 pb-6 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">{faq.a}</div>)}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-stone-900 pt-16 pb-12 text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center shadow-md"><Flame className="w-5 h-5 stroke-[2.5]" /></div><span className="font-heading text-lg font-black uppercase text-white tracking-tight">SMOKY <span className="text-amber-500">HORREM</span></span></div>
              <p className="text-xs text-stone-400 leading-relaxed">Dein Fachgeschäft für Shishas, Shisha-Tabak, Vapes & Headshop-Zubehör in Kerpen-Horrem.</p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-amber-400 font-bold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg w-fit"><AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" /><span>Jugendschutz: Abgabe nur ab 18 Jahren</span></div>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Sortiment</h4>
              <ul className="space-y-2 text-xs"><li><a href="#products" className="hover:text-amber-400 transition-colors">Shishas & Setups</a></li><li><a href="#products" className="hover:text-amber-400 transition-colors">Tabak & Kokoskohle</a></li><li><a href="#products" className="hover:text-amber-400 transition-colors">Vapes & Pods</a></li><li><a href="#products" className="hover:text-amber-400 transition-colors">Headshop Zubehör</a></li></ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Ladenlokal</h4>
              <div className="space-y-2 text-xs"><p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" /><span>Bahnhofstraße 20, 50169 Kerpen</span></p><p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" /><a href="tel:022739918823" className="hover:text-white font-bold text-amber-400">02273 9918823</a></p><p className="flex items-start gap-2 pt-1"><Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /><span>Mo–Fr: 11–19 Uhr | Sa: 11–16 Uhr</span></p></div>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Rechtliches</h4>
              <ul className="space-y-2 text-xs"><li><button onClick={() => setIsImpressumOpen(true)} className="hover:text-amber-400 transition-colors">Impressum</button></li><li><button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-amber-400 transition-colors">Datenschutzerklärung</button></li><li><a href="#contact-section" className="hover:text-amber-400 transition-colors">Anfahrt & Kontakt</a></li></ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <div>© 2026 Smoky Head&Shisha Shop Horrem</div>
            <div className="flex items-center gap-6"><button onClick={() => setIsImpressumOpen(true)} className="hover:text-amber-400 transition-colors">Impressum</button><button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-amber-400 transition-colors">Datenschutz</button></div>
          </div>
        </div>
      </footer>

      {/* ═══ MODALS ═══ */}
      {isContactOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-md"><div className="bg-white border border-stone-200 rounded-2xl max-w-md w-full p-6 space-y-4"><div className="flex justify-between items-center border-b border-stone-200 pb-3"><h3 className="font-heading text-lg font-bold text-stone-900">Produkt-Anfrage</h3><button onClick={() => setIsContactOpen(false)} className="text-stone-400 hover:text-stone-900"><X className="w-5 h-5" /></button></div><form onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank!'); setIsContactOpen(false); }} className="space-y-3"><input type="text" required placeholder="Dein Name *" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-900" /><input type="tel" required placeholder="Deine Telefonnummer *" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-900" /><textarea placeholder="Welches Produkt möchtest du anfragen?" rows={3} className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-900" /><button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider">Absenden</button></form></div></div>)}
      {isImpressumOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-md"><div className="bg-white border border-stone-200 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-stone-600"><div className="flex justify-between items-center border-b border-stone-200 pb-3"><h3 className="font-heading text-lg font-bold text-stone-900">Impressum</h3><button onClick={() => setIsImpressumOpen(false)} className="text-stone-400 hover:text-stone-900"><X className="w-5 h-5" /></button></div><p><strong>Smoky Head&Shisha Shop Horrem</strong><br />Bahnhofstraße 20<br />50169 Kerpen-Horrem<br />Telefon: 02273 9918823</p></div></div>)}
      {isDatenschutzOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-md"><div className="bg-white border border-stone-200 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-stone-600"><div className="flex justify-between items-center border-b border-stone-200 pb-3"><h3 className="font-heading text-lg font-bold text-stone-900">Datenschutzerklärung</h3><button onClick={() => setIsDatenschutzOpen(false)} className="text-stone-400 hover:text-stone-900"><X className="w-5 h-5" /></button></div><p>Verantwortlicher: Smoky Head&Shisha Shop Horrem. Wir erheben Daten ausschließlich zur Bearbeitung deiner Anfrage.</p></div></div>)}
    </div>
  );
}
