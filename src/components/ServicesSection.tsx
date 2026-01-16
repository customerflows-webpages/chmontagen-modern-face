import AnimatedSection from "./AnimatedSection";
import {
  Hammer,
  Layers,
  Home,
  Building2,
  BoxSelect,
  Grid
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Montage",
    description:
      "Präzise Montagearbeiten für unterschiedlichste Holzbauprojekte – von Bauelementen bis zu kompletten Holzstrukturen.",
  },
  {
    icon: BoxSelect,
    title: "Möbelmontagen",
    description:
      "Professionelle Möbelmontagen, millimetergenau, sauber und zuverlässig für Privat- und Geschäftskunden.",
  },
  {
    icon: Layers,
    title: "Elementbau",
    description:
      "Montage von vorgefertigten Elementen. Effizient, passgenau und termingerecht.",
  },
  {
    icon: Grid,
    title: "Paneelbau",
    description:
      "Individuelle Paneelsysteme für Wände, Decken und Fassaden. Modern, hochwertig und optimal abgestimmt.",
  },
  {
    icon: Building2,
    title: "Fassadenbau",
    description:
      "Robuste und stilvolle Holzfassaden, die sowohl schützen als auch architektonisch überzeugen.",
  },
  {
    icon: Home,
    title: "Innenausbau",
    description:
      "Hochwertiger Innenausbau aus Holz: Verkleidungen, Bodenbeläge und komplette Ausbaukonzepte.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <AnimatedSection className="mb-16">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-4 block">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Vertrauen, Kreativität & Qualität.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Von der Planung bis zur Ausführung begleiten wir dein Projekt mit Fachwissen,
              Effizienz und einem sicheren Blick für Details.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.08}>
              <div className="group h-full p-8 bg-white border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg rounded-sm">
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
