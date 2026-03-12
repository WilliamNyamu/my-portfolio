
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Globe, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/index/advocacy.jpg",
    "/images/index/speech.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section py-20 md:py-28">
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">At the Intersection of Law, Tech & Policy</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">Championing AI Sovereignty in Africa</h3>
            <p className="text-foreground/80">
              As a tech innovator and law student, I am drawn to the larger discourse of the AI revolution in Africa—particularly the sovereignty of AI among African nations. Learning from history, Africa has often been treated as an extraction site, where raw materials power the transformation of other parts of the world while its own infrastructure lags behind. I ask: Should that trend persist? Should we allow systemic colonialism to continue in the digital era?
            </p>
            <p className="text-foreground/80">
              Having founded a community-based organisation to bridge the digital divide in rural Kenya, I saw firsthand how the lack of infrastructure can exclude people from benefitting in the digital economy. It made me realise that the future will not just be defined by algorithms, but by the decisions we make. I came to see law as a powerful tool to advocate for the democratisation of AI and digital tools for the betterment of African people.
            </p>
            <p className="text-foreground/80">
              In this 4th Industrial Revolution, AI is poised to contribute immensely to the transformation of economies and industries. However, that transformation can only happen when AI in Africa does not stand for <em>Advancing Inequality</em>, nor <em>African Imports</em>. There's the need for the glocalisation of AI frameworks, which at the moment are predominantly global north imaginaries.
            </p>
          </motion.div>

          <motion.div
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-panel rounded-2xl p-4 relative z-10">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="William Nyamu"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 p-8 glass-panel rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-6">
            My interest in emerging technology regulation, particularly AI Governance, drives my commitment to contribute to responsible AI Innovation, upholding the rule of law and championing the ethical use of AI in bettering the lives of African people. <span className="font-semibold text-primary">Africa is not just reacting to AI—it is shaping it.</span>
          </p>
          <Link 
            to="/journey" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-foreground rounded-lg transition-all glow-on-hover"
          >
            My Journey
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
