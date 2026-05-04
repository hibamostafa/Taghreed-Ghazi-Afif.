import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Star } from "lucide-react";

const ProfessionalJourney = () => {
  const experiences = [
    {
      year: "2025 — Present",
      role: "Executive Assistant",
      company: "Union of Municipalities",
      location: "Arqoub & Harf",
      desc: "Direct reporting to the president, managing administrative workflows and high-level organizational media presence.",
      color: "#DB87A4",
    },
    {
      year: "2023 — Present",
      role: "Media Officer",
      company: "Arkoub Dev. Organization",
      location: "Regional",
      desc: "Dynamic digital content creation highlighting community projects and regional initiatives.",
      color: "#E6E6FA",
    },
    {
      year: "2025 (Oct — Dec)",
      role: "Digital Marketing Intern",
      company: "WeARe Media Agency",
      location: "Beirut",
      desc: "Formulated strategic content plans for 6+ active pages and participated in promotional filming sessions.",
      color: "#DB87A4",
    },
    {
      year: "2022 — 2025",
      role: "Social Media Coordinator",
      company: "Municipality of Barouk",
      location: "Barouk",
      desc: "Managed primary digital channels, executed professional shooting, and produced municipal narratives.",
      color: "#E6E6FA",
    },
    {
      year: "2022 — Present",
      role: "Social Media Manager",
      company: "Artist Salim Assaf Pages",
      location: "Remote",
      desc: "Managing fan engagement and promotional reels to maximize follower retention and page visibility.",
      color: "#DB87A4",
    }
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedExperiences = [...experiences, ...experiences];

  return (
    <section id="experience" className="relative py-24 bg-[#FDFDFD] overflow-hidden">
      {/* Section Header - Exactly same design */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#DB87A4]">
            Career Timeline
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1A1A1A]">
            Professional <span className="font-serif italic text-[#DB87A4]">Experience.</span>
          </h2>
        </motion.div>
      </div>

      {/* AUTOMATIC MARQUEE CONTAINER */}
      <div className="flex overflow-hidden group">
        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }} // Moves half the total width (the first set of cards)
          transition={{ 
            duration: 40, // Adjust this number to change speed (higher = slower/more readable)
            ease: "linear", 
            repeat: Infinity 
          }}
          // Pauses the animation on hover for readability
          style={{ width: "fit-content" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedExperiences.map((exp, index) => (
            <div 
              key={index}
              className="relative flex-shrink-0 w-[300px] md:w-[450px]"
            >
              {/* Year Indicator */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                  {exp.year}
                </span>
                <div className="h-[1px] flex-grow bg-slate-100" />
              </div>

              {/* Minimal Card - Exactly same design */}
              <div className="group/card relative p-10 bg-white border border-slate-50 hover:border-[#E6E6FA] transition-all duration-500 rounded-3xl overflow-hidden shadow-sm hover:shadow-md">
                {/* Background Decor */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-10 rounded-full -mr-10 -mt-10"
                  style={{ backgroundColor: exp.color }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover/card:text-[#DB87A4] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-slate-400 flex items-center gap-2">
                      <Briefcase size={14} /> {exp.company}
                    </p>
                  </div>

                  <p className="text-slate-500 font-light text-sm leading-relaxed min-h-[60px]">
                    {exp.desc}
                  </p>

                  <div className="flex items-center gap-4 pt-4 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Closing Card / Education Hint (Duplicated too) */}
          <div className="flex-shrink-0 w-[300px] flex items-center justify-center border-2 border-dashed border-slate-100 rounded-3xl mx-6 opacity-40">
            <div className="text-center space-y-2 px-8">
               <Star className="mx-auto text-[#DB87A4]" size={24} strokeWidth={1} />
               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                 Continually Evolving
               </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Progress Indicator - Now static to show movement is automatic */}
      <div className="container mx-auto px-6 mt-16 flex justify-between items-center opacity-30">
        <div className="h-[1px] flex-grow bg-slate-100 mr-8" />
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">
          Hover to pause & read
        </p>
      </div>
    </section>
  );
};

export default ProfessionalJourney;