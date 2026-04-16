import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";

const journeyContent = [
  {
    title: "Google Workspace Support Analyst, Milimani Law Courts",
    badge: "Where it started",
    period: "Nov 2022 - Dec 2022",
    description: (
      <>
        <p>
          Volunteered as a <u>Google Workspace Support Analyst</u> at the High Court during third form, where I supported the <u>HR Department</u> in optimizing their data-driven workflows and digital operations.
        </p>
        <br />
        <p>
          This experience served as the <u>foundation of my journey</u> at the intersection of law and technology, sparking a deep interest in how digital tools can enhance efficiency within <u>legal institutions</u>.
        </p>
      </>
    ),
  },
  {
    title: "Founder, Starehe Coding Club, Starehe Boys' Centre ",
    badge: "Pioneering AI Literacy & Advocacy",
    period: "Aug 2022 - Nov 2023",
    image: "/images/index/advocacy.jpg",
    description: (
      <>
        <p>
          Through Starehe Boys' Centre, forged <u>strategic partnerships with Safaricom PLC and Kodris Africa</u> to conceptualize and launch one of the first AI and coding clubs in a Kenyan public high school, opening doors for students to engage with emerging technologies at an early age.
        </p>
        <br />
        <p>
          The initiative garnered <u>national recognition</u>, earning high commendation from <u>His Excellency, President Dr. William Ruto</u>, who lauded it as a landmark milestone in advancing education and technology in Kenya.
        </p>
        <br />
        <p>
          Building on this momentum, further championed the cause of early digital and AI literacy by taking the stage at the <u>2022 Jamhuri Tech Summit</u>, advocating for the integration of technology education into the foundations of Kenya's learning institutions.
        </p>
      </>
    ),
  },
  {
    title: "Founder, AIM (AI Mashinani)",
    badge: "Bridging the Digital Divide in Rural Kenya",
    period: "June 2024 - Present",
    description: (
      <>
        <p>
          Driven by a commitment to <u>bridging the digital divide</u> within Kenya, pioneered <u>AI Mashinani</u> — a grassroots initiative designed to bring AI and digital literacy directly to underserved communities.
        </p>
        <br />
        <p>
          Through strategic partnerships with <u>local polytechnics</u>, the program took root in <u>Kiambatha Village, Kirinyaga County</u>, creating a platform where technology education was made accessible to those far removed from the country's digital mainstream.
        </p>
        <br />
        <p>
          Spearheaded the organization of hands-on workshops that equipped <u>5 local teachers and approximately 60 students</u> with practical skills in <u>Generative AI, Google Workspace Tools, and Internet Safety & Data Privacy</u> — empowering both educators and learners to confidently navigate and harness the opportunities of an increasingly digital world.
        </p>
      </>
    ),
  },
  {
    title: "#HACK25 Champion, Indigitous",
    badge: "Redemptive Technology and Innovation",
    period: "Mar 2025 - Oct 2025",
    image: "/images/journey/hack25.jpg",
    description: (
      <>
        <p>
          Conceptualized and organized <u>#HACK25NAIROBI</u>, a high-energy 3-day AI hackathon that united over <u>120 students</u> alongside ministry and marketplace leaders — marking a remarkable <u>35% surge in turnout</u> from its predecessor, #HACK24 in 2024, reflecting the growing momentum and impact of the initiative.
        </p>
        <br />
        <p>
          To bring the vision to life, spearheaded fundraising efforts in collaboration with <u>YFC Kenya and Life Ministry</u>, successfully mobilizing over <u>$1,000</u> to cover hackathon logistics and ensure a seamless experience for all participants.
        </p>
        <br />
        <p>
          Demonstrating strong partnership-building acumen, led a team in securing collaborations with global organizations <u>YouVersion and The Chosen</u>, creating an environment that inspired innovation and culminated in <u>15 meaningful project submissions</u> from participants eager to apply AI in purposeful, real-world contexts.
        </p>
      </>
    ),
  },
  {
    title: "Publicity Lead, Marketing Students Association, UoN",
    badge: "Bridging Strategy with Creativity",
    period: "May 2025 - Present",
    image: "/images/journey/nyamu copy.jpg",
    description: (
      <>
        <p>
          As a law student serving on the <u>Executive Board of the Marketing Students Association (MSA)</u>, brought a unique interdisciplinary perspective to the role by bridging legal and technical insight with marketing strategy.
        </p>
        <br />
        <p>
          Drove a <u>15% boost in LinkedIn engagement and following</u> through intentional, strategic content creation and active community management that resonated with a growing audience.
        </p>
        <br />
        <p>
          Spearheaded a landmark collaboration with the <u>International School of Advertising and AIESEC</u>, culminating in a dynamic 3-day bootcamp that immersed students in the worlds of marketing and advertising.
        </p>
        <br />
        <p>
          Further strengthened MSA's digital footprint through hands-on website management and consistent social media engagement, efforts that translated into a tangible <u>10% growth in membership</u> and a more connected, vibrant student community.
        </p>
      </>
    ),
  },
  
  
  
];

