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
    location: "Zürich",
  },
  {
    image: modernStairs,
    title: "Glastreppe",
    category: "Treppenbau",
    description: "Eichenholztreppe mit Glasgeländer",
    location: "Winterthur",
  },
  {
    image: projectWardrobe,
    title: "Einbauschrank",
    category: "Möbelmontage",
    description: "Massgefertigter Einbauschrank für Schlafzimmer",
    location: "Uster",
  },
  {
    image: architectureDetail,
    title: "Altbausanierung",
    category: "Innenausbau",
    description: "Renovierung und Innenausbau eines historischen Gebäudes",
    location: "Dübendorf",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-cream/50">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-4">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-accent/10 text-accent font-medium text-xs sm:text-sm tracking-wider uppercase rounded-full mb-3 sm:mb-4">
            Referenzen
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
            Projekte im Raum Zürich
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Jedes Projekt erzählt eine Geschichte. Hier zeigen wir Ihnen, 
            worauf wir stolz sind.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-card shadow-lg"
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
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-white/70 text-xs">•</span>
                    <span className="text-white/70 text-xs">{project.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold font-sans">
                    {project.title}
                  </h3>
                  <p className="text-white/85 text-xs sm:text-sm mt-1 sm:mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Always visible label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white/85 text-xs font-medium">{project.category}</span>
                    <span className="text-white/60 text-xs">• {project.location}</span>
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-semibold font-sans">
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
