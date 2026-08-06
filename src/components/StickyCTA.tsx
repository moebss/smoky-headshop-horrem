import { Phone, MessageCircle } from 'lucide-react';

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-neutral-950/95 border-t border-neutral-800 p-3 backdrop-blur-lg flex gap-3">
      <a
        href="tel:+4922739918823"
        className="flex-1 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-amber-500/25"
      >
        <Phone className="w-4 h-4 fill-neutral-950" />
        <span>Jetzt Anrufen</span>
      </a>

      <a
        href="#contact"
        className="flex-1 bg-neutral-900 border border-neutral-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm"
      >
        <MessageCircle className="w-4 h-4 text-amber-500" />
        <span>Anfrage</span>
      </a>
    </div>
  );
}
