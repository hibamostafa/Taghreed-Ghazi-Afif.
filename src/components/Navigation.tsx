import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Overview", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Inquire", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`rounded-full transition-all duration-500 ${
            isScrolled
              ? 'bg-white/70 border border-[#E6E6FA]/50 shadow-sm backdrop-blur-xl'
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between px-8 py-3">
            
            {/* Logo: Clean & Modern */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl tracking-tighter cursor-pointer flex items-center gap-1"
              whileHover={{ scale: 1.02 }}
            >
               <span className="text-xl font-bold tracking-tighter text-[#1A1A1A]">
              TAGHREED <span className="font-serif italic font-light text-[#DB87A4]">G.A.</span>
            </span>
            </motion.button>

            {/* Desktop Navigation: Minimalist Editorial */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 hover:text-[#DB87A4] transition-colors relative group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.label}
                  {/* Underline matches the Lavender/Pink vibe */}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-[#E6E6FA] group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* CTA Button: Solid & High-Contrast */}
            <div className="hidden md:block">
              <Button
                size="sm"
                className="bg-[#1A1A1A] text-white hover:bg-[#DB87A4] rounded-full px-8 text-[10px] font-bold uppercase tracking-widest transition-all duration-500"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1A1A1A]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu: Lavender Frost Palette */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden border-t border-[#E6E6FA] px-8 py-10 bg-white/95 backdrop-blur-2xl rounded-b-[2.5rem] shadow-2xl shadow-[#E6E6FA]/20"
              >
                <div className="flex flex-col gap-8 text-center">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-[11px] uppercase tracking-[0.3em] font-black text-slate-400 hover:text-[#DB87A4] transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    size="lg"
                    className="w-full bg-[#1A1A1A] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mt-4 shadow-xl"
                    onClick={() => scrollToSection('contact')}
                  >
                    Start Conversation
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;