import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Journey = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Growth Journey
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                The path that shaped my vision for AI governance and responsible innovation in Africa.
              </p>
            </div>
          </motion.div>

          {/* Timeline / Journey Content - Placeholder for user to fill */}
          <motion.div
            className="max-w-3xl mx-auto space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Journey content will be added here */}
            <div className="glass-panel rounded-xl p-8 text-center">
              <p className="text-foreground/60 italic">
                Journey milestones coming soon...
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journey;
