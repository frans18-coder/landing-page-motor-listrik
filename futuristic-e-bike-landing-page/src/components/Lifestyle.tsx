import { motion } from 'framer-motion';

const Lifestyle = () => {
  return (
    <section id="lifestyle" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lifestyle.jpg" 
          alt="E-bike in city" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-7xl font-bold font-space mb-8 leading-tight">
            YOUR CITY, <br />
            <span className="text-cyan-400">UNBOUND.</span>
          </h2>
          <p className="text-xl text-white/80 font-inter mb-10 leading-relaxed">
            From the bustling neon streets of Tokyo to the quiet coastal roads of California, the E-VOLT is designed for those who demand more from their journey.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold font-space text-cyan-400">IP67</div>
              <div className="text-sm text-white/50 uppercase tracking-widest">Waterproof Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-space text-cyan-400">ALL-TERRAIN</div>
              <div className="text-sm text-white/50 uppercase tracking-widest">Tire System</div>
            </div>
          </div>
          <button className="accent-button">View Lifestyle Gallery</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Lifestyle;
