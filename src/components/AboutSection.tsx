import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";
import craftsmanship from "@/assets/hero-craftsmanship.jpg";
import { Award, Clock, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Pünktlich",
    description: "Termingerechte Ausführung",
  },
  {
    icon: Shield,
    title: "Zuverlässig",
    description: "Qualität mit Garantie",
  },
  {
    icon: Users,
    title: "Persönlich",
    description: "Direkter Ansprechpartner",
  },
  {
    icon: Award,
    title: "Erfahren",
    description: "20+ Jahre Expertise",
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
                  alt="Schweizer Handwerkskunst"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-3xl -z-10" />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-5 rounded-2xl shadow-xl border border-border hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-wood-light/30 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground font-display">20+</div>
                    <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
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
              Echtes Handwerk, echte Menschen
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Seit über 20 Jahren sind wir Ihr verlässlicher Partner für hochwertige 
              Montagearbeiten in der ganzen Schweiz. Unser Team verbindet 
              traditionelles Handwerk mit modernster Präzision.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Bei uns sind Sie keine Nummer – wir nehmen uns Zeit für Ihre Wünsche 
              und setzen sie mit Herzblut um. Jedes Projekt erhält unsere volle 
              Aufmerksamkeit, denn Ihr Zuhause verdient das Beste.
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

        {/* Stats Section */}
        <AnimatedSection className="mt-24">
          <div className="bg-gradient-to-br from-primary via-primary to-wood-dark rounded-3xl p-8 md:p-14 text-primary-foreground relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              <div className="text-center">
                <AnimatedCounter end={20} suffix="+" label="Jahre Erfahrung" />
              </div>
              <div className="text-center">
                <AnimatedCounter end={500} suffix="+" label="Projekte" />
              </div>
              <div className="text-center">
                <AnimatedCounter end={100} suffix="%" label="Zufriedenheit" />
              </div>
              <div className="text-center">
                <AnimatedCounter end={15} suffix="+" label="Mitarbeiter" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
