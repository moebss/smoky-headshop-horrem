import { useState } from 'react';
import { Phone, MapPin, Clock, Star, Flame, ShieldCheck, CheckCircle2, ArrowRight, X, ShoppingBag, Send, ChevronDown, HelpCircle, AlertCircle, Menu, XIcon, Users, Heart, ZoomIn, Camera } from 'lucide-react';

import heroShisha from './images/hero_shisha.jpg';
import tobaccoImg from './images/tobacco.jpg';
import vapesImg from './images/vapes.jpg';
import headshopImg from './images/headshop.jpg';
import smokyLogo from './images/smoky_logo.png';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'shisha' | 'vape' | 'headshop'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<{ src: string; title: string; category: string; desc: string } | null>(null);

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const navLinks = [
    { label: 'Sortiment', href: '#products' },
    { label: 'Über uns', href: '#about' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Bewertungen', href: '#reviews' },
    { label: 'Kontakt', href: '#contact-section' },
    { label: 'FAQ', href: '#faq' },
  ];

  const galleryItems = [
    { src: smokyLogo, title: "Original Leuchtschriftzug Fassade", category: "Ladenlokal Horrem", desc: "Unser ikonischer Leuchtschriftzug vor Ort an der Bahnhofstraße 20 in Kerpen-Horrem." },
    { src: heroShisha, title: "Premium Edelstahl Shishas", category: "Pfeifen & Setups", desc: "Hochwertige Edelstahl-Wasserpfeifen, Phunnels & HMDs im Ladenlokal Horrem." },
    { src: tobaccoImg, title: "Tabak-Vitrinen & Bestseller", category: "Shisha-Tabak & Kohle", desc: "Über 100 Tabaksorten von A wie Al Fakher bis Z wie Zomo & 26mm Naturkohle." },
    { src: vapesImg, title: "Vape & Liquid Lounge Bar", category: "Vapes & E-Zigaretten", desc: "Einweg- & Mehrweg-Vapes, Pod-Systeme (Elfbar, Lost Mary, Pod Salt) & Liquids." },
    { src: headshopImg, title: "Headshop & Glaskunst", category: "Headshop Zubehör", desc: "Kräuter-Vaporizer, Präzisions-Grinder, Glasbongs, Aktivkohlefilter & Papers." },
  ];

  const faqs = [
    { q: "Verkauft ihr nur vor Ort oder kann man Produkte vorbestellen?", a: "Du kannst all unsere Produkte direkt vor Ort in Kerpen-Horrem (Bahnhofstraße 20) kaufen oder bequem über unser Anfrageformular bzw. telefonisch unter 02273 9918823 vorbestellen und zur schnellen Abholung zurücklegen lassen." },
    { q: "Welche Shisha-Tabaksorten und Kohlen habt ihr vorrätig?", a: "Wir führen ständig die beliebtesten Bestseller-Marken von A wie Al Fakher bis Z wie Zomo, Nameless (Black Nana), Holster, O's Tobacco, 187 Strassenbande sowie hochwertige 26mm Kokos-Naturkohle." },
    { q: "Bietet ihr auch Vapes, Pod-Systeme & Liquids an?", a: "Ja! Wir haben ein großes Sortiment an Einweg-Vapes, nachfüllbaren Pod-Systemen (u. a. Elfbar, Lost Mary, Pod Salt) sowie Liquids mit und ohne Nikotin." },
    { q: "Helft ihr mir bei der Auswahl des richtigen Shisha-Setups?", a: "Absolut. Unser erfahrenes Team berät dich vor Ort persönlich zu Phunnel-Köpfen, HMDs (Heat Management Devices), Edelstahl-Pfeifen und der optimalen Hitzeregulierung." },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-zinc-100 selection:bg-[#c9a84c] selection:text-black font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ═══ HEADER mit Navigationsmenü (SmokeFactory Editorial Dark Style) ═══ */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b0b0e]/90 border-b border-stone-800/80 shadow-2xl">
        {/* Top Info Bar */}
        <div className="hidden lg:block bg-[#070709] py-2 px-6 text-xs text-zinc-400 border-b border-stone-900">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>Bahnhofstraße 20, 50169 Kerpen-Horrem</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>Mo – Fr: 11:00 – 19:00 Uhr | Sa: 11:00 – 16:00 Uhr</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/30 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">★ 4.6 Google Sterne</span>
              <a href="tel:022739918823" className="font-bold text-white hover:text-[#c9a84c] transition-colors">☎ 02273 9918823</a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="px-3.5 py-1 rounded-xl bg-black border border-[#c9a84c]/40 flex items-center justify-center shadow-lg shadow-[#c9a84c]/20 group-hover:border-[#c9a84c] group-hover:scale-105 transition-all">
                <span className="smoky-illuminated-text text-lg sm:text-xl tracking-widest">SMOKY</span>
              </div>
              <div>
                <span className="font-heading text-base font-black uppercase text-white block leading-none tracking-tight">
                  HEAD&SHISHA <span className="text-[#c9a84c]">SHOP</span>
                </span>
                <span className="text-[9px] text-[#c9a84c] font-extrabold uppercase tracking-widest block mt-0.5">Kerpen-Horrem • Seit 2014</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-[#c9a84c] transition-colors">{l.label}</a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:022739918823" className="hidden sm:inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-zinc-200 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all">
                <Phone className="w-4 h-4 text-[#c9a84c]" />
                <span>02273 9918823</span>
              </a>
              <a href="#contact-section" className="bg-[#c9a84c] hover:bg-[#b8963d] text-black font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#c9a84c]/20 transition-all hover:-translate-y-0.5">
                Produkte Reservieren
              </a>
              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-zinc-300">
                {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-stone-800 pt-3 space-y-1 bg-[#0b0b0e]">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-bold text-zinc-300 hover:text-[#c9a84c] hover:bg-stone-900 rounded-lg transition-colors">{l.label}</a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ═══ HERO (Editorial Dark + Champagne Gold Accent) ═══ */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden py-24 border-b border-stone-800/80">
        <div className="absolute inset-0 z-0">
          <img src={heroShisha} alt="Smoky Headshop Horrem Edelstahl Shisha Pfeife" className="w-full h-full object-cover object-center scale-105 filter contrast-110 brightness-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0e] via-[#0b0b0e]/90 to-[#0b0b0e]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-[#0b0b0e]/80" />
          <div className="absolute inset-0 bg-[#c9a84c]/10 mix-blend-overlay" />
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
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-black/90 backdrop-blur-md border border-[#c9a84c]/50 text-[#c9a84c] text-xs font-bold uppercase tracking-widest shadow-2xl">
                <span className="smoky-illuminated-text text-sm font-black tracking-widest">SMOKY</span>
                <span className="text-[#c9a84c] font-black border-l border-stone-800 pl-2.5">Head&Shisha Shop Horrem</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0b0b0e]/80 backdrop-blur-md border border-stone-800 text-zinc-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>Bahnhofstraße 20</span>
              </div>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.02] font-black drop-shadow-2xl">
              KEINEN KOPF MACHEN, <br />
              <span className="text-[#c9a84c] drop-shadow-[0_10px_20px_rgba(201,168,76,0.3)]">ERSTMAL NOCH 'NEN KOPF MACHEN.</span>
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Der erste Head-&Shishashop im Rhein-Erft-Kreis – seit Februar 2014 eure Anlaufstelle für Edelstahl-Shishas, Tabak von A wie Al Fakher bis Z wie Zomo, Vapes, Bongs, Vaporizer & Rauchzubehör auf 75 m².
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href="#contact-section" className="bg-[#c9a84c] hover:bg-[#b8963d] text-black font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-[#c9a84c]/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 group">
                <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                <span>Produkt-Anfrage & Reservierung</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:022739918823" className="bg-stone-900/90 hover:bg-stone-800 border border-stone-700 text-white font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:border-[#c9a84c]/50 backdrop-blur-md">
                <Phone className="w-4 h-4 text-[#c9a84c]" />
                <span>02273 9918823 Anrufen</span>
              </a>
            </div>

            <div className="pt-4 border-t border-stone-800/80 flex items-center gap-4">
              <div className="flex text-[#c9a84c]">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-[#c9a84c] text-[#c9a84c]" />))}</div>
              <span className="text-xs text-zinc-300 font-semibold"><strong className="text-white">4.6 / 5.0 Sterne</strong> aus 120+ Google-Bewertungen</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STATS BAR (Editorial Dark Style) ═══ */}
      <section className="py-10 bg-[#070709] border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: 'Seit 2014', label: 'Erster Head-&Shishashop im Erftkreis', gold: true },
              { val: '75 m²', label: 'Ladenfläche voller Auswahl', gold: false },
              { val: '4.6 ★', label: 'Google Sterne-Bewertung', gold: true },
              { val: 'Horrem', label: 'Bahnhofstraße 20 (am Hbf)', gold: false },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#131318] border border-stone-800 shadow-inner">
                <span className={`font-heading text-3xl font-black block ${s.gold ? 'text-[#c9a84c]' : 'text-white'}`}>{s.val}</span>
                <span className="text-xs text-zinc-400 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ÜBER UNS SEKTION (Editorial Dark) ═══ */}
      <section id="about" className="py-24 bg-[#0b0b0e] border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#c9a84c]/30 shadow-2xl aspect-[4/5]">
                <img src={tobaccoImg} alt="Shisha Kohle und Tabak im Smoky Headshop Horrem" className="w-full h-full object-cover filter contrast-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-lg text-black">
                    <Heart className="w-5 h-5 fill-black" />
                  </div>
                  <span className="text-white font-bold text-sm drop-shadow-md">Seit Februar 2014 in Horrem</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest block">Über uns</span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">
                MEHR ALS NUR EIN SHOP – <span className="text-[#c9a84c]">DEIN SPOT IN HORREM.</span>
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                Im Februar 2014 haben wir den ersten Head-&Shishashop im Rhein-Erft-Kreis eröffnet. Seitdem begrüßt euch unser junges, dynamisches Team aus dem Großraum Köln auf 75 m² in einem freundlichen Ambiente – alles rund ums Thema Wasserpfeifen und Rauchzubehör.
              </p>
              <p className="text-zinc-300 text-base leading-relaxed">
                Durch unsere jahrelange Erfahrung bieten wir euch fachliche und kompetente Beratung. Shisha-Tabak ist in Hülle und Fülle vorhanden – von A wie Al Fakher bis Z wie Zomo steht alles in den Vitrinen. Neuheiten ziehen regelmäßig bei uns ein und spezielle Wünsche versuchen wir immer zu realisieren. Auch im Growbereich stehen wir euch gerne beratend zur Seite.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-[#131318] rounded-xl border border-stone-800">
                  <Users className="w-8 h-8 text-[#c9a84c] shrink-0" />
                  <div>
                    <span className="font-bold text-white text-sm block">Fachberatung</span>
                    <span className="text-xs text-zinc-400">Jahrelange Erfahrung</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#131318] rounded-xl border border-stone-800">
                  <ShieldCheck className="w-8 h-8 text-[#c9a84c] shrink-0" />
                  <div>
                    <span className="font-bold text-white text-sm block">75 m² Auswahl</span>
                    <span className="text-xs text-zinc-400">Alles vor Ort & sofort</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#131318] rounded-xl border border-stone-800">
                  <MapPin className="w-8 h-8 text-[#c9a84c] shrink-0" />
                  <div>
                    <span className="font-bold text-white text-sm block">Mitten in Horrem</span>
                    <span className="text-xs text-zinc-400">2 Min. vom Bahnhof</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SORTIMENT (Editorial Dark Cards mit Gold Glow) ═══ */}
      <section id="products" className="py-24 bg-[#070709] border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest block mb-3">Produkt-Kategorien</span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">UNSER SORTIMENT VOR ORT</h2>
            </div>
            <div className="flex items-center gap-2 bg-[#131318] p-1.5 rounded-xl border border-stone-800">
              {(['all', 'shisha', 'vape', 'headshop'] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === tab ? 'bg-[#c9a84c] text-black shadow-lg shadow-[#c9a84c]/20' : 'text-zinc-400 hover:text-white'}`}>
                  {tab === 'all' ? 'Alle' : tab === 'shisha' ? 'Shisha & Tabak' : tab === 'vape' ? 'Vapes' : 'Headshop'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Shishas & Komplett-Setups", category: "shisha" as const, img: heroShisha, desc: "Vom kleinen Geldbeutel bis zur Luxus-Hookah – Edelstahl-Shishas inklusive Köpfe, Mundstücke, Molassefänger, LED-Untersetzer und HMDs zum Pimpen eurer Pfeife." },
              { title: "Shisha-Tabak & Kohle", category: "shisha" as const, img: tobaccoImg, desc: "Von A wie Al Fakher bis Z wie Zomo – Tabak-Neuheiten ziehen regelmäßig bei uns ein. Dazu Naturkohle und Selbstzünder mit passenden Kohleanzündern." },
              { title: "Einweg & Mehrweg Vapes", category: "vape" as const, img: vapesImg, desc: "Neuste Vape-Pods, E-Zigaretten & Liquids (Elfbar, Lost Mary, Pod Salt) in allen erdenklichen Flavors – mit kompetenter Beratung." },
              { title: "Headshop & Rauchzubehör", category: "headshop" as const, img: headshopImg, desc: "Große Auswahl an Bongs, Köpfen, Vorkühler, Purpfeifen, Grindern, Blättchen, Vaporizern, Aktivkohlefiltern und vieles mehr." },
            ]
            .filter(p => activeTab === 'all' || p.category === activeTab)
            .map((p, idx) => (
              <div key={idx} className="product-card rounded-2xl overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#c9a84c] text-black text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow">Top-Qualität</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a href="#contact-section" className="w-full bg-stone-900 hover:bg-[#c9a84c] text-zinc-300 hover:text-black border border-stone-800 hover:border-[#c9a84c] font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
                    <span>Im Laden Anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BILDERGALERIE & SHOP-EINBLICKE (Neu & Interaktiv mit Lightbox) ═══ */}
      <section id="gallery" className="py-24 bg-[#0b0b0e] border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
              <Camera className="w-4 h-4" />
              <span>Einblicke & Impressionen</span>
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">
              BILDERGALERIE <span className="text-[#c9a84c]">LADENLOKAL HORREM</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Schau dich bei uns um – 75 m² voller Shisha-High-End Pfeifen, voller Tabakvitrinen und exklusivem Headshop-Zubehör in der Bahnhofstraße 20.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedGalleryImg(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-stone-800 hover:border-[#c9a84c]/60 transition-all duration-500 shadow-xl aspect-[4/3] bg-[#131318]"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e]/90 via-[#0b0b0e]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-[#c9a84c]/40 text-[#c9a84c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c9a84c] block">{item.category}</span>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-[#c9a84c] transition-colors">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEWERTUNGEN (Editorial Dark) ═══ */}
      <section id="reviews" className="py-24 bg-[#070709] border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest block mb-3">Community Urteil</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white mb-6 font-black">Echte Google-Bewertungen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dennis K.", text: "Super sympathischer Laden! Immer die neusten Tabaksorten auf Lager und die Beratung bezüglich Phunnel-Köpfen war absolut erstklassig." },
              { name: "Marco S.", text: "Der beste Shishashop im Erftkreis. Die Auswahl an Vapes und Kohle ist riesig und die Preise sind top fair!" },
              { name: "Lisa M.", text: "Sehr gepflegter Shop direkt an der Bahnhofstraße. Mitarbeiter nehmen sich Zeit und helfen sofort weiter." },
            ].map((t, idx) => (
              <div key={idx} className="product-card rounded-2xl p-8 space-y-4">
                <div className="flex text-[#c9a84c]">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-[#c9a84c] text-[#c9a84c]" />))}</div>
                <p className="text-zinc-300 text-sm leading-relaxed italic">"{t.text}"</p>
                <div className="pt-4 border-t border-stone-800">
                  <span className="font-bold text-white text-sm block">{t.name}</span>
                  <span className="text-xs text-[#c9a84c] font-medium">Verifizierter Google-Reviewer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KONTAKT & FORMULAR (Editorial Dark) ═══ */}
      <section id="contact-section" className="py-24 bg-[#0b0b0e] border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest block mb-3">Kontakt & Reservierung</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">SCHREIB UNS ODER BESUCHE UNS</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-8 bg-[#131318] border border-stone-800 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-4 text-sm text-zinc-300">
                <h3 className="font-heading text-2xl font-black text-white uppercase mb-4">SMOKY HEAD&SHISHA SHOP</h3>
                <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-[#c9a84c] shrink-0 mt-1" /><div><strong className="text-white block">Adresse:</strong>Bahnhofstraße 20, 50169 Kerpen-Horrem</div></div>
                <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-[#c9a84c] shrink-0 mt-1" /><div><strong className="text-white block">Telefon:</strong><a href="tel:022739918823" className="hover:text-[#c9a84c] font-bold text-[#c9a84c]">02273 9918823</a></div></div>
                <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-[#c9a84c] shrink-0 mt-1" /><div><strong className="text-white block">Öffnungszeiten:</strong>Montag – Freitag: 11:00 – 19:00 Uhr<br />Samstag: 11:00 – 16:00 Uhr</div></div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-800 aspect-[16/9]">
                <iframe title="Smoky Headshop Horrem Map" src="https://maps.google.com/maps?q=Bahnhofstraße%2020%2C%2050169%20Kerpen-Horrem&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0" loading="lazy" />
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#131318] border border-stone-800 rounded-3xl p-8 shadow-2xl">
              <h3 className="font-heading text-2xl font-black text-white uppercase mb-2">PRODUKT ANFRAGEN ODER RESERVIEREN</h3>
              <p className="text-xs text-zinc-400 mb-6">Du suchst einen bestimmten Tabak, ein Shisha-Modell oder Vape-Flavors? Schick uns deine Anfrage!</p>
              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/40 text-[#c9a84c] text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#c9a84c] mx-auto" />
                  <h4 className="font-bold text-white text-base">Vielen Dank für deine Anfrage!</h4>
                  <p className="text-xs text-zinc-400">Wir prüfen deine Produktanfrage und melden uns kurzfristig bei dir.</p>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div><label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Dein Name *</label><input type="text" required placeholder="z. B. Alex Müller" className="w-full bg-[#0b0b0e] border border-stone-800 rounded-xl p-3.5 text-xs text-white focus:border-[#c9a84c] outline-none transition-colors" /></div>
                  <div><label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Telefon / WhatsApp *</label><input type="tel" required placeholder="z. B. 0170 1234567" className="w-full bg-[#0b0b0e] border border-stone-800 rounded-xl p-3.5 text-xs text-white focus:border-[#c9a84c] outline-none transition-colors" /></div>
                  <div><label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Gewünschte Produkte / Nachricht *</label><textarea required rows={4} placeholder="Welchen Tabak, welche Shisha oder Vapes möchtest du anfragen?" className="w-full bg-[#0b0b0e] border border-stone-800 rounded-xl p-3.5 text-xs text-white focus:border-[#c9a84c] outline-none transition-colors" /></div>
                  <button type="submit" className="w-full bg-[#c9a84c] hover:bg-[#b8963d] text-black font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#c9a84c]/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /><span>Produkt-Anfrage Absenden</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-24 bg-[#070709] border-b border-stone-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest block mb-3">Häufige Fragen</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">FAQ – FRAGEN & ANTWORTEN</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#131318] border border-stone-800 rounded-2xl overflow-hidden shadow-md">
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-white hover:text-[#c9a84c] transition-colors">
                    <span className="flex items-center gap-3"><HelpCircle className="w-5 h-5 text-[#c9a84c] shrink-0" /><span>{faq.q}</span></span>
                    <ChevronDown className={`w-5 h-5 text-[#c9a84c] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (<div className="px-6 pb-6 text-sm text-zinc-300 leading-relaxed border-t border-stone-800/80 pt-4">{faq.a}</div>)}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#070709] pt-16 pb-12 text-zinc-400 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="px-3 py-1 rounded-lg bg-black border border-[#c9a84c]/40 flex items-center justify-center shadow-md"><span className="smoky-illuminated-text text-base tracking-widest">SMOKY</span></div><span className="font-heading text-lg font-black uppercase text-white tracking-tight">HEAD&SHISHA <span className="text-[#c9a84c]">HORREM</span></span></div>
              <p className="text-xs text-zinc-400 leading-relaxed">Der erste Head-&Shishashop im Rhein-Erft-Kreis – seit Feb. 2014 euer Fachgeschäft für Shishas, Tabak, Vapes & Headshop-Zubehör.</p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-[#c9a84c] font-bold bg-[#c9a84c]/10 border border-[#c9a84c]/20 px-3 py-1.5 rounded-lg w-fit"><AlertCircle className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" /><span>Jugendschutz: Abgabe nur ab 18 Jahren</span></div>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Sortiment</h4>
              <ul className="space-y-2 text-xs"><li><a href="#products" className="hover:text-[#c9a84c] transition-colors">Shishas & Setups</a></li><li><a href="#products" className="hover:text-[#c9a84c] transition-colors">Tabak & Kokoskohle</a></li><li><a href="#products" className="hover:text-[#c9a84c] transition-colors">Vapes & Pods</a></li><li><a href="#products" className="hover:text-[#c9a84c] transition-colors">Headshop Zubehör</a></li></ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Ladenlokal</h4>
              <div className="space-y-2 text-xs"><p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" /><span>Bahnhofstraße 20, 50169 Kerpen</span></p><p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" /><a href="tel:022739918823" className="hover:text-white font-bold text-[#c9a84c]">02273 9918823</a></p><p className="flex items-start gap-2 pt-1"><Clock className="w-3.5 h-3.5 text-[#c9a84c] shrink-0 mt-0.5" /><span>Mo–Fr: 11–19 Uhr | Sa: 11–16 Uhr</span></p></div>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Rechtliches</h4>
              <ul className="space-y-2 text-xs"><li><button onClick={() => setIsImpressumOpen(true)} className="hover:text-[#c9a84c] transition-colors">Impressum</button></li><li><button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-[#c9a84c] transition-colors">Datenschutzerklärung</button></li><li><a href="#contact-section" className="hover:text-[#c9a84c] transition-colors">Anfahrt & Kontakt</a></li></ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <div>© 2026 Smoky Head&Shisha Shop Horrem</div>
            <div className="flex items-center gap-6"><button onClick={() => setIsImpressumOpen(true)} className="hover:text-[#c9a84c] transition-colors">Impressum</button><button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-[#c9a84c] transition-colors">Datenschutz</button></div>
          </div>
        </div>
      </footer>

      {/* ═══ LIGHTBOX MODAL FÜR GALERIE ═══ */}
      {selectedGalleryImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedGalleryImg(null)}>
          <div className="relative max-w-4xl w-full bg-[#131318] border border-[#c9a84c]/40 rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedGalleryImg(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-zinc-300 hover:text-white border border-stone-800">
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-[16/10] overflow-hidden bg-black">
              <img src={selectedGalleryImg.src} alt={selectedGalleryImg.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{selectedGalleryImg.category}</span>
              <h3 className="font-heading text-2xl font-bold text-white">{selectedGalleryImg.title}</h3>
              <p className="text-sm text-zinc-300">{selectedGalleryImg.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══ MODALS ═══ */}
      {isContactOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"><div className="bg-[#131318] border border-[#c9a84c]/30 rounded-2xl max-w-md w-full p-6 space-y-4"><div className="flex justify-between items-center border-b border-stone-800 pb-3"><h3 className="font-heading text-lg font-bold text-white">Produkt-Anfrage</h3><button onClick={() => setIsContactOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button></div><form onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank!'); setIsContactOpen(false); }} className="space-y-3"><input type="text" required placeholder="Dein Name *" className="w-full bg-[#0b0b0e] border border-stone-800 rounded-xl p-3 text-xs text-white" /><input type="tel" required placeholder="Deine Telefonnummer *" className="w-full bg-[#0b0b0e] border border-stone-800 rounded-xl p-3 text-xs text-white" /><textarea placeholder="Welches Produkt möchtest du anfragen?" rows={3} className="w-full bg-[#0b0b0e] border border-stone-800 rounded-xl p-3 text-xs text-white" /><button type="submit" className="w-full bg-[#c9a84c] hover:bg-[#b8963d] text-black font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider">Absenden</button></form></div></div>)}
      {isImpressumOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"><div className="bg-[#131318] border border-stone-800 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-zinc-300"><div className="flex justify-between items-center border-b border-stone-800 pb-3"><h3 className="font-heading text-lg font-bold text-white">Impressum</h3><button onClick={() => setIsImpressumOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button></div><p><strong>Smoky Head&Shisha Shop Horrem</strong><br />Bahnhofstraße 20<br />50169 Kerpen-Horrem<br />Telefon: 02273 9918823</p></div></div>)}
      {isDatenschutzOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"><div className="bg-[#131318] border border-stone-800 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-zinc-300"><div className="flex justify-between items-center border-b border-stone-800 pb-3"><h3 className="font-heading text-lg font-bold text-white">Datenschutzerklärung</h3><button onClick={() => setIsDatenschutzOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button></div><p>Verantwortlicher: Smoky Head&Shisha Shop Horrem. Wir erheben Daten ausschließlich zur Bearbeitung deiner Anfrage.</p></div></div>)}
    </div>
  );
}
