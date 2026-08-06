import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Categories } from './components/Categories';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-amber-500 selection:text-neutral-950 pb-16 sm:pb-0">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Categories />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
