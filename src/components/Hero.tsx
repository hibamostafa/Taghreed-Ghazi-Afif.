import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  FileDown, 
  BarChart3,
  Linkedin,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import cvFile from "@/assets/Taghreed Ghazi Afif_CV.pdf";
import profileImg from "@/assets/Profile.png";
import reference from "@/assets/Reference.pdf";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const reveal = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.1 * i, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#FDFDFD] py-20 lg:py-0"
    >
      {/* 1. THE FLASH: Soft ambient light background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-tr from-[#E6E6FA]/20 via-[#DB87A4]/10 to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content - Left Side (Span 7) */}
          <motion.div 
className="lg:col-span-7 order-2 lg:order-1 mt-12 lg:mt-20"          >
            <div className="space-y-9 max-w-lg">
              {/* Minimal Label */}
              <motion.div 
                custom={0}  initial="hidden" animate="visible"
                className="flex items-center gap-3"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#DB87A4]">
                  Media & Public Relations
                </span>
              </motion.div>

              {/* Classic Typography */}
              <motion.h1 
                custom={1}  initial="hidden" animate="visible"
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#1A1A1A] leading-[1.1]"
              >
                Elevating <br />
                <span className="font-serif italic text-[#DB87A4]">Perspective</span>
              </motion.h1>

              {/* Refined Bio */}
              <motion.div 
                custom={2}  initial="hidden" animate="visible"
                className="space-y-6"
              >
                <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed max-w-md">
                  <span className="font-medium text-black">Taghreed Ghazi Afif.</span> Specialist in high-impact 
                  narratives and strategic communication for the modern digital landscape.
                </p>
                
                {/* Minimalist Meta Tags */}
                <div className="flex gap-10 pt-4 border-t border-slate-100 w-fit">
                  {[
                    { label: "Based in", value: "Lebanon" },
                    { label: "Expertise", value: "PR Strategy" },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-[9px] uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                      <p className="text-xs font-bold text-black">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CLEAN CTA SECTION - Updated Buttons */}
           <motion.div 
  custom={3} 
  initial="hidden" 
  animate="visible"
  className="flex flex-wrap items-center gap-4 pt-10"
>
  {/* 1. LinkedIn - The Bold "Black & Pink" */}
  <Button 
    asChild
    className="group h-12 px-8 rounded-xl bg-black text-white hover:bg-[#DB87A4] border-2 border-black hover:border-[#DB87A4] transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.2em] flex-1 min-w-[140px]"
  >
    <a href="https://www.linkedin.com/in/taghreed-afif-29402621b/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
      <Linkedin size={14} />
      LinkedIn
    </a>
  </Button>
<Button 
  asChild
  className="group h-12 px-8 rounded-xl bg-transparent text-black border-2 border-[#DB87A4] hover:bg-[#DB87A4] hover:text-white transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.2em] flex-1 min-w-[140px]"
>
  <a 
     href={reference} 
  download="References_Taghreed_Afif.pdf"
  className="flex items-center justify-center gap-2"
  >
    <FileText 
      size={14} 
      className="text-[#DB87A4] group-hover:text-white transition-colors duration-500" 
    />
    References
  </a>
</Button>
  {/* 2. CV Dossier - The "Pink & White" (Very Noticeable) */}
  <Button 
    asChild
    className="group h-12 px-8 rounded-xl bg-[#DB87A4] text-white hover:bg-black transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.2em] flex-1 min-w-[140px] shadow-sm"
  >
    <a href={cvFile} download className="flex items-center justify-center gap-2">
      <FileDown size={14} className="group-hover:bounce" />
      Resume
    </a>
  </Button>

  {/* 3. References - The "Beige & Black" (Sophisticated Contrast) */}
 
</motion.div>
            </div>
          </motion.div>

          {/* Image Content - Right Side (Span 5) */}
            <div className="mt-8 lg:col-span-5 order-1 lg:order-2 relative flex justify-center items-center h-full min-h-[200px]">            {/* The Main Pink Circle */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute w-[50%] md:w-[40%] lg:w-[90%] aspect-square bg-gradient-to-br from-[#E996B8] to-[#FF499E] rounded-full shadow-2xl shadow-pink-200/20"
            />

            {/* Main Portrait */}
            <motion.div style={{ y: springY }} className="relative z-0 w-full flex justify-center">
              <img 
                src={profileImg} 
                alt="Taghreed Ghazi Afif" 
                className="w-full max-w-[600px] lg:max-w-none object-contain drop-shadow-xl"
              />

              {/* Floating Card 1: Social Analytics */}
           <motion.div 
  animate={{ y: [0, -12, 0] }} // Slightly tighter movement for a more stable feel
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-10 -left-4 lg:-left-12 bg-[#F5F5F0]/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 flex items-center gap-4 min-w-[180px]"
>
  {/* The Icon Container - Soft Pink Glow */}
  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm border border-[#DB87A4]/20">
    <BarChart3 size={20} className="text-[#DB87A4]" />
  </div>

  <div className="flex flex-col gap-0.5">
    {/* Heading with tight tracking and black/grey contrast */}
    <span className="text-[13px] font-black uppercase tracking-[0.15em] text-black">
      Growth
    </span>
    
    {/* Subtext - Using your Pink color as a highlight */}
    <span className="text-[9px] font-bold uppercase tracking-widest text-[#DB87A4]/70">
      Strategic Impact
    </span>
  </div>

  {/* Subtle "Light Reflection" effect */}
  <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
</motion.div>

              {/* Floating Card 2: Engagement Team */}
            <motion.div 
  animate={{ y: [0, 15, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
  className="absolute bottom-10 lg:bottom-20 -right-4 lg:-right-8 bg-[#F5F5F0]/80 backdrop-blur-xl p-5 lg:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50"
>
  {/* Modernized Label */}
  <p className="text-[10px] font-black text-black mb-4 uppercase tracking-[0.2em]">
    Active Engagement
  </p>

  <div className="flex items-center">
    <div className="flex -space-x-3 transition-space duration-300 hover:-space-x-1">
      {[1, 2, 3, 4].map((i) => (
        <div 
          key={i} 
          className="w-9 h-9 lg:w-11 lg:h-11 rounded-full border-[3px] border-[#F5F5F0] overflow-hidden shadow-sm"
        >
          <img 
            src={`https://i.pravatar.cc/100?u=media${i}`} 
            alt="engagement" 
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      ))}
      
      {/* The "+2k" Counter - Pink & Black style */}
      <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-full border-[3px] border-[#F5F5F0] bg-black flex items-center justify-center text-white text-[9px] font-black tracking-tighter">
        <span className="text-[#DB87A4]">+</span>2K
      </div>
    </div>
    
    {/* Subtle indicator dot */}
    <div className="ml-4 flex flex-col">
       <div className="flex gap-1">
          {[1,2,3].map((dot) => (
            <div key={dot} className="w-1 h-1 rounded-full bg-[#DB87A4]" />
          ))}
       </div>
    </div>
  </div>
</motion.div>
            </motion.div>

            {/* Decorative Orbs */}
            <div className="absolute top-0 right-10 w-8 h-8 bg-[#E0D7FF] rounded-full blur-[2px] animate-pulse" />
            <div className="absolute bottom-10 left-10 w-6 h-6 bg-[#FFD6E8] rounded-full blur-[2px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;