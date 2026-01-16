import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-craftsmanship.jpg";
import { Hammer, Layers, Home, Building2, BoxSelect, Grid, CheckCircle2 } from "lucide-react";

const services = [
    {
        icon: Hammer,
        title: "Holzbau",
        intro: "Moderner Holzbau verbindet Nachhaltigkeit, Stabilität und Design.",
        description: "Wir unterstützen dich bei Konstruktionen, Aufstockungen und Umbauten in Holz. Wir achten auf präzise Ausführung, saubere Anschlüsse und eine durchdachte Baustellenorganisation.",
        details: [
            "Montage von Tragkonstruktionen",
            "Aufstockungen und Erweiterungen in Holz",
            "Unterkonstruktionen für Fassaden und Innenausbau",
            "Detailarbeiten an Übergängen und Anschlüssen"
        ]
    },
    {
        icon: Grid,
        title: "Paneelbau",
        intro: "Paneelsysteme sind ideal für schnelle, saubere und optisch hochwertige Lösungen an Wänden und Decken.",
        description: "Wir montieren Paneele so, dass Fugenbild, Ausrichtung und Oberfläche ein stimmiges Gesamtbild ergeben.",
        details: [
            "Wand- und Deckenpaneele in Wohn- und Büroräumen",
            "Akustikpaneele in Besprechungs- und Aufenthaltsräumen",
            "Dekorpaneele für Eingangsbereiche und Treppenhäuser"
        ]
    },
    {
        icon: Layers,
        title: "Elementbau",
        intro: "Im Elementbau zählen Planung, Logistik und eine präzise Montage.",
        description: "Vorgefertigte Elemente werden auf der Baustelle zu einem dichten, stabilen Baukörper zusammengefügt.",
        details: [
            "Montage von Wand-, Decken- und Dachelementen",
            "Koordination mit Kran und Anlieferung",
            "Saubere Ausführung bei Anschlüssen und Durchdringungen",
            "Effiziente Abläufe, um Bauzeit und Kosten im Griff zu halten"
        ]
    },
    {
        icon: Building2,
        title: "Fassadenbau (Holzfassaden)",
        intro: "Eine moderne Holzfassade verleiht jedem Gebäude Charakter und Wert.",
        description: "Wir realisieren Holzfassaden mit klaren Linien, sauberer Detailausbildung und langlebigem Aufbau.",
        details: [
            "Vertikale und horizontale Holzschalungen",
            "Moderne Rhombus- und Profilschalungen",
            "Unterkonstruktionen und Hinterlüftung",
            "Saubere Anschlüsse an Fenster, Türen und Dach"
        ]
    },
    {
        icon: BoxSelect,
        title: "Möbelmontagen (moderner Holzschrank & mehr)",
        intro: "Moderne Möbel verdienen eine fachgerechte Montage.",
        description: "Wir montieren Holzschränke, Einbauschränke, Regalsysteme und weitere Möbel präzise und sauber.",
        details: [
            "Montage von Einbauschränken und Garderoben",
            "Auf- und Einbau moderner Holzschränke und Regale",
            "Anpassungen und Feinarbeiten vor Ort",
            "Schutz von Böden und Umgebung während der Montage"
        ]
    },
    {
        icon: Home,
        title: "Innenausbau",
        intro: "Im Innenausbau entscheidet die Summe der Details über den Gesamteindruck.",
        description: "Wir setzen Innenausbaukonzepte in Holz so um, dass Optik, Funktion und Haptik überzeugen.",
        details: [
            "Holzverkleidungen an Wänden und Decken",
            "Böden und Sockellösungen",
            "Einbauschränke, Nischenlösungen, Stauraumkonzepte",
            "Abschlussleisten und saubere Detailausbildung"
        ]
    },
];

const Services = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="CH Montagen - Leistungen"
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
                        Unsere Leistungen
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-center mt-6 text-xl max-w-2xl mx-auto"
                    >
                        Wir bieten ein fokussiertes Leistungsspektrum rund um Holzbau und Montagen.
                        Dabei decken wir den Bereich von der Konstruktion über die Gebäudehülle bis hin zum Innenausbau und Möblierung ab.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <section className="section-padding bg-secondary/30">
                <div className="container-custom">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.title} className="bg-white p-8 md:p-12 rounded-sm border border-border shadow-sm">
                                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                                    <div className="md:w-1/3">
                                        <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                                            <service.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                                        <p className="text-lg font-medium text-foreground mb-4">
                                            {service.intro}
                                        </p>
                                    </div>
                                    <div className="md:w-2/3">
                                        <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                                            {service.description}
                                        </p>
                                        <div className="bg-secondary/20 p-6 rounded-sm">
                                            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Leistungen im Detail:</h3>
                                            <ul className="grid sm:grid-cols-2 gap-4">
                                                {service.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <span className="text-sm text-foreground/80">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="mt-20 text-center bg-primary text-primary-foreground p-12 rounded-sm">
                        <h3 className="text-2xl font-bold mb-4">Du bist dir nicht sicher, in welche Kategorie dein Projekt fällt?</h3>
                        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                            Melde dich einfach – wir hören zu, stellen die richtigen Fragen und finden die passende Lösung.
                        </p>
                        <a
                            href="/kontakt"
                            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-sm hover:bg-white/90 transition-colors"
                        >
                            Jetzt anfragen
                        </a>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
