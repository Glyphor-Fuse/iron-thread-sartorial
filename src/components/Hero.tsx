import { motion, useScroll, useTransform } from 'framer-motion';

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

export default Hero;