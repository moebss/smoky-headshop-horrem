import { MapPin, Phone, Clock, Mail, Navigation, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-2">
            Besuch Uns Vor Ort
          </span>
          <h2 className="font-['Anton'] text-4xl sm:text-5xl uppercase tracking-tight text-white mb-4">
            Kontakt & Anfahrt
          </h2>
          <p className="text-neutral-400 font-['Lora'] text-lg">
            Komm vorbei im Laden für eine fachkundige Beratung oder ruf uns direkt an!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Side */}
          <div className="space-y-8">
            
            {/* Address box */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex items-start gap-5">
              <div className="p-4 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-['Anton'] text-2xl uppercase text-white mb-2">Standort</h3>
                <p className="text-neutral-300 font-semibold text-lg">Smoky Head & Shisha Shop</p>
                <p className="text-neutral-400">Bahnhofstraße 20</p>
                <p className="text-neutral-400 mb-4">50169 Kerpen-Horrem (Großraum Köln)</p>
                <a
                  href="https://maps.google.com/?q=Bahnhofstraße+20+50169+Kerpen"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Route in Google Maps öffnen</span>
                </a>
              </div>
            </div>

            {/* Phone & Hours */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0 w-fit mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-['Anton'] text-xl uppercase text-white mb-1">Telefon</h4>
                <a
                  href="tel:+4922739918823"
                  className="text-amber-400 hover:underline text-lg font-bold block mb-1"
                >
                  02273 / 9918823
                </a>
                <p className="text-xs text-neutral-400">Ruf uns bei Fragen gerne an!</p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0 w-fit mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-['Anton'] text-xl uppercase text-white mb-1">Öffnungszeiten</h4>
                <div className="text-sm text-neutral-300 space-y-1">
                  <p><strong className="text-white">Mo – Fr:</strong> 11:00 – 19:00</p>
                  <p><strong className="text-white">Samstag:</strong> 11:00 – 16:00</p>
                  <p className="text-xs text-neutral-500">Sonntag: Geschlossen</p>
                </div>
              </div>

            </div>

          </div>

          {/* Form Side */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
            <h3 className="font-['Anton'] text-2xl uppercase text-white mb-2">
              Nachricht oder Anfrage Senden
            </h3>
            <p className="text-neutral-400 text-sm mb-6">
              Hinterlasse uns eine Nachricht bezüglich Verfügbarkeiten, Reservierungen oder Grow-Bestellungen.
            </p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Vielen Dank! Ihre Nachricht wurde empfangen."); }}>
              
              {/* Honeypot anti-spam field */}
              <input type="text" name="website_check" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Dein Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="z.B. Max Mustermann"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Telefon oder E-Mail *
                </label>
                <input
                  type="text"
                  required
                  placeholder="0171... oder name@domain.de"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Dein Anliegen / Produktwunsch *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Welchen Tabak oder welches Zubehör suchst du?"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-500 text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-colors flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-5 h-5 fill-neutral-950" />
                  <span>Unverbindliche Anfrage Absenden</span>
                </button>
              </div>

              <p className="text-xs text-neutral-500 text-center mt-3">
                Mit dem Absenden stimmst du der Datenschutzerklärung zu. Keine Datenweitergabe.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
