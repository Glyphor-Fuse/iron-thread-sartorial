import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Menu, X, ArrowRight, Instagram, Linkedin, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-sm border-b border-white/5 px-6 py-4 flex justify-between items-center">
      <div className="text-xl tracking-[0.3em] font-serif font-bold text-white uppercase">
        Iron Thread
      </div>
      <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.4em] uppercase text-white/60 font-medium">
        <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
        <a href="#bespoke" className="hover:text-white transition-colors">The Bespoke Process</a>
        <a href="#archives" className="hover:text-white transition-colors">Archives</a>
        <a href="#contact" className="hover:text-white transition-colors">Consultation</a>
      </div>
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594932224828-b4b057b7d6ee?auto=format&fit=crop&q=80&w=2000" 
          alt="Macro Wool Texture" 
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/40 to-[#0d0d0d]" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-[10px] tracking-[0.6em] text-white/50 uppercase mb-8"
        >
          Dallas — London — Global
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8"
        >
          Architectural <br />
          <span className="italic">Sartorialism</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-[1px] h-24 bg-white/20 mx-auto"
        />
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-20">
    <span className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase block mb-4">{subtitle}</span>
    <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">{title}</h2>
  </div>
);

const Philosophy = () => (
  <section id="philosophy" className="py-32 px-6 md:px-24 bg-[#0d0d0d] border-y border-white/5">
    <div className="grid md:grid-cols-2 gap-24 items-center">
      <div className="space-y-8">
        <SectionHeader subtitle="The Narrative" title="Frontier Spirit, Savile Discipline." />
        <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-lg">
          We bridge the gap between the rugged ambition of the Dallas frontier and the meticulous discipline of Savile Row. Every garment is a rigid architectural statement designed to survive the boardroom and the ballroom alike.
        </p>
        <div className="pt-8">
          <button className="group flex items-center space-x-4 text-[10px] tracking-[0.4em] uppercase text-white font-bold border-b border-white/20 pb-2 transition-all hover:border-white">
            <span>Explore the Craft</span>
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
      <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1598460394391-e13d113e20c5?auto=format&fit=crop&q=80&w=1200" 
          alt="Tailoring Detail" 
          className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-1000"
        />
      </div>
    </div>
  </section>
);

const FeatureGrid = () => (
  <section id="bespoke" className="py-32 px-6 md:px-24 bg-white">
    <div className="grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
        <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase block mb-4">Precision Engineering</span>
        <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight mb-12">Built to Endure</h2>
      </div>
      <div className="flex items-end justify-end">
         <p className="text-neutral-500 max-w-xs text-sm leading-relaxed mb-4">
          Iron Thread garments are not merely sewn; they are engineered with a structural integrity that respects the physics of the human form.
         </p>
      </div>
    </div>
    
    <div className="grid md:grid-cols-3 gap-px bg-neutral-200 mt-20 border border-neutral-200">
      {[
        { title: "The Foundation", desc: "Hand-canvassed structural layers using traditional horsehair.", img: "https://images.unsplash.com/photo-1592842413158-941957410886?auto=format&fit=crop&q=80&w=800" },
        { title: "The Material", desc: "Rare high-grain raw wools sourced from the world's most exclusive mills.", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800" },
        { title: "The Finish", desc: "Hand-felled seams and architectural shoulder expressions.", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800" }
      ].map((item, i) => (
        <div key={i} className="bg-white p-12 group">
          <div className="aspect-[4/5] bg-neutral-100 mb-8 overflow-hidden">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <h3 className="text-xl font-serif text-black mb-4">{item.title}</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const CTA = () => (
  <section id="contact" className="py-32 px-6 bg-[#1a1a1a] text-center">
    <div className="max-w-4xl mx-auto border border-white/10 p-24">
      <span className="text-[10px] tracking-[0.6em] text-white/40 uppercase block mb-8">By Appointment Only</span>
      <h2 className="text-5xl md:text-7xl font-serif text-white mb-12">The Thread Awaits.</h2>
      <button className="bg-white text-black px-12 py-5 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-neutral-200 transition-colors">
        Schedule Consultation
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0d0d0d] py-20 px-6 md:px-24 border-t border-white/5">
    <div className="grid md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <div className="text-xl tracking-[0.3em] font-serif font-bold text-white uppercase mb-8">
          Iron Thread
        </div>
        <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
          Rigid discipline. Rugged ambition. The new standard in luxury bespoke tailoring for the modern pioneer.
        </p>
      </div>
      <div>
        <h4 className="text-[10px] tracking-[0.4em] text-white uppercase mb-6">Inquiries</h4>
        <ul className="text-neutral-400 text-sm space-y-4 font-light">
          <li>atelier@ironthread.com</li>
          <li>+1 214 555 0192</li>
        </ul>
      </div>
      <div>
        <h4 className="text-[10px] tracking-[0.4em] text-white uppercase mb-6">Social</h4>
        <div className="flex space-x-6 text-neutral-400">
          <Instagram size={20} className="hover:text-white cursor-pointer transition-colors" />
          <Linkedin size={20} className="hover:text-white cursor-pointer transition-colors" />
          <MapPin size={20} className="hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
    <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] text-neutral-600 uppercase">
      <p>© 2024 Iron Thread Sartorial. All Rights Reserved.</p>
      <div className="flex space-x-8 mt-4 md:mt-0">
        <a href="#" className="hover:text-neutral-400">Privacy</a>
        <a href="#" className="hover:text-neutral-400">Terms</a>
      </div>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    document.title = "Iron Thread Sartorial | Luxury Bespoke Tailoring";
  }, []);

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <FeatureGrid />
        <section className="h-[60vh] bg-fixed bg-cover bg-center grayscale contrast-125" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555529731-4c947099d026?auto=format&fit=crop&q=80&w=2000)' }}>
          <div className="w-full h-full bg-black/60 flex items-center justify-center">
             <div className="text-center">
                <blockquote className="text-3xl md:text-5xl font-serif italic max-w-2xl px-6 leading-tight">
                  "Architecture is inhabited sculpture. Sartorialism is inhabited architecture."
                </blockquote>
             </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
