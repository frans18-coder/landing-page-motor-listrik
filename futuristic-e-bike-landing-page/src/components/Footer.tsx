import { Zap, Globe, MessageSquare, Share2, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Zap className="text-cyan-400 fill-cyan-400" />
              <span className="text-3xl font-bold tracking-tighter font-space">E-VOLT</span>
            </div>
            <p className="text-white/50 max-w-sm mb-10 text-lg">
              Redefining urban mobility through sustainable technology and avant-garde design.
            </p>
            <div className="flex gap-6">
              {[Globe, MessageSquare, Share2].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-full hover:bg-cyan-400 hover:text-black transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Products</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">E-VOLT One</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">E-VOLT S</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Merchandise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Support</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-sm">
            © 2026 E-VOLT MOTORS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-10">
            <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">
              Join the waitlist <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
