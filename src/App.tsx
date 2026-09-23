import { useState } from 'react';
import { Phone, MapPin, Clock, Facebook, Star, Flame, ShieldCheck, CheckCircle2, ArrowRight, X, ShoppingBag, Send, ChevronDown, HelpCircle, AlertCircle, Menu, XIcon, Users, Heart, ZoomIn, Camera, Scale, Lock, Mail } from 'lucide-react';

import heroShisha from './images/hero_shisha.jpg';
import tobaccoImg from './images/tobacco.jpg';
import vapesImg from './images/vapes.jpg';
import headshopImg from './images/headshop.jpg';
import smokyLogo from './images/smoky_logo.png';

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.954-1.399C8.423 21.498 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
    </svg>
  );
}

const SHOP_PHONE = "02273 9918823";
const SHOP_PHONE_TEL = "tel:022739918823";
const SHOP_EMAIL = "smoky-headshop@t-online.de";
const SHOP_WHATSAPP_NUMBER = "4915755555773";
const SHOP_WHATSAPP_DISPLAY = "+49 1575 5555773";

const getWhatsAppUrl = (productTitle?: string) => {
  const text = productTitle
    ? `Hallo Smoky-Team, ich habe eine Frage zu "${productTitle}": Habt ihr das aktuell im Ladenlokal in Horrem vorrätig oder könnt ihr es für mich zurücklegen?`
    : `Hallo Smoky-Team, ich habe eine Frage zu eurem Sortiment / Vorbestellung in Horrem:`;
  return `https://wa.me/${SHOP_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const getMailToUrl = (productTitle?: string) => {
  const subject = productTitle ? `Produktanfrage: ${productTitle}` : `Anfrage an Smoky Head&Shisha Shop Horrem`;
  const body = productTitle
    ? `Hallo Smoky-Team,\n\nich habe eine Frage zu folgendem Produkt aus eurem Sortiment:\n- Produkt: ${productTitle}\n\nHabt ihr das aktuell im Ladenlokal in Horrem vorrätig oder könnt ihr es für mich reservieren?\n\nViele Grüße`
    : `Hallo Smoky-Team,\n\nich möchte folgendes bei euch anfragen:\n\nViele Grüße`;
  return `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string | null>(null);
  const [showInteractiveMap, setShowInteractiveMap] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'shisha' | 'vape' | 'headshop'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<{ src: string; title: string; category: string; desc: string } | null>(null);

  const trackPostHog = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.capture(event, properties);
    }
  };

  const navLinks = [
    { label: 'Sortiment', href: '#products' },
    { label: 'Über uns', href: '#about' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Bewertungen', href: '#reviews' },
    { label: 'Region', href: '#region' },
    { label: 'Kontakt & Anfahrt', href: '#contact-section' },
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
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo Brand Area (mit klarem Abstand nach rechts) */}
            <a href="#" className="flex items-center gap-3 shrink-0 mr-2 xl:mr-6 group">
              <div className="px-3 py-1 rounded-xl bg-black border border-[#c9a84c]/40 flex items-center justify-center shadow-lg shadow-[#c9a84c]/20 group-hover:border-[#c9a84c] group-hover:scale-105 transition-all">
                <span className="smoky-illuminated-text text-base sm:text-lg tracking-widest">SMOKY</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading text-sm sm:text-base font-black uppercase text-white block leading-none tracking-tight whitespace-nowrap">
                  HEAD&SHISHA <span className="text-[#c9a84c]">SHOP</span>
                </span>
                <span className="text-[9px] text-[#c9a84c] font-extrabold uppercase tracking-widest block mt-0.5 whitespace-nowrap">Kerpen-Horrem • Seit 2013</span>
              </div>
            </a>

            {/* Desktop Navigation Links (mit zentriertem & ausgedehntem Abstand) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 justify-center flex-1 mx-2">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-[11px] xl:text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-[#c9a84c] transition-colors whitespace-nowrap px-1 py-1">{l.label}</a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-1 xl:ml-4">
              <a href="tel:022739918823" className="hidden xl:inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-zinc-200 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap">
                <Phone className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>02273 9918823</span>
              </a>
              <a href="#contact-section" className="hidden sm:inline-flex bg-[#c9a84c] hover:bg-[#b8963d] text-black font-extrabold px-4 sm:px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#c9a84c]/20 transition-all hover:-translate-y-0.5 whitespace-nowrap">
                Produkte Reservieren
              </a>
              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg bg-stone-900 border border-stone-800">
                {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                <span className="text-[#c9a84c] font-black border-l border-stone-800 pl-2.5">Head & Shisha Shop Horrem</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0b0b0e]/80 backdrop-blur-md border border-stone-800 text-zinc-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>Bahnhofstraße 20 • Kerpen / Erftkreis</span>
              </div>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.02] font-black drop-shadow-2xl">
              KEINEN KOPF MACHEN, <br />
              <span className="text-[#c9a84c] drop-shadow-[0_10px_20px_rgba(201,168,76,0.3)]">ERSTMAL NOCH 'NEN KOPF MACHEN.</span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl drop-shadow-md">
              <strong className="text-white font-bold">Dein Headshop & Shishashop in Kerpen-Horrem:</strong> Der erste Fachshop im Rhein-Erft-Kreis – seit Februar 2013 eure Anlaufstelle an der Bahnhofstraße 20 (200 m vom Bahnhof Horrem). Auf 75 m² Ladenfläche erwarten dich Premium-Edelstahl-Shishas, über 100 Tabaksorten von Al Fakher bis Zomo, 26mm Naturkohle, Vapes, Glasbongs, Vaporizer und Raucherzubehör mit ehrlicher Fachberatung.
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

            {/* Prominent Hero Facebook Banner Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/80 to-slate-900/90 border border-blue-500/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 max-w-2xl shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-blue-600/50">
                  <Facebook className="w-6 h-6 fill-white text-white" />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-sm text-white block">Smoky Headshop Horrem auf Facebook</span>
                  <span className="text-xs text-blue-200 block">Tägliche News zu neuen Tabak-Lieferungen & Vape-Deals</span>
                </div>
              </div>
              <a href="https://www.facebook.com/smoky.headshop" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-md">
                Facebook Öffnen ➔
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
              { val: 'Seit 2013', label: 'Erster Head-&Shishashop im Erftkreis', gold: true },
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
            
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-[#c9a84c]/30 shadow-2xl aspect-[4/5]">
                <img src={tobaccoImg} alt="Shisha Kohle und Tabak im Smoky Headshop Horrem" className="w-full h-full object-cover filter contrast-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-lg text-black">
                    <Heart className="w-5 h-5 fill-black" />
                  </div>
                  <span className="text-white font-bold text-sm drop-shadow-md">Seit Februar 2013 in Horrem</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest block">Über uns</span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">
                MEHR ALS NUR EIN SHOP – <span className="text-[#c9a84c]">DEIN SPOT IN HORREM.</span>
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                Im Februar 2013 haben wir den ersten Head-&Shishashop im Rhein-Erft-Kreis eröffnet. Seitdem begrüßt euch unser junges, dynamisches Team aus dem Großraum Köln auf 75 m² in einem freundlichen Ambiente – alles rund ums Thema Wasserpfeifen und Rauchzubehör.
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
                  <button 
                    onClick={() => {
                      setInquiryProduct(p.title);
                      trackPostHog('product_inquiry_clicked', { product: p.title, category: p.category });
                    }}
                    className="w-full bg-stone-900 hover:bg-[#c9a84c] text-zinc-300 hover:text-black border border-stone-800 hover:border-[#c9a84c] font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                  >
                    <span>Im Laden Anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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

          {/* Compliant Direct Google Review Harvest Button (Sterling Sky 18-Day Velocity Rule) */}
          <div className="mt-12 text-center">
            <a 
              href="https://maps.google.com/?q=Bahnhofstraße+20+50169+Kerpen" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackPostHog('google_review_cta_clicked')}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-[#c9a84c]/40 hover:border-[#c9a84c] text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <Star className="w-4 h-4 fill-[#c9a84c] text-[#c9a84c]" />
              <span>Bewertung auf Google schreiben</span>
              <ArrowRight className="w-4 h-4 text-[#c9a84c]" />
            </a>
            <p className="text-[11px] text-zinc-500 mt-2.5">
              Direktes & unverfälschtes Kundenfeedback – hilft unserem Familienbetrieb in Horrem enorm!
            </p>
          </div>
        </div>
      </section>

      {/* ═══ REGION & EINZUGSGEBIET (Local SEO Rhein-Erft-Kreis & Köln-West) ═══ */}
      <section id="region" className="py-24 bg-[#070709] border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest block">
              Zentral erreichbar im Rhein-Erft-Kreis
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">
              DEIN HEAD- & SHISHASHOP FÜR <span className="text-[#c9a84c]">KERPEN, BERGHEIM & UMGEBUNG</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Direkt am Bahnhof Horrem – der verkehrsgünstige Treffpunkt für Shisha-Liebhaber, Dampfer und Headshop-Kunden aus dem gesamten Rhein-Erft-Kreis und dem Kölner Westen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#131318] border border-stone-800 hover:border-[#c9a84c]/60 transition-all duration-300 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-2.5 py-1 rounded-md">Direkt vor Ort</span>
                  <span className="text-xs text-zinc-400 font-mono">2 Min. Fußweg</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1.5">Horrem Bahnhof</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Nur 200 Meter vom Bahnhof Horrem entfernt (Bahnhofstraße 20). Bequem erreichbar für Berufspendler und Anwohner zu Fuß.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800/80 text-[11px] text-zinc-500 font-medium">
                Bahnhofstr. 20 • 50169 Kerpen
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#131318] border border-stone-800 hover:border-[#c9a84c]/60 transition-all duration-300 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-2.5 py-1 rounded-md">Nachbarorte</span>
                  <span className="text-xs text-zinc-400 font-mono">ca. 5–8 Min.</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1.5">Kerpen & Sindorf</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Aus Kerpen-Mitte, Sindorf, Mödrath oder Manheim in wenigen Minuten mit dem Auto oder in einer S-Bahn-Station bei uns.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800/80 text-[11px] text-zinc-500 font-medium">
                S12 / S19 & B55 Anbindung
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#131318] border border-stone-800 hover:border-[#c9a84c]/60 transition-all duration-300 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-2.5 py-1 rounded-md">Erftkreis</span>
                  <span className="text-xs text-zinc-400 font-mono">ca. 10 Min.</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1.5">Bergheim & Quadrath</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Schnelle Anfahrt über die L277 und B55 aus Bergheim, Quadrath-Ichendorf und Elsdorf. Riesige Tabak- und Zubehörauswahl vor Ort.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800/80 text-[11px] text-zinc-500 font-medium">
                L277 / B55 / A61 Abfahrt
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#131318] border border-stone-800 hover:border-[#c9a84c]/60 transition-all duration-300 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-2.5 py-1 rounded-md">Köln & Umland</span>
                  <span className="text-xs text-zinc-400 font-mono">ca. 12–15 Min.</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1.5">Frechen, Pulheim & Köln</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Mit RE1, RE9 oder S-Bahn ohne Parkplatzsuche und City-Stau aus Frechen, Köln-Ehrenfeld oder Köln Hbf direkt zum Bahnhof Horrem.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800/80 text-[11px] text-zinc-500 font-medium">
                RE1 / RE9 / A4 Autobahnkreuz
              </div>
            </div>
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
                <div className="flex items-start gap-3"><Facebook className="w-5 h-5 text-blue-400 shrink-0 mt-1" /><div><strong className="text-white block">Facebook:</strong><a href="https://www.facebook.com/smoky.headshop" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 font-bold text-blue-400 transition-colors">facebook.com/smoky.headshop</a></div></div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-800 aspect-[16/9] relative bg-stone-900 group">
                {showInteractiveMap ? (
                  <iframe title="Smoky Headshop Horrem Map" src="https://maps.google.com/maps?q=Bahnhofstraße%2020%2C%2050169%20Kerpen-Horrem&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0" loading="lazy" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#131318] to-[#0d0d12] space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm">Ladenlokal in Kerpen-Horrem</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">Bahnhofstraße 20 • 2 Min. zu Fuß vom Bahnhof Horrem</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                      <a 
                        href="https://maps.google.com/?q=Bahnhofstraße+20+50169+Kerpen" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => trackPostHog('google_maps_route_clicked', { source: 'map_card' })}
                        className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8963d] text-black font-extrabold px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
                      >
                        <span>Route in Maps planen</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => {
                          setShowInteractiveMap(true);
                          trackPostHog('interactive_map_activated');
                        }}
                        className="inline-flex items-center gap-1.5 bg-stone-800 hover:bg-stone-700 text-zinc-300 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                      >
                        <span>Karte laden</span>
                      </button>
                    </div>
                    <p className="text-[10px] text-zinc-500">
                      DSGVO-Schutz: Externe Google-Verbindung erst bei Klick aktiv.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#131318] border border-stone-800 rounded-3xl p-8 shadow-2xl space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-[11px] font-extrabold uppercase tracking-wider mb-3">
                  ⚡ Direktanfrage ohne Formular
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase mb-2">
                  SCHNELL ANFRAGEN & RESERVIEREN
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Kein lästiges Formular ausfüllen! Schreib uns direkt über WhatsApp oder per E-Mail für Tabaksorten, Shisha-Setups, Vapes oder Vorbestellungen – wir antworten direkt aus dem Ladenlokal.
                </p>
              </div>

              {/* Direct Action Options */}
              <div className="space-y-3.5">
                {/* WhatsApp Action Card */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackPostHog('contact_whatsapp_clicked', { source: 'contact_section' })}
                  className="group block p-5 rounded-2xl bg-gradient-to-r from-[#25D366]/15 via-[#1b3d2b]/60 to-stone-900 border border-[#25D366]/40 hover:border-[#25D366] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#25D366] text-black flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading font-extrabold text-white text-base">Direkt via WhatsApp</h4>
                          <span className="bg-[#25D366]/20 text-[#25D366] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Empfohlen</span>
                        </div>
                        <p className="text-xs text-zinc-300 mt-0.5">
                          {SHOP_WHATSAPP_DISPLAY} • Schnellste Antwort zu Sortiment, Preisen & Reservierungen
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#25D366] shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* Email Action Card */}
                <a
                  href={getMailToUrl()}
                  onClick={() => trackPostHog('contact_email_clicked', { source: 'contact_section' })}
                  className="group block p-5 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-[#c9a84c]/60 transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-extrabold text-white text-base">Per E-Mail anfragen</h4>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          smoky-headshop@t-online.de
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all" />
                  </div>
                </a>

                {/* Phone Call Card */}
                <a
                  href={SHOP_PHONE_TEL}
                  onClick={() => trackPostHog('contact_call_clicked', { source: 'contact_section' })}
                  className="group block p-4.5 rounded-2xl bg-stone-900/60 border border-stone-800/80 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-stone-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 text-[#c9a84c]" />
                      </div>
                      <div>
                        <h4 className="font-heading font-extrabold text-white text-sm">Telefonisch nachfragen</h4>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          02273 9918823 (Mo–Fr: 11–19 Uhr | Sa: 11–16 Uhr)
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/50 border border-stone-800 text-[11px] text-zinc-400 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <span>100% Datenschutz: Keine Speicherung auf der Webseite. Direkter Austausch über deine gewohnte App.</span>
              </div>
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
      <footer className="bg-[#070709] pt-16 pb-24 lg:pb-12 text-zinc-400 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="px-3 py-1 rounded-lg bg-black border border-[#c9a84c]/40 flex items-center justify-center shadow-md"><span className="smoky-illuminated-text text-base tracking-widest">SMOKY</span></div><span className="font-heading text-lg font-black uppercase text-white tracking-tight">HEAD&SHISHA <span className="text-[#c9a84c]">HORREM</span></span></div>
              <p className="text-xs text-zinc-400 leading-relaxed">Der erste Head-&Shishashop im Rhein-Erft-Kreis – seit Feb. 2013 euer Fachgeschäft für Shishas, Tabak, Vapes & Headshop-Zubehör.</p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-[#c9a84c] font-bold bg-[#c9a84c]/10 border border-[#c9a84c]/20 px-3 py-1.5 rounded-lg w-fit"><AlertCircle className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" /><span>Jugendschutz: Abgabe nur ab 18 Jahren</span></div>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Sortiment</h4>
              <ul className="space-y-2 text-xs"><li><a href="#products" className="hover:text-[#c9a84c] transition-colors">Shishas & Setups</a></li><li><a href="#products" className="hover:text-[#c9a84c] transition-colors">Tabak & Kokoskohle</a></li><li><a href="#products" className="hover:text-[#c9a84c] transition-colors">Vapes & Pods</a></li><li><a href="#products" className="hover:text-[#c9a84c] transition-colors">Headshop Zubehör</a></li></ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Ladenlokal</h4>
              <div className="space-y-2 text-xs"><p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" /><span>Bahnhofstraße 20, 50169 Kerpen</span></p><p className="flex items-center gap-2"><Facebook className="w-3.5 h-3.5 text-blue-400 shrink-0" /><a href="https://www.facebook.com/smoky.headshop" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 font-bold text-zinc-300 transition-colors">Facebook Seite</a></p><p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" /><a href="tel:022739918823" className="hover:text-white font-bold text-[#c9a84c]">02273 9918823</a></p><p className="flex items-start gap-2 pt-1"><Clock className="w-3.5 h-3.5 text-[#c9a84c] shrink-0 mt-0.5" /><span>Mo–Fr: 11–19 Uhr | Sa: 11–16 Uhr</span></p></div>
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

      {/* ═══ PRODUKT-ANFRAGE & SCHNELLKONTAKT MODAL ═══ */}
      {(inquiryProduct || isContactOpen) && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => {
            setInquiryProduct(null);
            setIsContactOpen(false);
          }}
        >
          <div 
            className="relative max-w-md w-full bg-[#131318] border border-[#c9a84c]/40 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c9a84c] block mb-1">
                  ⚡ 1-Klick Direktanfrage
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                  {inquiryProduct ? inquiryProduct : "Produkt anfragen & reservieren"}
                </h3>
              </div>
              <button 
                onClick={() => {
                  setInquiryProduct(null);
                  setIsContactOpen(false);
                }} 
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Wähle deinen bevorzugten Kanal – wir prüfen die Verfügbarkeit im Ladenlokal in Horrem und antworten dir direkt:
            </p>

            <div className="space-y-3">
              {/* WhatsApp Option */}
              <a
                href={getWhatsAppUrl(inquiryProduct || undefined)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackPostHog('modal_inquiry_whatsapp', { product: inquiryProduct || 'general' });
                  setInquiryProduct(null);
                  setIsContactOpen(false);
                }}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5 fill-black" />
                <span>Direkt per WhatsApp ({SHOP_WHATSAPP_DISPLAY})</span>
              </a>

              {/* Email Option */}
              <a
                href={getMailToUrl(inquiryProduct || undefined)}
                onClick={() => {
                  trackPostHog('modal_inquiry_email', { product: inquiryProduct || 'general' });
                  setInquiryProduct(null);
                  setIsContactOpen(false);
                }}
                className="w-full bg-[#c9a84c] hover:bg-[#b8963d] text-black font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-[#c9a84c]/20 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Per E-Mail anfragen</span>
              </a>

              {/* Phone Call Option */}
              <a
                href={SHOP_PHONE_TEL}
                onClick={() => {
                  trackPostHog('modal_inquiry_call', { product: inquiryProduct || 'general' });
                  setInquiryProduct(null);
                  setIsContactOpen(false);
                }}
                className="w-full bg-stone-900 hover:bg-stone-800 border border-stone-800 text-zinc-200 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#c9a84c]" />
                <span>Telefonisch: 02273 9918823</span>
              </a>
            </div>

            <div className="text-[11px] text-zinc-500 text-center pt-2 border-t border-stone-800/80 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span>Kein Formular • Keine Speicherung auf dem Server</span>
            </div>
          </div>
        </div>
      )}
      {isImpressumOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full max-h-[85vh] bg-[#111115] border border-[#c9a84c]/40 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-800 bg-[#0d0d10]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/30">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-tight">
                    Impressum
                  </h3>
                  <span className="text-[11px] text-[#c9a84c] font-medium">
                    Angaben gemäß § 5 DDG & § 18 MStV
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsImpressumOpen(false)} 
                className="p-2 text-zinc-400 hover:text-white hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <section className="space-y-1.5 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider text-[#c9a84c]">
                  Diensteanbieter & Ladenlokal
                </h4>
                <p className="font-bold text-white text-base">Smoky Head&Shisha Shop Horrem</p>
                <p>Bahnhofstraße 20<br />50169 Kerpen-Horrem<br />Deutschland</p>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">Kontaktmöglichkeiten</h4>
                <p>
                  Telefon: <a href="tel:022739918823" className="text-[#c9a84c] font-bold hover:underline">02273 9918823</a><br />
                  E-Mail: <a href="mailto:smoky-headshop@t-online.de" className="text-[#c9a84c] font-bold hover:underline">smoky-headshop@t-online.de</a><br />
                  Webseite: <a href="https://smoky-headshop.de" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] hover:underline">https://smoky-headshop.de</a>
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">Verantwortlich für redaktionelle Inhalte</h4>
                <p>Gemäß § 18 Abs. 2 MStV:<br />Smoky Head&Shisha Shop Horrem, Bahnhofstraße 20, 50169 Kerpen-Horrem</p>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">Umsatzsteuer</h4>
                <p className="text-zinc-400">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: Wird auf Anfrage mitgeteilt (Kleinunternehmerregelung gem. § 19 UStG bzw. Einzelunternehmen).
                </p>
              </section>

              <section className="space-y-1.5 bg-[#c9a84c]/5 p-3.5 rounded-xl border border-[#c9a84c]/20">
                <h4 className="font-heading font-bold text-[#c9a84c] text-sm">Hinweis zum Jugendschutz (§ 10 JuSchG)</h4>
                <p className="text-zinc-300 text-xs">
                  Der Erwerb von Tabakwaren, Wasserpfeifentabak, E-Zigaretten/Vapes, Liquiden sowie nikotinhaltigen und nikotinfreien Erzeugnissen ist ausschließlich Personen ab dem vollendeten 18. Lebensjahr gestattet. Im Ladenlokal führen wir vor der Abgabe eine strikte Altersprüfung (Ausweiskontrolle) durch.
                </p>
              </section>

              <section className="space-y-1.5 bg-stone-900/60 p-3.5 rounded-xl border border-stone-800">
                <h4 className="font-heading font-bold text-white text-sm">Bildnachweise & Hinweis zu KI-Inhalten</h4>
                <p className="text-zinc-300 text-xs">
                  Die auf dieser Website gezeigten Bild- und Produktillustrationen (u.&nbsp;a. im Hero-Banner, in den Sortimentskarten und der interaktiven Galerie) dienen der symbolischen Veranschaulichung unseres Sortiments. Sie wurden zum Teil unter Zuhilfenahme generativer künstlicher Intelligenz (KI) erstellt oder digital nachbearbeitet.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">Online-Streitbeilegung & Verbraucherschlichtung</h4>
                <p className="text-zinc-400 text-xs">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>.<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">Haftung für Inhalte & Links</h4>
                <p className="text-zinc-400 text-xs">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Für Inhalte externer Websites Dritter, auf die wir verlinken, übernehmen wir keine Gewähr; für diese ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 border-t border-stone-800 bg-[#0d0d10] flex justify-end">
              <button 
                onClick={() => setIsImpressumOpen(false)}
                className="bg-[#c9a84c] hover:bg-[#b8963d] text-zinc-950 font-bold px-5 py-2 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
      {isDatenschutzOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full max-h-[85vh] bg-[#111115] border border-[#c9a84c]/40 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-800 bg-[#0d0d10]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/30">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-tight">
                    Datenschutzerklärung
                  </h3>
                  <span className="text-[11px] text-[#c9a84c] font-medium">
                    DSGVO & TDDDG • Stand 2026
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsDatenschutzOpen(false)} 
                className="p-2 text-zinc-400 hover:text-white hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider text-[#c9a84c]">
                  1. Datenschutz auf einen Blick
                </h4>
                <p>
                  Die folgenden Hinweise geben einen verständlichen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section className="space-y-1.5 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                <h4 className="font-heading font-bold text-white text-sm">2. Verantwortliche Stelle</h4>
                <p className="font-bold text-white">Smoky Head&Shisha Shop Horrem</p>
                <p>
                  Bahnhofstraße 20<br />
                  50169 Kerpen-Horrem<br />
                  Telefon: 02273 9918823<br />
                  E-Mail: smoky-headshop@t-online.de
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">3. Hosting & Bereitstellung der Website</h4>
                <p>
                  Diese Website wird als statische Webanwendung auf Servern von <strong>GitHub Pages</strong> (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) gehostet.
                </p>
                <p className="text-zinc-400 text-xs">
                  Beim Aufruf der Website erfasst der Webserver automatisch technische Informationen in sogenannten <strong>Server-Log-Dateien</strong> (u.&nbsp;a. Browsertyp/-version, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse). Die Erfassung erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren, stabilen und fehlerfreien Bereitstellung unseres Internetauftritts (Art. 6 Abs. 1 lit. f DSGVO). Die Datenübermittlung in die USA wird durch Standardvertragsklauseln (SCC) der EU-Kommission abgesichert.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">4. Datenerfassung bei Kontaktaufnahme (WhatsApp & E-Mail)</h4>
                <p>
                  Wenn Sie uns per E-Mail, Telefon oder über den Messenger-Dienst <strong>WhatsApp</strong> kontaktieren (z.&nbsp;B. für Produktanfragen, Preis- oder Sortimentsauskünfte oder Vorbestellungen), werden Ihre übermittelten Daten (z.&nbsp;B. Name, Telefonnummer, Inhalt der Nachricht) ausschließlich zur Bearbeitung Ihres Anliegens und für eventuelle Anschlussfragen verarbeitet.
                </p>
                <div className="space-y-1.5 text-xs text-zinc-400 mt-2">
                  <p>
                    <strong className="text-zinc-200">Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (zur Durchführung vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person) bzw. Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an einer schnellen, unkomplizierten Kundenkommunikation).
                  </p>
                  <p>
                    <strong className="text-zinc-200">Hinweis zu WhatsApp:</strong> Wenn Sie uns per WhatsApp kontaktieren, nutzen Sie den Dienst der <em>Meta Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland</em>. Nachrichten und Anrufe sind Ende-zu-Ende verschlüsselt. Wir weisen darauf hin, dass die Nutzung von WhatsApp auf Ihrer eigenen freiwilligen Entscheidung beruht. Alternativ steht Ihnen jederzeit der Kontakt per Telefon (02273 9918823) oder E-Mail (smoky-headshop@t-online.de) offen.
                  </p>
                  <p>
                    <strong className="text-zinc-200">Keine Speicherung auf dieser Website:</strong> Diese Website speichert keine Kontaktformulardaten in einer Webserver-Datenbank. Die Kommunikation erfolgt direkt über Ihr jeweiliges E-Mail-Programm bzw. Ihren WhatsApp-Client.
                  </p>
                </div>
              </section>

              <section className="space-y-1.5 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                <h4 className="font-heading font-bold text-white text-sm text-[#c9a84c]">
                  5. Webanalyse mit PostHog (EU-Cloud Frankfurt, datensparsam & cookielos)
                </h4>
                <p>
                  Zur statistischen Reichweitenmessung, Fehlererkennung und technischen Optimierung unseres Webangebots setzen wir den Analysedienst <strong>PostHog</strong> ein (PostHog Inc., 2261 Market Street #4008, San Francisco, CA 94114, USA).
                </p>
                <div className="space-y-1.5 text-xs text-zinc-400 mt-2">
                  <p>
                    <strong className="text-zinc-200">Hosting in der Europäischen Union (Frankfurt am Main):</strong> Wir nutzen ausschließlich die <em>PostHog EU-Cloud</em> mit Serverstandort in Frankfurt am Main (Deutschland). Sämtliche Analysedaten verbleiben auf Servern innerhalb der EU.
                  </p>
                  <p>
                    <strong className="text-zinc-200">Cookielos & In-Memory-Verarbeitung:</strong> PostHog ist in einer datensparsamen Konfiguration eingebunden (<code className="text-[#c9a84c]">person_profiles: identified_only</code>, <code className="text-[#c9a84c]">persistence: 'memory'</code>). Es werden keine zustimmungspflichtigen Tracking-Cookies oder dauerhaften Kennungen auf Ihrem Endgerät nach § 25 Abs. 1 TDDDG abgelegt. IP-Adressen werden vor der Speicherung anonymisiert.
                  </p>
                  <p>
                    <strong className="text-zinc-200">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer fehlerfreien Bereitstellung, Betriebssicherheit und Reichweitenmessung unseres Webauftritts).
                  </p>
                  <p>
                    <strong className="text-zinc-200">Auftragsverarbeitung & SCC:</strong> Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung (Data Processing Agreement, DPA) inklusive EU-Standardvertragsklauseln.
                  </p>
                </div>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">6. Ihre Rechte als betroffene Person</h4>
                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-300 pl-2 text-xs">
                  <li><strong>Auskunft</strong> über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                  <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
                  <li><strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)</li>
                  <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                  <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                  <li><strong>Widerruf Ihrer Einwilligung</strong> jederzeit mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">7. Beschwerderecht bei der Aufsichtsbehörde</h4>
                <p className="text-xs text-zinc-400">
                  Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei einer zuständigen Aufsichtsbehörde zu (Art. 77 DSGVO). Die für unseren Standort zuständige Aufsichtsbehörde ist:<br />
                  <em>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)<br />
                  Kavalleriestr. 2–4, 40213 Düsseldorf • Webseite: <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] underline">www.ldi.nrw.de</a></em>
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">8. SSL- bzw. TLS-Verschlüsselung</h4>
                <p className="text-xs text-zinc-400">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz vertraulicher Daten eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile mit „https://“ beginnt und ein Schloss-Symbol im Browser angezeigt wird.
                </p>
              </section>

              <section className="space-y-1.5 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                <h4 className="font-heading font-bold text-white text-sm text-[#c9a84c]">
                  9. Lokale Schriftarten (Self-Hosted Fonts – LG München I konform)
                </h4>
                <p className="text-xs text-zinc-400">
                  Diese Website nutzt zur einheitlichen und ansprechenden typografischen Darstellung Schriftarten, die <strong>vollständig lokal</strong> auf unserem Webserver gehostet werden. Beim Aufruf unserer Seiten wird <strong>keine Verbindung</strong> zu externen Servern von Google Fonts aufgebaut und Ihre IP-Adresse wird nicht an Dritte übermittelt.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-heading font-bold text-white text-sm">
                  10. Interaktive Standortkarte (2-Klick-Lösung für Google Maps)
                </h4>
                <p className="text-xs text-zinc-400">
                  Wir binden auf dieser Website eine Anfahrtskarte über eine datenschutzfreundliche <strong>2-Klick-Lösung</strong> ein. Standardmäßig ist die interaktive Google-Maps-Karte deaktiviert, sodass beim Aufrufen der Website keinerlei personenbezogene Daten (wie Ihre IP-Adresse) an Google übertragen werden. Erst wenn Sie aktiv auf „Karte laden“ klicken, wird eine Verbindung zu den Servern von Google (Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland) hergestellt.
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 border-t border-stone-800 bg-[#0d0d10] flex justify-end">
              <button 
                onClick={() => setIsDatenschutzOpen(false)}
                className="bg-[#c9a84c] hover:bg-[#b8963d] text-zinc-950 font-bold px-5 py-2 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ MOBILE STICKY BOTTOM ACTION BAR (1-Tap Call & WhatsApp) ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#070709]/95 backdrop-blur-lg p-3 border-t border-stone-800 flex items-center justify-between gap-3 lg:hidden shadow-2xl">
        <a 
          href={SHOP_PHONE_TEL} 
          onClick={() => trackPostHog('mobile_sticky_call_clicked')}
          className="flex-1 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white font-bold py-3 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 text-[#c9a84c]" />
          <span>Anrufen</span>
        </a>
        <a 
          href={getWhatsAppUrl()} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={() => trackPostHog('mobile_sticky_whatsapp_clicked')}
          className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold py-3 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4 fill-black" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
