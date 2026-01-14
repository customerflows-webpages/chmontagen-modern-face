import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import workshopHero from "@/assets/workshop-hero.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center">
      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={workshopHero}
          alt="CH Montagen - Präzise Holzbau-Montagen"
          className="w-full h-full object-cover"
        />
        {/* Warmer, organischer Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-wood-dark/95 via-primary/85 to-wood-dark/80" />
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <div className="container-custom relative z-10 pt-20 sm:pt-24 pb-8 sm:pb-0">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white/95 text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-white/20">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
              Wetzikon/ZH & Umgebung
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 sm:mb-8"
          >
            Präzise Montagen &
            <span className="block text-accent">moderner Holzbau</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/85 mb-8 sm:mb-10 max-w-xl leading-relaxed"
          >
            Saubere Arbeit, klare Absprachen und moderne Lösungen in Holz – 
            von Elementbau über Fassaden bis zum kompletten Innenausbau.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 sm:gap-6 mb-8 sm:mb-12"
          >
            {["Jung & engagiert", "Lokaler Partner in Wetzikon", "Nachhaltig bauen"].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button onClick={scrollToContact} className="btn-hero text-sm sm:text-base !py-3 sm:!py-4 !px-6 sm:!px-8">
              Unverbindlich anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button onClick={scrollToServices} className="btn-hero-outline text-sm sm:text-base !py-3 sm:!py-4 !px-6 sm:!px-8">
              Unsere Leistungen
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
