import AnimatedSection from "./AnimatedSection";
import craftsmanship from "@/assets/hero-craftsmanship.jpg";
import { Sparkles, Hammer, Leaf, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Jung & engagiert",
    description: "Moderne Denkweise trifft präzises Handwerk",
  },
  {
    icon: Hammer,
    title: "Leidenschaft fürs Handwerk",
    description: "Volle Aufmerksamkeit für jedes Projekt",
  },
  {
    icon: Leaf,
    title: "Nachhaltig bauen",
    description: "Holz als klimafreundlicher Rohstoff",
  },
  {
    icon: Zap,
    title: "Dynamisch & flexibel",
    description: "Schnelle Termine, klare Kommunikation",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="image-zoom rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={craftsmanship}
                  alt="CH Montagen - Präzises Handwerk"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-3xl -z-10" />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card p-5 rounded-2xl shadow-xl border border-border hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-wood-light/30 rounded-xl flex items-center justify-center">
                    <Leaf className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground font-display">Nachhaltig</div>
                    <div className="text-sm text-muted-foreground">Holz im Zentrum</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection direction="right">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm tracking-wider uppercase rounded-full mb-4">
              Über uns
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              CH Montagen by Schoeler GmbH
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Wir sind dein Partner für präzise Montagen und zeitgemässen Holzbau. 
              Wir unterstützen Bauherren, Holzbauunternehmen, Privatkunden und Planer 
              bei Projekten, bei denen es auf saubere Details und zuverlässige Termine ankommt.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ob Elementbau, Paneelbau, Fassadenbau, Möbelmontagen oder Innenausbau: 
              Wir denken mit, arbeiten effizient und liefern Resultate, 
              die optisch und technisch überzeugen.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-cream/60 hover:bg-cream transition-colors border border-transparent hover:border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {feature.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Values Section */}
        <AnimatedSection className="mt-24">
          <div className="bg-gradient-to-br from-primary via-primary to-wood-dark rounded-3xl p-8 md:p-14 text-primary-foreground relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold font-display mb-2">✨</div>
                <div className="font-semibold text-lg">Jung & engagiert</div>
                <p className="text-sm text-primary-foreground/70 mt-1">Moderne Denkweise</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold font-display mb-2">🔨</div>
                <div className="font-semibold text-lg">Leidenschaft</div>
                <p className="text-sm text-primary-foreground/70 mt-1">Fürs Handwerk</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold font-display mb-2">🌱</div>
                <div className="font-semibold text-lg">Nachhaltig</div>
                <p className="text-sm text-primary-foreground/70 mt-1">Holz im Zentrum</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold font-display mb-2">🚀</div>
                <div className="font-semibold text-lg">Dynamisch</div>
                <p className="text-sm text-primary-foreground/70 mt-1">Flexibel & schnell</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
