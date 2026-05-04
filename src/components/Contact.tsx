import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ArrowUpRight, 
  Instagram,
  Sparkles
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Digital Correspondence",
      value: "amatourytaghreed@gmail.com",
      href: "mailto:amatourytaghreed@gmail.com"
    },
    {
      icon: Phone,
      label: "Direct Line",
      value: "+961 76 703 146 ",
      href: "tel:+96176703146 "
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lebanon",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-[#FDFDFD] relative overflow-hidden">
      {/* Background Aesthetic: Soft Lavender Flash */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#E6E6FA]/20 blur-[120px] rounded-full -mb-20 -mr-20 pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#DB87A4] mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1A1A1A]">
            Elevating <span className="font-serif italic text-[#DB87A4]">Conversations.</span>
          </h2>
          <p className="mt-6 text-slate-500 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Currently accepting new opportunities in Media and Public Relations. 
            Let’s discuss how we can refine your brand’s narrative together.
          </p>
        </motion.div>

        {/* Contact Method Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center mb-6 group-hover:border-[#DB87A4] group-hover:bg-[#FAF7F5] transition-all duration-500">
                  <info.icon className="w-5 h-5 text-slate-400 group-hover:text-[#DB87A4] transition-colors" strokeWidth={1.5} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300 mb-2">
                  {info.label}
                </span>
                {info.href ? (
                  <a href={info.href} className="text-sm font-medium text-[#1A1A1A] hover:text-[#DB87A4] transition-colors underline-offset-8 hover:underline">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-[#1A1A1A]">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA: The Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#DB87A4] to-[#E6E6FA] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
          
          <div className="relative bg-white border border-slate-50 p-12 md:p-20 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.03)] text-center overflow-hidden">
            
            {/* Minimal Decorative Sparkle */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-10">
              <Sparkles size={120} strokeWidth={0.5} className="text-[#DB87A4]" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-light text-[#1A1A1A] mb-6 tracking-tight">
                Ready to start a <br className="hidden md:block" />
                <span className="font-serif italic text-[#DB87A4]">new project?</span>
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
                <Button 
                  asChild
                  className="h-16 px-10 bg-[#1A1A1A] text-white hover:bg-[#DB87A4] rounded-full transition-all duration-500 text-[10px] font-bold uppercase tracking-widest group"
                >
                  <a href="mailto:amatourytaghreed@gmail.com" className="flex items-center gap-3">
                    Inquire Directly
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>

                {/* Social Hub */}
                <div className="flex items-center gap-6">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/taghreed-afif/", label: "LinkedIn" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href} 
                      target="_blank" 
                      className="text-slate-300 hover:text-[#DB87A4] transition-colors flex flex-col items-center gap-2"
                    >
                      <social.icon size={20} strokeWidth={1.5} />
                      <span className="text-[8px] font-black uppercase tracking-widest">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-24 text-center">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-300">
            © 2024 Taghreed Ghazi Afif — All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;