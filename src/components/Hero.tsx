
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <motion.div 
              className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Full-Stack Developer
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Crafting digital <span className="text-gradient-blue">experiences</span> that matter
            </motion.h1>
            <motion.p 
              className="text-lg text-foreground/80 mt-6 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I'm a developer who combines technical expertise with design thinking to build exceptional digital products.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-foreground rounded-lg transition-all glow-on-hover"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              View My Work
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg border border-white/10 transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              About Me
            </a>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-panel rounded-2xl p-4 relative z-10">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary/50">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Code on screen" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <ArrowDown size={24} className="text-foreground/60" />
      </motion.div>
    </section>
  );
};

export default Hero;
