import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Share2, 
  Layout, 
  Heart, 
  CheckCircle2 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Creative & Content",
      icon: <Sparkles className="w-4 h-4" />,
      skills: ["Content Creation", "Canva", "CapCut", "Copywriting", "Caption Writing", "Visual Storytelling", "Poster Design", "Event Coverage"]
    },
    {
      category: "Media & Strategy",
      icon: <Share2 className="w-4 h-4" />,
      skills: ["Social Media Management", "Public Relations", "Content Planning", "Brand Communication", "Audience Engagement", "Content Calendar", "Media Coordination"]
    },
    {
      category: "Digital & Admin",
      icon: <Layout className="w-4 h-4" />,
      skills: ["Microsoft Office", "Google Suite", "Report Writing", "Data Entry", "Documentation", "Online Research", "Project Coordination"]
    },
    {
      category: "Core Soft Skills",
      icon: <Heart className="w-4 h-4" />,
      skills: ["Strategic Communication", "Creative Direction", "Adaptability", "Problem Solving", "Team Collaboration", "Multitasking", "Attention to Detail"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-[#FDFDFD] overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header: Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#DB87A4] mb-4 block">
            Competencies
          </span>
          <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-[#1A1A1A]">
            Professional <span className="font-serif italic text-[#DB87A4]">Expertise.</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            className="h-[1px] bg-[#E6E6FA] mx-auto mt-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="group relative"
            >
              {/* The "Flash" Background Glow */}
              <div className="absolute inset-0 bg-[#E6E6FA]/10 blur-3xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Card Body */}
              <div className="relative h-full bg-white border border-slate-100 p-10 rounded-[2.5rem] transition-all duration-500 hover:border-[#DB87A4]/30 hover:shadow-[0_30px_60px_-15px_rgba(219,135,164,0.08)]">
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F5] flex items-center justify-center text-[#DB87A4] group-hover:bg-[#DB87A4] group-hover:text-white transition-all duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#1A1A1A]">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default"
                    >
                      <Badge 
                        variant="secondary"
                        className="bg-white text-slate-500 border border-slate-100 px-4 py-1.5 text-[11px] font-medium rounded-full group-hover:bg-[#E6E6FA]/40 group-hover:text-[#1A1A1A] transition-all duration-300"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-2 text-[#DB87A4] opacity-40" />
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                
                {/* Visual Accent: Minimal numbering */}
                <div className="absolute top-8 right-10 pointer-events-none">
                   <span className="text-6xl font-serif italic text-[#DB87A4]/5 select-none">
                    0{catIndex + 1}
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="mt-32 flex justify-center">
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#E6E6FA]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;