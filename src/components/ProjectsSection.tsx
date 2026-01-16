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
    location: "Zug",
  },
  {
    image: projectWardrobe,
    title: "Einbauschrank",
    category: "Möbelmontage",
    description: "Massgefertigter Einbauschrank für Schlafzimmer",
    location: "Zürichsee",
  },
  {
    image: architectureDetail,
    title: "Renovierung",
    category: "Innenausbau",
    description: "Innenausbau eines historischen Gebäudes",
    location: "Bern",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-4 block">
              Referenzen
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ausgewählte Projekte
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ein Einblick in unsere Arbeit. Präzision und Qualität in jedem Detail.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-sm overflow-hidden bg-white hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold tracking-wider uppercase text-primary">
                      {project.category}
                    </span>
                    <span className="text-muted-foreground text-xs">•</span>
                    <span className="text-muted-foreground text-xs">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold font-sans text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
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
