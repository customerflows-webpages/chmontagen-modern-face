import AnimatedSection from "./AnimatedSection";
import { 
  Hammer, 
  Layers, 
  Home, 
  Building2 
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Montage",
    description:
      "Präzise Montagearbeiten für unterschiedlichste Holzbauprojekte – von Bauelementen bis zu kompletten Holzstrukturen. Professionelle Möbelmontagen, millimetergenau, sauber und zuverlässig.",
  },
  {
    icon: Layers,
    title: "Paneelbau",
    description:
      "Individuelle Paneelsysteme für Wände, Decken und Fassaden. Modern, hochwertig und optimal auf dein Projekt abgestimmt.",
  },
  {
    icon: Home,
    title: "Innenausbau",
    description:
      "Hochwertiger Innenausbau aus Holz: Verkleidungen, Bodenbeläge, Raumelemente und komplette Ausbaukonzepte – warm, modern und dauerhaft.",
  },
  {
    icon: Building2,
    title: "Fassadenbau",
    description:
      "Robuste und stilvolle Holzfassaden, die sowohl schützen als auch architektonisch überzeugen. Witterungsbeständig, langlebig und ästhetisch.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-cream/50">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-4">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-accent/10 text-accent font-medium text-xs sm:text-sm tracking-wider uppercase rounded-full mb-3 sm:mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
            Vertrauen, Kreativität & Qualität
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Von der Planung bis zur Ausführung begleiten wir dein Projekt mit Fachwissen, 
            Effizienz und einem sicheren Blick für Details.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.08}>
              <div className="service-card h-full group !p-5 sm:!p-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent/15 to-wood-light/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-accent/25 group-hover:to-wood-light/30 transition-all duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 font-sans">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
