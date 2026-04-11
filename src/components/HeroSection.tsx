import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-craftsmanship.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src={heroImage}
          alt="CH Montagen - Präzise Holzbau und Montage"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-5xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide">
              <MapPin className="w-4 h-4" />
              Einsatz in der ganzen Schweiz
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8"
          >
            Saubere Arbeit, <br className="hidden sm:block" />
            <span className="text-white/90">
              klare Absprachen und moderne Lösungen in&nbsp;Holz
            </span>
            <span className="text-white/80 block text-2xl sm:text-3xl md:text-5xl mt-3 md:mt-4">
              – schweizweit im Einsatz.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-base md:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl leading-relaxed font-light"
          >
            CH-Montagen by Schoeler GmbH ist dein Partner für präzise Montagen
            und zeitgemässen Holzbau.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-3 mb-10 md:mb-12"
          >
            {["Jung & engagiert", "Schweizweit tätig", "Nachhaltig bauen"].map(
              (item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 text-white">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white/80" />
                  <span className="text-xs md:text-sm font-medium tracking-wide">
                    {item}
                  </span>
                </div>
              )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors"
            >
              Jetzt anfragen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold text-sm tracking-wide transition-colors"
            >
              Unsere Leistungen
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
