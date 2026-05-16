import { motion } from 'framer-motion';

const sections = [
  {
    title: "Intelligent Front Storage",
    description: "The spacious front basket is more than just storage. Integrated with carbon-fiber reinforcements and weather-resistant materials, it's designed to carry your essentials securely without compromising the bike's balance.",
    image: "/basket-detail.jpg",
    tags: ["Carbon Fiber", "Weatherproof", "15kg Capacity"]
  },
  {
    title: "Ergonomic Rear Seating",
    description: "Your passenger travels in style. The ergonomic rear seat features high-density memory foam and a minimalist aesthetic, ensuring comfort for long city commutes or weekend trips.",
    image: "/seat-detail.jpg",
    tags: ["Memory Foam", "Modular Design", "Extended Comfort"]
  },
  {
    title: "Advanced LED Ecosystem",
    description: "Visibility redefined. Our integrated LED system features 360-degree ambient lighting and a powerful 2000-lumen adaptive headlight that adjusts to your speed and environment.",
    image: "/led-lighting.jpg",
    tags: ["Adaptive Beam", "360° Safety", "Low Energy"]
  }
];

const DetailedExploration = () => {
  return (
    <section id="design" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space mb-4">ENGINEERED TO <span className="text-cyan-400">PERFECTION</span></h2>
          <div className="h-1 w-24 bg-cyan-400 mx-auto" />
        </motion.div>

        <div className="space-y-32">
          {sections.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              <motion.div 
                className="flex-1 w-full"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-cyan-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="rounded-[2.5rem] relative z-10 w-full aspect-square object-cover border border-white/10 shadow-2xl"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex gap-2 mb-6">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 border border-white/20 rounded-full text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold font-space mb-6">{item.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8 font-inter">
                  {item.description}
                </p>
                <button className="text-cyan-400 font-bold tracking-widest text-sm uppercase group flex items-center gap-2">
                  Learn more <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedExploration;
