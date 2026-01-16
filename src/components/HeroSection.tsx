import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-craftsmanship.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="CH Montagen - Präzise Holzbau und Montage"
          className="w-full h-full object-cover"
        />
        {/* Clean, high-contrast overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-5xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
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
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
          >
            Saubere Arbeit, <br />
            <span className="text-white/90">klare Absprachen und moderne Lösungen in&nbsp;Holz</span>
            <span className="text-white/80 block text-3xl md:text-5xl mt-4">– schweizweit im Einsatz.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light"
          >
            CH-Montagen by Schoeler GmbH ist dein Partner für präzise Montagen und zeitgemässen Holzbau.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-x-8 gap-y-4 mb-12"
          >
            {["Jung & engagiert", "Schweizweit tätig", "Nachhaltig bauen"].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-white/80" />
                <span className="text-sm font-medium tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
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