const educationContent = [
  {
    title: "Bachelor of Laws, LLB",
    institution: "University of Nairobi",
    period: "Aug 2024 - April 2028",
    description: (
      <>
        <p>
          Pursuing a comprehensive legal education at Kenya's premier institution, building a strong foundation in  
          <u> law and different legal disciplines</u>. Engaging with diverse 
          legal disciplines to develop a well-rounded understanding of the Kenyan and global legal landscape.
        </p>
        <br />
        <p>
          Driven by a vision to bridge <u>Law, Policy, and Technology</u>, actively exploring the intersection 
          of legal frameworks and emerging technologies to drive meaningful, transformative impact in communities across Africa.
        </p>
      </>
    ),
  },
  {
    title: "ALX Backend & Pro-Dev Backend Engineering",
    institution: "ALX Africa",
    period: "Mar 2025 - Feb 2026",
    description: (
      <>
        <p>
          Developing deep <u>problem-solving skills</u> and technical training in developing and managing 
          <u>scalable and reliable backend systems</u> and infrastructure. Gained skills in advanced python programming, django framework, database management, and cloud computing, with a focus on building robust backend solutions that can support the demands of modern applications and services.
        </p>
      </>
    ),
  },
  {
    title: "ALX Artificial Intelligence and Career Essentials",
    institution: "ALX Africa",
    period: "Feb 2024 - April 2024",
    description: (
      <>
        <p>
          Gained understanding into <u>generative AI</u>, and leveraging it to improve workflow and 
          productivity. Learnt different <u>AI tools</u> and various <u>prompting techniques</u> in genAI.
        </p>
      </>
    ),
  },
  {
    title: "Full Stack Software Development",
    institution: "eMobilis Software Training Institute",
    period: "Jan 2024 - May 2024",
    description: (
      <>
        <p>
          Built a strong foundation in <u>full stack web development</u>, gaining hands-on experience with 
          both <u>frontend and backend technologies</u>. Developed practical skills in building responsive 
          user interfaces and robust server-side applications.
        </p>
      </>
    ),
  },
];

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
          </motion.div>

          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              <motion.div 
                className="flex flex-col items-center justify-center p-6 gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Growth Journey
                </span>
                <h1 className="font-bold text-4xl md:text-5xl text-center">My Journey</h1>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
                <p className="text-lg text-foreground/80 text-center max-w-xl">
                  The path that shaped my vision for AI governance and responsible innovation in Africa.
                </p>
              </motion.div>

              {journeyContent.map((item, index) => (
                <motion.div 
                  key={`content-${index}`} 
                  className="mb-10 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h2 className="bg-primary text-primary-foreground rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>

                  <p className={twMerge("text-xl font-semibold mb-2")}>
                    {item.title}
                  </p>
                  
                  <p className="text-sm text-foreground/60 mb-4">
                    {item.period}
                  </p>

                  <div className="text-sm prose prose-sm dark:prose-invert text-foreground/80">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-lg mb-6 object-cover w-full h-48 md:h-72"
                      />
                    )}
                    {item.description}
                  </div>
                </motion.div>
              ))}

              {/* Education Section */}
              <motion.div 
                className="mt-16 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center gap-3 mb-8">
                  <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Education
                  </span>
                  <h2 className="font-bold text-2xl md:text-3xl text-center">Academic Qualifications</h2>
                  <div className="w-16 h-1 bg-primary mx-auto"></div>
                </div>
              </motion.div>

              {educationContent.map((item, index) => (
                <motion.div 
                  key={`education-${index}`} 
                  className="mb-10 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h2 className="bg-emerald-500 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.institution}
                  </h2>

                  <p className={twMerge("text-xl font-semibold mb-2")}>
                    {item.title}
                  </p>
                  
                  <p className="text-sm text-foreground/60 mb-4">
                    {item.period}
                  </p>

                  <div className="text-sm prose prose-sm dark:prose-invert text-foreground/80">
                    {item.description}
                  </div>
                </motion.div>
              ))}

              <motion.div 
                className="flex justify-center mt-12 pb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-panel rounded-full px-6 py-3 text-foreground/60 text-sm font-medium">
                  🚀 The journey continues...
                </div>
              </motion.div>
            </div>
          </TracingBeam>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journey;
