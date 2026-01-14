import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";
import craftsmanship from "@/assets/hero-craftsmanship.jpg";
import { Award, Clock, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Pünktlich",
    description: "Termingerechte Ausführung garantiert",
  },
  {
    icon: Shield,
    title: "Zuverlässig",
    description: "Qualitätsarbeit mit Garantie",
  },
  {
    icon: Users,
    title: "Persönlich",
    description: "Direkte Ansprechpartner vor Ort",
  },
  {
    icon: Award,
    title: "Erfahren",
    description: "Über 20 Jahre Branchenerfahrung",
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
              <div className="image-zoom rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={craftsmanship}
                  alt="Schweizer Handwerkskunst"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground font-display">20+</div>
                    <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection direction="right">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              Über uns
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Schweizer Qualität, auf die Sie bauen können
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Seit über 20 Jahren sind wir Ihr verlässlicher Partner für hochwertige 
              Montagearbeiten in der ganzen Schweiz. Unser erfahrenes Team verbindet 
              traditionelles Handwerk mit modernster Technik.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ob Küchenmontage, Möbeleinbau oder kompletter Innenausbau – wir arbeiten 
              mit Präzision, Leidenschaft und dem Anspruch, Ihre Erwartungen zu übertreffen. 
              Jedes Projekt erhält unsere volle Aufmerksamkeit.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground text-sm">
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
        <AnimatedSection className="mt-20">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="stats-card">
                <AnimatedCounter end={20} suffix="+" label="Jahre Erfahrung" />
              </div>
              <div className="stats-card">
                <AnimatedCounter end={500} suffix="+" label="Projekte" />
              </div>
              <div className="stats-card">
                <AnimatedCounter end={100} suffix="%" label="Zufriedenheit" />
              </div>
              <div className="stats-card">
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
