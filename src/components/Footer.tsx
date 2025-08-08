
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <a href="#" className="text-xl font-bold text-gradient-blue">
              Dev<span className="text-foreground">Will</span>
            </a>
            <p className="text-sm text-foreground/60 mt-4 max-w-md">
              Near Full-stack developer passionate about creating beautiful, functional, 
              and user-friendly applications that solve real-world problems.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/WilliamNyamu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-foreground/60 hover:text-foreground hover:bg-primary/20 transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/william-nyamu-kiura/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-foreground/60 hover:text-foreground hover:bg-primary/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-foreground/60 hover:text-foreground hover:bg-primary/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:billyliam08@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-foreground/60 hover:text-foreground hover:bg-primary/20 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
            
            <p className="text-sm text-foreground/40">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
