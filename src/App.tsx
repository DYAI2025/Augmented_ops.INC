import { motion } from 'motion/react';
import { 
  Rocket, 
  Users, 
  Mic2, 
  Target, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  BarChart3 
} from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  price, 
  delay, 
  icon: Icon,
  accentColor = "neon-blue",
  status = "READY"
}: { 
  title: string; 
  description: string; 
  price?: string; 
  delay: number;
  icon: any;
  accentColor?: string;
  status?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ 
      scale: 1.02,
      boxShadow: accentColor === 'neon-blue' 
        ? "0 0 25px rgba(0, 240, 255, 0.2)" 
        : accentColor === 'neon-green' 
        ? "0 0 25px rgba(57, 255, 20, 0.2)" 
        : "0 0 25px rgba(255, 255, 255, 0.1)"
    }}
    transition={{ 
      duration: 0.8, 
      delay,
      boxShadow: { duration: 0.3 },
      scale: { duration: 0.3 }
    }}
    viewport={{ once: true }}
    className={`group relative p-6 glass-card border-l-4 ${accentColor === 'neon-blue' ? 'border-l-neon-blue' : accentColor === 'neon-green' ? 'border-l-neon-green' : 'border-l-gray-600'} flex flex-col justify-between transition-all duration-300`}
  >
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
      <Icon size={80} strokeWidth={0.5} />
    </div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className={`text-xl font-bold uppercase tracking-tight ${accentColor === 'neon-green' ? 'text-neon-green' : ''}`}>{title}</h3>
        <span className="mono text-[10px] bg-black/50 px-2 py-1 border border-white/10 rounded">{status}</span>
      </div>
      
      <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">
        {description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        {price ? (
          <span className="mono text-lg font-bold text-neon-blue">{price}</span>
        ) : (
          <span className="mono text-[10px] text-gray-500 uppercase tracking-tighter">Custom Pricing</span>
        )}
        <button className="text-[10px] uppercase font-bold tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors">
          Mehr erfahren →
        </button>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-black relative overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-neon-blue opacity-[0.05] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-neon-green opacity-[0.05] blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-8 py-8 flex justify-between items-center border-b border-white/5 backdrop-blur-md">
        <div className="text-2xl font-black tracking-tighter">
          <span className="text-white">AUGMENTED</span><span className="text-neon-blue"> OPS</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">
          <a href="#services" className="hover:text-white transition-colors">Operations</a>
          <a href="#benefits" className="hover:text-white transition-colors">Technology</a>
          <a href="#footer" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-48 pb-20 px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
            >
              Dein Agenten-Team.<br />
              <span className="text-neon-blue">Wir bauen und betreiben es.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg text-gray-400 font-light max-w-xl mb-10"
            >
              Vier spezialisierte Schwärme. Ein Ansprechpartner. <br className="hidden md:block" />
              Sofort einsatzbereit für dein Startup.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-neon-green text-black px-8 py-4 font-bold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-all glow-green">
                Growth Deck kennenlernen
              </button>
              <button className="border border-neon-blue text-neon-blue px-8 py-4 font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-neon-blue hover:text-black transition-all">
                Alle Services sehen
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12"
            >
              <button className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-sm hover:bg-neon-blue transition-all duration-500 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Request a Demo <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </button>
              <div className="mt-4 flex items-center gap-4 text-[10px] text-gray-500 mono uppercase tracking-[0.2em] justify-center sm:justify-start">
                <span className="flex items-center gap-1"><Zap size={10} className="text-neon-green" /> Free Discovery Call</span>
                <span className="opacity-30">/</span>
                <span>30-min Deep Dive</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="px-8 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ServiceCard 
              title="Growth Deck"
              description="Investoren-Pitchdeck in 48 Stunden. Strategische Exzellenz trifft auf High-End Design. Komplett KI-optimiert."
              price="249 €"
              delay={0.1}
              icon={Rocket}
              status="READY"
            />
            <ServiceCard 
              title="Talent Swarm"
              description="Recruiting on Demand. Unsere Agenten finden, screenen und qualifizieren deine Kandidaten autonom."
              delay={0.2}
              icon={Users}
              accentColor="gray-600"
              status="ON-DEMAND"
            />
            <ServiceCard 
              title="Voice Crew"
              description="Echte Voice-Agenten für deinen Customer Support. 24/7 erreichbar, skalierbar und extrem menschlich."
              delay={0.3}
              icon={Mic2}
              accentColor="neon-green"
              status="24/7 ACTIVE"
            />
            <ServiceCard 
              title="Forge Reach"
              description="Marketing & Lead-Generierung durch Agenten-Teams. Wir positionieren dich am Markt."
              delay={0.4}
              icon={Target}
              accentColor="gray-600"
              status="BETA"
            />
          </div>
        </section>

        {/* Benefits Strip */}
        <section id="benefits" className="px-8 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full bg-neon-blue shrink-0 shadow-[0_0_8px_#00F0FF]" />
              <p className="text-[11px] uppercase tracking-wide font-medium text-gray-300">Kontrolle behalten — wir machen die Arbeit</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full bg-neon-green shrink-0 shadow-[0_0_8px_#39FF14]" />
              <p className="text-[11px] uppercase tracking-wide font-medium text-gray-300">Skaliert von 0 auf 100 Agenten</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full bg-white shrink-0 shadow-[0_0_8px_#FFFFFF]" />
              <p className="text-[11px] uppercase tracking-wide font-medium text-gray-300">Bezahlst nur, was wirklich arbeitet</p>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="px-8 py-24 max-w-7xl mx-auto border-t border-white/5">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-gray-500 mb-12">Validated by Industry Leaders</span>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-16 items-center justify-items-center opacity-40 grayscale group hover:opacity-100 transition-opacity duration-700">
              {['Nexus AI', 'Quantum Flow', 'Ether Labs', 'Nova Health', 'Vector Dynamics'].map((client, i) => (
                <motion.div 
                  key={client}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xl md:text-2xl font-bold tracking-tighter whitespace-nowrap hover:text-neon-blue transition-colors cursor-default"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="footer" className="px-8 pt-20 pb-10 max-w-7xl mx-auto text-[10px] text-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/5 pb-8 mb-4">
            <div className="mono text-gray-400">
              SYSTEM STATUS: <span className="text-neon-green">OPTIMAL</span> // AUGMENTED_OPS_ONLINE
            </div>
            <div className="uppercase tracking-[0.2em] font-bold">
              MADE WITH AUGMENTED OPS — © 2024
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Twitter // X</a>
              <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Impressum & Datenschutz</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
