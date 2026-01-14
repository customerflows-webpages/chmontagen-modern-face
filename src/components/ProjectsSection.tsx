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
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Unsere Projekte
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Einblick in unsere Arbeit
          </h2>
          <p className="text-muted-foreground text-lg">
            Jedes Projekt ist einzigartig. Hier zeigen wir Ihnen eine Auswahl 
            unserer erfolgreich abgeschlossenen Arbeiten.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-card shadow-lg"
              >
                <div className="image-zoom aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-accent text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 font-sans">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Always visible label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-white/80 text-sm">{project.category}</span>
                  <h3 className="text-white text-lg font-semibold font-sans">
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
