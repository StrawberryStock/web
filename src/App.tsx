import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  TrendingUp, 
  Briefcase, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 메뉴에 Portfolio 추가
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' }, 
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                HYUN & <span className={isScrolled ? 'text-slate-500' : 'text-slate-300'}>PARTNERS</span>
              </span>
            </div>
            
            <div className={`hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-blue-500 transition-colors text-[11px]">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a 
                href="#contact" 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isScrolled 
                    ? 'bg-blue-900 text-white hover:bg-slate-800' 
                    : 'bg-white text-blue-900 hover:bg-blue-50'
                }`}
              >
                상담문의
              </a>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={isScrolled ? 'text-slate-900' : 'text-white'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4 shadow-xl">
                {navLinks.map((link) =>
