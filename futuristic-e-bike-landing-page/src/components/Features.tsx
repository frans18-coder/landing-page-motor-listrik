import { motion } from 'framer-motion';
import { Battery, Zap, Gauge, Timer } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-cyan-400" />,
    title: 'Range',
    value: '120km',
    description: 'Ultra-long range on a single charge for endless exploration.'
  },
  {
    icon: <Battery className="w-8 h-8 text-cyan-400" />,
    title: 'Battery',
    value: '750Wh',
    description: 'Next-gen solid-state battery technology with high density.'
  },
  {
    icon: <Gauge className="w-8 h-8 text-cyan-400" />,
    title: 'Top Speed',
    value: '45km/h',
    description: 'High-torque mid-drive motor for effortless acceleration.'
  },
  {
    icon: <Timer className="w-8 h-8 text-cyan-400" />,
    title: 'Charging',
    value: '2.5h',
    description: 'Rapid-charge system gets you back on the road in minutes.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-cyan-400/50 transition-colors"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-cyan-400/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-white/50 text-sm font-space uppercase tracking-widest mb-1">{feature.title}</h3>
              <div className="text-4xl font-bold font-space mb-4 group-hover:text-cyan-400 transition-colors">
                {feature.value}
              </div>
              <p className="text-white/60 font-inter text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
