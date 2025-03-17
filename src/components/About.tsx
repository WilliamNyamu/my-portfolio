
import { motion } from "framer-motion";
import { Code, Layout, Database, Terminal } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: <Layout className="w-5 h-5" />, description: "Crafting responsive and intuitive interfaces with React, Vue, and modern CSS" },
    { name: "Backend Development", icon: <Database className="w-5 h-5" />, description: "Building robust APIs and services using Node.js, Express, and MongoDB" },
    { name: "Web Design", icon: <Code className="w-5 h-5" />, description: "Creating beautiful, accessible, and performance-focused web experiences" },
    { name: "DevOps", icon: <Terminal className="w-5 h-5" />, description: "Setting up CI/CD pipelines and deploying applications to cloud platforms" },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Development Journey</h2>
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
            <h3 className="text-2xl font-bold">Who am I</h3>
            <p className="text-foreground/80">
              I'm a passionate full-stack developer with a strong focus on creating 
              clean, efficient, and user-friendly applications. With 5+ years of 
              experience in web development, I've worked on a diverse range of projects 
              from e-commerce platforms to real-time analytics dashboards.
            </p>
            <p className="text-foreground/80">
              My approach combines technical expertise with an eye for design, ensuring 
              that the applications I build are not only functional but also visually 
              appealing and intuitive to use. I'm constantly learning and exploring new 
              technologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-3 bg-secondary/50 rounded-lg">
                <span className="block text-3xl font-bold text-primary">5+</span>
                <span className="text-sm text-foreground/80">Years Experience</span>
              </div>
              <div className="text-center p-3 bg-secondary/50 rounded-lg">
                <span className="block text-3xl font-bold text-primary">40+</span>
                <span className="text-sm text-foreground/80">Projects Completed</span>
              </div>
            </div>
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
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Developer coding" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
          </motion.div>
        </div>

        <div className="mt-24">
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-secondary/30 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all"
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={index}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-medium mb-2">{skill.name}</h4>
                <p className="text-sm text-foreground/70">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <motion.div 
            className="p-6 glass-panel rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="marquee-container py-4 overflow-hidden">
              <div className="marquee-content inline-flex space-x-8">
                {[
                  "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB",
                  "HTML5", "CSS3", "Tailwind CSS", "Git", "Docker", "AWS",
                  "Redux", "GraphQL", "Next.js", "PostgreSQL"
                ].map((tech, index) => (
                  <span key={index} className="text-sm font-mono bg-secondary/50 px-3 py-1 rounded-md">{tech}</span>
                ))}
                {[
                  "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB",
                  "HTML5", "CSS3", "Tailwind CSS", "Git", "Docker", "AWS",
                  "Redux", "GraphQL", "Next.js", "PostgreSQL"
                ].map((tech, index) => (
                  <span key={`dup-${index}`} className="text-sm font-mono bg-secondary/50 px-3 py-1 rounded-md">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
