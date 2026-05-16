import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DetailedExploration from './components/DetailedExploration';
import Lifestyle from './components/Lifestyle';
import Specs from './components/Specs';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        <DetailedExploration />
        
        <Lifestyle />
        
        <Specs />

        <section className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-bold font-space mb-8">
                  START YOUR <br />
                  <span className="text-cyan-400 text-glow">ELECTRIC JOURNEY</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-inter">
                  Join the revolution of urban mobility. Limited pre-order slots available for the first production run.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="accent-button text-lg px-12 py-5 w-full sm:w-auto">
                    Pre-Order Now
                  </button>
                  <button className="glass px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors w-full sm:w-auto">
                    Find a Dealer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
