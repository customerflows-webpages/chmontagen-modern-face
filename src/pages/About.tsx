import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-craftsmanship.jpg";
import detailImage from "@/assets/architecture-detail.jpg";
import { Check } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="CH Montagen - Präzise Holzbau-Montagen"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="container-custom relative z-10 pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center"
                    >
                        Über uns
                    </motion.h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-primary mb-6">
                                CH-Montagen by Schoeler GmbH
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    CH-Montagen by Schoeler GmbH mit Sitz in Wetzikon/ZH steht für ein junges, dynamisches Team mit hohem Qualitätsanspruch.
                                </p>
                                <p>
                                    Wir kombinieren modernes Verständnis für Baustellenabläufe mit klassischer Handwerkspräzision.
                                    Unser Fokus liegt auf Montagen und Holzbaulösungen, die fachlich sauber, optisch stark und langfristig tragfähig sind.
                                </p>
                                <p>
                                    Wir arbeiten für Holzbauunternehmen, Generalunternehmer, Architekten und private Bauherrschaften,
                                    die Wert auf zuverlässige Ausführung und klare Kommunikation legen.
                                    Dabei denken wir mit – von der Vorbereitung über die Logistik bis hin zur letzten Schraube.
                                </p>
                                <p className="font-semibold text-primary">
                                    Zudem sind wir Schweizweit tätig, was für Sie Flexibilität bedeutet.
                                </p>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-xl font-bold text-primary mb-6">Unsere Stärken:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Verbindliche Termine und klare Absprachen",
                                        "Saubere Montage, ordentliche Baustelle",
                                        "Flexibilität bei Projektgrösse und Zeitfenster",
                                        "Direkter Draht ohne Bürokratie"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-foreground font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="mt-10 text-lg font-medium text-foreground">
                                Wenn du einen Partner suchst, der Montagen und Holzbau nicht nur ausführt, sondern versteht, bist du bei CH-Montagen by Schoeler GmbH richtig.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="relative">
                                <img
                                    src={detailImage}
                                    alt="Architektur Detail"
                                    className="w-full rounded-sm shadow-xl"
                                />
                                <div className="absolute top-6 -right-6 w-full h-full border-2 border-primary/10 -z-10 hidden md:block" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
