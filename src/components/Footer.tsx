import { Sparkles, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-[#FDFDFD] border-t border-slate-50 relative overflow-hidden">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#E6E6FA]/20 blur-[60px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Brand Signature */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-sm font-bold tracking-[0.3em] text-[#1A1A1A] uppercase">
              Taghreed <span className="font-serif italic font-light text-[#DB87A4]">G.A.</span>
            </div>
            <p className="text-[9px] tracking-[0.2em] text-slate-400 uppercase font-medium">
              © {currentYear} Personal Portfolio. All rights reserved.
            </p>
          </div>

          {/* Location / Status Hint */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="h-[1px] w-6 bg-[#E6E6FA]" />
            <div className="flex items-center gap-2">
              <Globe size={10} className="text-[#DB87A4]" />
              <p className="text-[9px] tracking-[0.3em] font-bold text-slate-400 uppercase">
                Beirut, Lebanon — Available Worldwide
              </p>
            </div>
            <div className="h-[1px] w-6 bg-[#E6E6FA]" />
          </div>

          {/* Credits / Philosophy */}
          <div className="flex items-center gap-2 group cursor-default">
            <span className="text-[9px] tracking-[0.2em] text-slate-400 uppercase font-medium">
              Designed with
            </span>
            <Sparkles 
              size={12} 
              className="text-[#DB87A4] transition-transform duration-700 group-hover:rotate-180" 
              strokeWidth={1.5}
            />
            <span className="text-[9px] tracking-[0.2em] text-slate-400 uppercase font-medium">
              Perspective
            </span>
          </div>

        </div>

        {/* Bottom Accent Line */}
        <div className="mt-12 flex justify-center">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#E6E6FA] to-transparent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;