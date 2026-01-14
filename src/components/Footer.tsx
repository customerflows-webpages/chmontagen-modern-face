import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-wood-dark via-primary to-wood-dark text-primary-foreground">
      <div className="container-custom py-10 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-display">CH Montagen</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/70 mb-1 sm:mb-2">by Schoeler GmbH</p>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Dein Partner für präzise Montagen und zeitgemässen Holzbau im Raum Zürich. 
              Saubere Arbeit, klare Absprachen und moderne Lösungen in Holz.
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="tel:0783332400"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" />
                078 333 24 00
              </a>
              <a
                href="mailto:info@chmontagen.ch"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4" />
                info@chmontagen.ch
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80 text-sm sm:text-base">
                <MapPin className="w-4 h-4" />
                Zürich & Umgebung
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-5 text-base sm:text-lg font-sans">Leistungen</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Montage",
                "Paneelbau",
                "Innenausbau",
                "Fassadenbau",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-5 text-base sm:text-lg font-sans">Navigation</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Leistungen", href: "#services" },
                { label: "Über uns", href: "#about" },
                { label: "Projekte", href: "#projects" },
                { label: "Kontakt", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-primary-foreground/60">
            © {currentYear} CH Montagen by Schoeler GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-xs sm:text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
