import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Layer: Macro Texture + Gradients */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1598501479155-90b452288d59?q=80&w=2400&auto=format&fit=crop')`,
            filter: 'contrast(1.1) brightness(0.8)'
          }}
        />
        {/* Vignette and depth layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-80"></div>
      </div>

      {/* Structural Swiss Grid (Subtle) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
          backgroundSize: 'clamp(50px, 10vw, 150px) clamp(50px, 10vw, 150px)' 
        }}
      ></div>

      {/* Architectural Outer Frame */}
      <div className="absolute inset-0 z-20 pointer-events-none border-[clamp(1rem,3vw,2.5rem)] border-[#0a0a0a]"></div>

      {/* Main Content Layout */}
      <div className="relative z-30 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start space-y-12">
            
            {/* Brand Badge */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-zinc-700"></div>
              <span className="text-zinc-400 text-[10px] md:text-xs uppercase tracking-[0.5em] font-medium">
                Dallas Frontier × Savile Row
              </span>
            </div>

            {/* Headline: Swiss Neo-Classical Style */}
            <h1 className="text-white text-5xl md:text-8xl lg:text-[110px] font-serif font-light leading-[0.9] tracking-tighter">
              Rigid <br />
              <span className="italic pl-2 md:pl-8">Architecture.</span> <br />
              Meticulous <br />
              <span className="italic pl-2 md:pl-8">Discipline.</span>
            </h1>

            {/* Supporting Text & CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full pt-4">
              <div className="max-w-sm">
                <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed border-l border-zinc-800 pl-6">
                  Iron Thread Sartorial defines the intersection of rugged ambition and refined heritage. Every garment is a structural statement engineered for the modern commander.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start md:items-center gap-6 self-end">
                <button className="relative px-12 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] transition-transform hover:-translate-y-1 hover:shadow-2xl active:translate-y-0">
                  The Commission
                </button>
                <button className="group relative px-12 py-5 border border-zinc-800 text-white text-[11px] font-bold uppercase tracking-[0.2em] overflow-hidden">
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">Our Heritage</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Lateral Element */}
      <div className="absolute right-12 top-1/2 -rotate-90 origin-right translate-y-[-50%] hidden 2xl:block">
        <span className="text-[10px] tracking-[1.5em] uppercase text-zinc-700 font-semibold whitespace-nowrap">
          Sartorial Excellence // Est. MMXIV
        </span>
      </div>

      {/* Scroll Progress Line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-4">
        <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">The Descent</span>
        <div className="w-px h-16 bg-gradient-to-b from-zinc-700 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
