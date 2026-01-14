import AnimatedSection from "./AnimatedSection";
import craftsmanship from "@/assets/hero-craftsmanship.jpg";
import { Sparkles, Hammer, Leaf, Zap, MapPin } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="image-zoom rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={craftsmanship}
                  alt="CH Montagen - Präzises Handwerk"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Decorative element - hidden on mobile */}
              <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-accent/10 rounded-2xl sm:rounded-3xl -z-10 hidden sm:block" />
              <div className="absolute -top-4 -left-4 w-20 sm:w-24 h-20 sm:h-24 bg-primary/10 rounded-2xl sm:rounded-3xl -z-10 hidden sm:block" />
              
              {/* Location Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-card p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-wood-light/30 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg font-bold text-foreground font-display">Standort</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Zürich & Region</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <span className="inline-block px-3 sm:px-4 py-1.5 bg-primary/10 text-primary font-medium text-xs sm:text-sm tracking-wider uppercase rounded-full mb-3 sm:mb-4">
              Über uns
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
              CH Montagen by Schoeler GmbH
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              Wir sind dein Partner für präzise Montagen und zeitgemässen Holzbau im Raum Zürich. 
              Wir unterstützen Bauherren, Holzbauunternehmen, Privatkunden und Planer 
              bei Projekten, bei denen es auf saubere Details und zuverlässige Termine ankommt.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Ob Elementbau, Paneelbau, Fassadenbau, Möbelmontagen oder Innenausbau: 
              Wir denken mit, arbeiten effizient und liefern Resultate, 
              die optisch und technisch überzeugen.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-cream/60 hover:bg-cream transition-colors border border-transparent hover:border-border"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
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
        <AnimatedSection className="mt-16 sm:mt-24">
          <div className="bg-gradient-to-br from-primary via-primary to-wood-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-14 text-primary-foreground relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 relative z-10 text-center">
              <div className="p-2 sm:p-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-1 sm:mb-2">✨</div>
                <div className="font-semibold text-sm sm:text-lg">Jung & engagiert</div>
                <p className="text-xs sm:text-sm text-primary-foreground/70 mt-0.5 sm:mt-1">Moderne Denkweise</p>
              </div>
              <div className="p-2 sm:p-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-1 sm:mb-2">🔨</div>
                <div className="font-semibold text-sm sm:text-lg">Leidenschaft</div>
                <p className="text-xs sm:text-sm text-primary-foreground/70 mt-0.5 sm:mt-1">Fürs Handwerk</p>
              </div>
              <div className="p-2 sm:p-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-1 sm:mb-2">🌱</div>
                <div className="font-semibold text-sm sm:text-lg">Nachhaltig</div>
                <p className="text-xs sm:text-sm text-primary-foreground/70 mt-0.5 sm:mt-1">Holz im Zentrum</p>
              </div>
              <div className="p-2 sm:p-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-1 sm:mb-2">📍</div>
                <div className="font-semibold text-sm sm:text-lg">Lokal</div>
                <p className="text-xs sm:text-sm text-primary-foreground/70 mt-0.5 sm:mt-1">Zürich & Region</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
