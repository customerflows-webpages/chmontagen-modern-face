import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Kontakt", href: "/kontakt" },
];

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: { opacity: 0, y: 12, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  const mobileOverlay = (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          key="mobile-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-card flex flex-col"
        >
          {/* Header row */}
          <div className="container-custom flex items-center justify-between py-5">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={logo} alt="CH Montagen" className="h-10 w-auto" />
            </Link>
            <motion.button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground"
              aria-label="Menü schliessen"
              whileTap={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <X className="w-7 h-7" />
            </motion.button>
          </div>

          {/* Nav links centered */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={staggerItem}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-bold tracking-tight transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              custom={navItems.length}
              variants={staggerItem}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-4"
            >
              <a
                href="tel:0783332400"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-sm"
              >
                <Phone className="w-5 h-5" />
                078 333 24 00
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border)/0.5)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <img
                src={logo}
                alt="CH Montagen"
                className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                  isScrolled ? "" : "brightness-0 invert"
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium relative transition-colors group ${
                    isScrolled
                      ? isActive(item.href)
                        ? "text-primary"
                        : "text-foreground/60 hover:text-primary"
                      : isActive(item.href)
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ease-out ${
                      isScrolled ? "bg-primary" : "bg-white"
                    } ${
                      isActive(item.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href="tel:0783332400"
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-sm font-medium text-sm transition-all duration-300 ${
                  isScrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white text-primary hover:bg-white/90"
                }`}
              >
                <Phone className="w-4 h-4" />
                078 333 24 00
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Menü öffnen"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay rendered as portal (sibling, not child of nav) */}
      {createPortal(mobileOverlay, document.body)}
    </>
  );
};

export default Navbar;
