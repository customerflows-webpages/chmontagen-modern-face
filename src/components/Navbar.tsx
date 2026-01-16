import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Kontakt", href: "/kontakt" },
];

import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
        : "bg-transparent py-6"
        }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group"
          >
            <img
              src={logo}
              alt="CH Montagen"
              className={`h-12 w-auto transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors relative hover-lift ${isScrolled
                  ? isActive(item.href) ? "text-primary font-bold" : "text-primary/70 hover:text-primary"
                  : isActive(item.href) ? "text-white font-bold" : "text-white/80 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:0783332400"
              className={`flex items-center gap-2 px-6 py-3 rounded-sm font-medium transition-all duration-300 text-sm ${isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-primary hover:bg-white/90"
                }`}
            >
              <Phone className="w-4 h-4" />
              <span>078 333 24 00</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-primary" : "text-white"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-32 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-2xl font-bold transition-colors ${isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-8 border-t border-border mt-4">
                <a
                  href="tel:0783332400"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-primary-foreground font-bold text-lg rounded-sm"
                >
                  <Phone className="w-5 h-5" />
                  078 333 24 00
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
