
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Resiato from "@/assets/Resiato.jpg";
import lkccu from "@/assets/lkccu.jpg"
import reverse from "@/assets/reverse.jpg"

const Projects = () => {
  const projects = [
    {
      title: "A Church Fundraising Platform",
      description: "A fundraising platform with personalized card generation and other functionalities",
      tags: ["React", "Node.js", "TailwindCSS", "MPesa API"],
      image: lkccu,
      repoUrl: "https://github.com",
      liveUrl: "https://lkccu-fundraiser-card-generator.netlify.app/",
    },
    {
      title: "A Student Leadership Campaign Website",
      description: "A stunning and elegant website for an aspiring student leader",
      tags: ["TypeScript", "React", "Vite", "TailwindCSS"],
      image: Resiato,
      repoUrl: "https://github.com",
      liveUrl: "https://governor-tammary-resiato.netlify.app/",
    },
    {
      title: "A Discipleship Platform",
      description: "A AI-integrated and gamified christian discipleship platform.",
      tags: ["TypeScript", "APIs", "PostgreSQL", "Tailwind CSS", "Next.js"],
      image: reverse,
      repoUrl: "https://github.com",
      liveUrl: "#",
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="projects" className="section py-20 md:py-28">
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            <span className="font-semibold">Explore some of my most recent work.</span> Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={index}
            >
              <Card className="h-full overflow-hidden bg-secondary/30 border border-white/5 hover:border-primary/30 transition-all">
                <div className="aspect-video overflow-hidden bg-secondary/50">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-foreground/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
