import { Target, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Overview = () => {
  const highlights = [
    {
      icon: MessageSquare,
      title: "Public Relations",
      description: "Building bridges between brands and communities through executive-level communication."
    },
    {
      icon: Target,
      title: "Strategic Content",
      description: "Developing data-informed narratives that improve audience engagement across digital platforms."
    },
    {
      icon: Sparkles,
      title: "Creative Direction",
      description: "Blending visual storytelling with brand positioning to elevate market perspective."
    }
  ];

  const competencies = [
    "Strategic Planning", "Community Engagement", "Brand Positioning", 
    "Stakeholder Management", "Event Coordination", "Campaign Execution", 
    "Content Strategy", "Visual Storytelling", "Performance Analysis"
  ];

  return (
    <section id="about" className="py-32 px-6 bg-[#FDFDFD] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#E6E6FA]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#DB87A4] mb-4 block">
            Professional Profile
          </span>
          <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-[#1A1A1A]">
            Architect of <span className="font-serif italic text-[#DB87A4]">Narratives.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Motivated media and marketing communication professional with over 
              <span className="text-[#1A1A1A] font-medium"> three years of hands-on experience</span> in 
              content creation, social media management, and administrative coordination.
            </p>

            <p className="text-lg text-slate-500 font-light leading-relaxed">
              I bring a solid public relations background, delivering clear visual content while 
              consistently improving audience engagement. My experience spans supporting 
              municipalities, cultural organizations, and digital campaigns through effective 
              collaboration across diverse teams.
            </p>

            {/* Added Education Section */}
            <div className="pt-4">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">Education</p>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                Bachelor’s Degree in Advertising and Marketing Communication | <span className="text-[#1A1A1A] font-medium">Lebanese University</span> — July 2026
              </p>
            </div>

            {/* Competency Tag Cloud */}
            <div className="pt-4">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-6">Core Competencies</p>
              <div className="flex flex-wrap gap-3">
                {competencies.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-full border border-slate-100 bg-white text-[11px] font-medium text-slate-600 hover:border-[#DB87A4] hover:text-[#DB87A4] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Highlight Cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-slate-50 hover:border-[#E6E6FA] hover:shadow-[0_20px_40px_-15px_rgba(230,230,250,0.5)] transition-all duration-500"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#FAF7F5] flex items-center justify-center transition-all duration-500 group-hover:bg-[#DB87A4] group-hover:text-white text-[#DB87A4]">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-[#1A1A1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;