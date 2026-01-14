import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import modernStairs from "@/assets/modern-stairs.jpg";
import architectureDetail from "@/assets/architecture-detail.jpg";
import projectWardrobe from "@/assets/project-wardrobe.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";

const projects = [
  {
    image: projectKitchen,
    title: "Moderne Küche",
    category: "Küchenmontage",
    description: "Komplette Kücheninstallation in einem Neubau",
  },
  {
    image: modernStairs,
    title: "Glastreppe",
    category: "Treppenbau",
    description: "Eichenholztreppe mit Glasgeländer",
  },
  {
    image: projectWardrobe,
    title: "Einbauschrank",
    category: "Möbelmontage",
    description: "Massgefertigter Einbauschrank für Schlafzimmer",
  },
  {
    image: architectureDetail,
    title: "Altbausanierung",
    category: "Innenausbau",
    description: "Renovierung und Innenausbau eines historischen Gebäudes",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-cream/50">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-medium text-sm tracking-wider uppercase rounded-full mb-4">
            Referenzen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Unsere Arbeit spricht für sich
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Jedes Projekt erzählt eine Geschichte. Hier zeigen wir Ihnen, 
            worauf wir stolz sind.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden bg-card shadow-lg"
              >
                <div className="image-zoom aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Warm Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/95 via-wood-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                
                {/* Content on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold font-sans">
                    {project.title}
                  </h3>
                  <p className="text-white/85 text-sm mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Always visible label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-white/85 text-sm font-medium">{project.category}</span>
                  <h3 className="text-white text-xl font-semibold font-sans mt-1">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
