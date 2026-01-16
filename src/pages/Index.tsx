import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import modernStairs from "@/assets/modern-stairs.jpg";
import { CheckCircle2, Hammer, Grid, Home, Building2, Star, Zap, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Präzise Montagen und moderner Holzbau
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-primary">CH-Montagen by Schoeler GmbH</span> ist dein Partner für präzise Montagen und zeitgemässen Holzbau.
                </p>
                <p>
                  Wir unterstützen Bauherren, Holzbauunternehmen, Privatkunden und Planer bei Projekten,
                  bei denen es auf saubere Details, zuverlässige Termine und eine professionelle Umsetzung ankommt.
                </p>
                <p>
                  Ob Elementbau, Paneelbau, Fassadenbau, Möbelmontagen oder Innenausbau:
                  Wir denken mit, arbeiten effizient und liefern Resultate, die optisch und technisch überzeugen.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Saubere, strukturierte Arbeitsweise",
                  "Direkte, unkomplizierte Kommunikation",
                  "Einsatz in der ganzen Schweiz"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={modernStairs}
                  alt="Moderne Holztreppe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary -z-10 hidden md:block" />
              <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-primary/10 -z-10 hidden md:block" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1} className="bg-white p-8 rounded-sm shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Jung & engagiert</h3>
              <p className="text-muted-foreground">Moderne Denkweise trifft auf präzises Handwerk.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-white p-8 rounded-sm shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Hammer className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Leidenschaft</h3>
              <p className="text-muted-foreground">Wir geben jedem Projekt unsere volle Aufmerksamkeit – vom kleinen Innenausbau bis zur grossen Konstruktion.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-white p-8 rounded-sm shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Nachhaltig bauen</h3>
              <p className="text-muted-foreground">Holz als klimafreundlicher, natülicher Rohstoff steht bei uns im Mittelpunkt.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="bg-white p-8 rounded-sm shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dynamisch & flexibel</h3>
              <p className="text-muted-foreground">Schnelle Terminfindung, transparente Kommunikation und saubere Umsetzung.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Unsere Leistungen</h2>
            <p className="text-lg text-muted-foreground">
              Wir bieten umfassende Lösungen im Holzbau. Jedes Projekt wird mit höchster Sorgfalt ausgeführt.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Hammer,
                title: "Montage",
                desc: "Präzise Montagearbeiten für unterschiedlichste Holzbauprojekte – von Bauelementen bis zu kompletten Holzstrukturen."
              },
              {
                icon: Grid,
                title: "Paneelbau",
                desc: "Individuelle Paneelsysteme für Wände, Decken und Fassaden. Modern, hochwertig und optimal abgestimmt."
              },
              {
                icon: Home,
                title: "Innenausbau",
                desc: "Hochwertiger Innenausbau aus Holz: Verkleidungen, Bodenbeläge, Raumelemente und komplette Ausbaukonzepte."
              },
              {
                icon: Building2,
                title: "Fassadenbau",
                desc: "Robuste und stilvolle Holzfassaden, die sowohl schützen als auch architektonisch überzeugen."
              }
            ].map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="h-full p-8 border border-border rounded-sm hover:shadow-lg transition-all group">
                  <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/leistungen">
              <Button variant="outline" className="h-12 px-8 text-base border-primary text-primary hover:bg-primary hover:text-white">
                Alle Leistungen ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Mit uns bauen heisst: <br />
                <span className="text-white/80">Vertrauen, Kreativität & Qualität</span>
              </h2>
              <p className="text-xl opacity-90 leading-relaxed mb-8">
                Von der Planung bis zur Ausführung begleiten wir dein Projekt mit Fachwissen, Effizienz und einem sicheren Blick für Details.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Bereit für dein Projekt?</h3>
              <p className="mb-8 opacity-80 text-lg">
                Lass uns gemeinsam etwas aus Holz schaffen, das begeistert und langfristig Bestand hat.
              </p>
              <Link to="/kontakt">
                <Button className="w-full bg-white text-primary hover:bg-white/90 h-14 text-lg font-bold">
                  Jetzt unverbindlich anfragen
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
