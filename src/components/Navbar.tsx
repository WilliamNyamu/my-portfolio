
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-md" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold text-gradient-blue"
        >
          Dev<span className="text-foreground">Nyamu</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="nav-link text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.title}
            </motion.a>
          ))}
          <motion.a
            href="mailto:contact@example.com"
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-md border border-primary/30 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Get In Touch
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        className={`fixed top-[73px] right-0 h-screen w-[70vw] bg-background border-l border-white/10 flex flex-col md:hidden transition-transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-foreground/80 hover:text-foreground py-2 border-b border-white/10"
            >
              {link.title}
            </a>
          ))}
          <a
            href="mailto:billyliam08@gmail.com"
            className="mt-4 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-center rounded-md border border-primary/30"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
