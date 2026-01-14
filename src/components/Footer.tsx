import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-wood-dark via-primary to-wood-dark text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-display">CH Montagen</h3>
            <p className="text-sm text-primary-foreground/70 mb-2">by Schoeler GmbH</p>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Dein Partner für präzise Montagen und zeitgemässen Holzbau. 
              Saubere Arbeit, klare Absprachen und moderne Lösungen in Holz – 
              schweizweit im Einsatz.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:0783332400"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                078 333 24 00
              </a>
              <a
                href="mailto:info@chmontagen.ch"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@chmontagen.ch
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                Einsatz in der ganzen Schweiz
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-lg font-sans">Leistungen</h4>
            <ul className="space-y-3">
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
            <h4 className="font-semibold mb-5 text-lg font-sans">Navigation</h4>
            <ul className="space-y-3">
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
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} CH Montagen by Schoeler GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
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
