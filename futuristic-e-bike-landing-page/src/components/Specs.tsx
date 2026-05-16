import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Cpu, Zap, Shield, Weight } from 'lucide-react';

const specs = [
  {
    category: "Power & Performance",
    icon: <Zap className="w-5 h-5" />,
    items: [
      { label: "Motor Type", value: "E-Volt UltraDrive Mid-Motor" },
      { label: "Nominal Power", value: "750W (Peak 1200W)" },
      { label: "Max Torque", value: "95 Nm" },
      { label: "Assist Modes", value: "5 Levels + Turbo Boost" }
    ]
  },
  {
    category: "Battery & Electronics",
    icon: <Cpu className="w-5 h-5" />,
    items: [
      { label: "Capacity", value: "48V 15.6Ah (750Wh)" },
      { label: "Cells", value: "Samsung 21700 Grade A" },
      { label: "Smart Features", value: "iOS/Android App, GPS Tracking" },
      { label: "Display", value: "5-inch Curved OLED" }
    ]
  },
  {
    category: "Safety & Build",
    icon: <Shield className="w-5 h-5" />,
    items: [
      { label: "Frame Material", value: "6061 Aerospace Aluminum" },
      { label: "Braking System", value: "Hydraulic 4-Piston Disc" },
      { label: "Lighting", value: "Integrated Smart LED System" },
      { label: "Tires", value: "Schwalbe Moto-X 27.5\" x 2.4\"" }
    ]
  },
  {
    category: "Dimensions & Weight",
    icon: <Weight className="w-5 h-5" />,
    items: [
      { label: "Bike Weight", value: "24.5 kg (inc. battery)" },
      { label: "Max Load", value: "150 kg" },
      { label: "Wheelbase", value: "1150 mm" },
      { label: "Size range", value: "One size (Fits 160-195cm)" }
    ]
  }
];

const Specs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="specs" className="py-24 bg-[#050505] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">TECHNICAL SPECIFICATIONS</h2>
          <p className="text-white/50">Full transparency on the technology that drives you.</p>
        </div>

        <div className="space-y-4">
          {specs.map((spec, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-cyan-400/10 rounded-lg text-cyan-400">
                    {spec.icon}
                  </div>
                  <span className="text-xl font-bold font-space">{spec.category}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                >
                  <ChevronDown className="text-white/30" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5">
                      {spec.items.map((item, i) => (
                        <div key={i} className="flex flex-col py-2 border-b border-white/5 last:border-0 md:[&:nth-last-child(-n+2)]:border-0">
                          <span className="text-xs uppercase tracking-widest text-white/40 mb-1">{item.label}</span>
                          <span className="text-white/90 font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;
