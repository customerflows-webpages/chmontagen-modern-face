import AnimatedSection from "./AnimatedSection";
import { 
  ChefHat, 
  DoorOpen, 
  Layers, 
  Sofa, 
  Wrench, 
  Building2 
} from "lucide-react";

const services = [
  {
    icon: ChefHat,
    title: "Küchenmontage",
    description:
      "Professionelle Montage Ihrer neuen Küche – vom Aufmass bis zur finalen Installation aller Geräte.",
  },
  {
    icon: Sofa,
    title: "Möbelmontage",
    description:
      "Einbauschränke, Regale und Massmöbel – wir montieren präzise und effizient.",
  },
  {
    icon: Layers,
    title: "Treppenbau",
    description:
      "Individuelle Treppen aus Holz, Glas und Stahl – sicher montiert mit handwerklicher Perfektion.",
  },
  {
    icon: DoorOpen,
    title: "Türen & Fenster",
    description:
      "Fachgerechte Montage von Innentüren, Haustüren und Fenstern aller Art.",
  },
  {
    icon: Building2,
    title: "Innenausbau",
    description:
      "Kompletter Innenausbau von Wohn- und Geschäftsräumen nach Ihren Wünschen.",
  },
  {
    icon: Wrench,
    title: "Reparaturen",
    description:
      "Schnelle und zuverlässige Reparaturen an bestehenden Einbauten und Möbeln.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Qualitätsarbeit aus einer Hand
          </h2>
          <p className="text-muted-foreground text-lg">
            Von der ersten Beratung bis zur finalen Montage – wir begleiten Sie 
            durch jedes Projekt mit Schweizer Präzision und Zuverlässigkeit.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="service-card h-full group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-sans">
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
