import AnimatedSection from "./AnimatedSection";
import craftsmanship from "@/assets/hero-craftsmanship.jpg";
import { Sparkles, Hammer, Leaf, Zap, Check } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Jung & engagiert",
    description: "Moderne Denkweise trifft auf präzises Handwerk.",
  },
  {
    icon: Hammer,
    title: "Leidenschaft fürs Handwerk",
    description: "Wir geben jedem Projekt unsere volle Aufmerksamkeit.",
  },
  {
    icon: Leaf,
    title: "Nachhaltig bauen",
    description: "Holz als klimafreundlicher, natürlicher Rohstoff.",
  },
  {
    icon: Zap,
    title: "Dynamisch & flexibel",
    description: "Schnelle Terminfindung, transparente Kommunikation.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Side */}
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={craftsmanship}
                  alt="CH Montagen - Präzises Handwerk"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Frame */}
              <div className="absolute top-6 left-6 w-full h-full border-2 border-primary/10 -z-0" />
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <span className="text-sm font-semibold tracking-wider uppercase text-primary mb-4 block">
              Über uns
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              CH Montagen by Schoeler GmbH
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Wir sind dein Partner für präzise Montagen und zeitgemässen Holzbau mit Sitz in Wetzikon/ZH.
              Wir unterstützen Bauherren, Holzbauunternehmen, Privatkunden und Planer
              bei Projekten, bei denen es auf saubere Details, zuverlässige Termine und eine professionelle Umsetzung ankommt.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Ob Elementbau, Paneelbau, Fassadenbau, Möbelmontagen oder Innenausbau:
              Wir denken mit, arbeiten effizient und liefern Resultate,
              die optisch und technisch überzeugen.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0 text-primary">
                    <Check className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
