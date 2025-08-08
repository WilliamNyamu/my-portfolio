
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Safari3 from "@/assets/safari3.png";
import Safari from "@/assets/safari.png";
import Safari2 from "@/assets/safari2.png";
import Safari4 from "@/assets/safari4.png";
import Keja1 from "@/assets/keja1.png";
import Keja2 from "@/assets/keja2.png";
import Keja3 from "@/assets/keja3.png";
import CU1 from "@/assets/cu1.png";
import CU2 from "@/assets/cu2.png";
import CU3 from "@/assets/cu3.png";
import CU4 from "@/assets/cu4.png";
import AI1 from "@/assets/ai1.png";
import AI2 from "@/assets/ai2.png";
import AI4 from "@/assets/ai4.png";
import Resiato from "@/assets/Resiato.jpg";
import lkccu from "@/assets/lkccu.jpg";
import reverse from "@/assets/reverse.jpg";
import me from "@/assets/me.jpg";
import William from "@/assets/William.jpg";

const Projects = () => {
  const projects = [
    {
      title: "SafariKenya Travel Website",
      description: "A comprehensive travel platform featuring personalized itineraries, booking management, and local experiences for travelers in Kenya.",
      tags: ["React", "Node.js", "TailwindCSS", "MPesa API", "Admin Dashboard"],
      images: [ Safari, Safari2, Safari3, Safari4], // Multiple screenshots
      repoUrl: "https://github.com/WilliamNyamu/kenya-travel-elegance",
      liveUrl: "https://safari-travel.netlify.app/",
      status: "Live"
    },
    {
      title: "KejaConnect Website",
      description: "A rental website for connecting landlords and tenants in Kenya.",
      tags: ["React", "Node.js", "TailwindCSS", "MPesa API", "MongoDB"],
      images: [Keja1, Keja2, Keja3], // Multiple screenshots
      repoUrl: "https://github.com/WilliamNyamu/rent-ready-showcase",
      liveUrl: "https://kejaconnect.netlify.app/",
      status: "Live"
    },
    {
      title: "AI-powered e-learning platform",
      description: "An e-learning platform designed to train and equip rural youth with AI skills and literacy.",
      tags: ["AI", "React", "Vite", "TailwindCSS", "Student Dashboard"],
      images: [AI1, AI2, AI4], // Multiple screenshots
      repoUrl: "https://github.com/WilliamNyamu/AIM",
      liveUrl: "https://ai-mashinani-dev.web.app/",
      status: "In development"
    },
    {
      title: "Church Web Application",
      description: "An innovative Christian discipleship platform integrating AI capabilities with gamification elements to enhance spiritual growth and community engagement.",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "OpenAI API", "TailwindCSS", "Prisma"],
      images: [CU1, CU2, CU3, CU4], // Multiple screenshots
      repoUrl: "https://github.com/WilliamNyamu/lkccu",
      liveUrl: "https://lkccu-33af2.web.app/",
      status: "Live"
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

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={index}
            >
              <Card className="w-full overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Project Image Carousel - Takes full width on mobile, half on desktop */}
                  <div className="relative order-1 lg:order-1 p-4">
                    <Carousel className="w-full">
                      <CarouselContent className="ml-0">
                        {project.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex} className="pl-0">
                            <div className="aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-muted rounded-lg shadow-md">
                              <img 
                                src={image} 
                                alt={`${project.title} screenshot ${imageIndex + 1}`} 
                                className="w-full h-full object-contain lg:object-cover transition-transform duration-300 group-hover:scale-105 bg-white"
                                loading="lazy"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/95 hover:bg-background border-border/50 hover:border-primary/50 h-10 w-10 shadow-lg" />
                          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/95 hover:bg-background border-border/50 hover:border-primary/50 h-10 w-10 shadow-lg" />
                        </>
                      )}
                    </Carousel>
                    
                    {/* Project Status Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge 
                        variant={project.status === "Live" ? "default" : "secondary"}
                        className={`text-sm font-medium px-3 py-1 shadow-md ${
                          project.status === "Live" 
                            ? "bg-green-500/20 text-green-600 border-green-500/30" 
                            : "bg-orange-500/20 text-orange-600 border-orange-500/30"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Image Counter */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-6 right-6">
                        <Badge variant="secondary" className="bg-background/95 text-foreground shadow-md">
                          {project.images.length} images
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Project Content - Takes full width on mobile, half on desktop */}
                  <div className="order-2 lg:order-2 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                        {project.description}
                      </CardDescription>
                    </div>

                    {/* Essential Integrations/Tags */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider">Essential Integrations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="outline"
                            className="text-sm font-mono bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors px-3 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="flex-1 group/btn border-border/50 hover:border-primary/50 h-12"
                      >
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3"
                        >
                          <Github size={20} className="group-hover/btn:text-primary transition-colors" />
                          <span className="font-medium">View Code</span>
                        </a>
                      </Button>
                      
                      <Button
                        asChild
                        size="lg"
                        className="flex-1 bg-primary hover:bg-primary/90 h-12"
                        disabled={project.liveUrl === "#"}
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3"
                        >
                          <ExternalLink size={20} />
                          <span className="font-medium">Live Demo</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
