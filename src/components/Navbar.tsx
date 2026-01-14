import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Projekte", href: "#projects" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2"
          >
            <div className="flex flex-col">
              <span className={`text-lg sm:text-2xl font-bold font-display tracking-tight transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}>
                CH Montagen
              </span>
              <span className={`text-[10px] sm:text-xs transition-colors hidden sm:block ${
                isScrolled ? "text-muted-foreground" : "text-white/70"
              }`}>
                Zürich & Region
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`nav-link transition-colors ${
                  isScrolled ? "" : "!text-white/90 hover:!text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0783332400"
              className={`flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm xl:text-base ${
                isScrolled
                  ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md"
                  : "bg-white/95 text-primary hover:bg-white shadow-lg"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">078 333 24 00</span>
              <span className="xl:hidden">Anrufen</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Menu öffnen"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container-custom py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block py-3 px-4 rounded-xl text-foreground hover:bg-cream transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 py-3 px-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Zürich & Region</span>
              </div>
              <a
                href="tel:0783332400"
                className="flex items-center justify-center gap-2 mt-4 w-full py-4 bg-accent text-accent-foreground rounded-xl font-semibold shadow-md"
              >
                <Phone className="w-4 h-4" />
                078 333 24 00
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
