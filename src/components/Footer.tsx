import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-bold mb-6 font-display tracking-tight text-white">CH Montagen</h3>
            <p className="text-sm text-primary-foreground/70 mb-2">by Schoeler GmbH</p>
            <p className="text-primary-foreground/80 mb-8 max-w-md leading-relaxed">
              Dein Partner für präzise Montagen und zeitgemässen Holzbau mit Sitz in Wetzikon/ZH.
              Saubere Arbeit, klare Absprachen und moderne Lösungen in Holz.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:0783332400"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>078 333 24 00</span>
              </a>
              <a
                href="mailto:info@chmontagen.ch"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@chmontagen.ch</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span>Wetzikon/ZH</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-start-2 lg:col-start-4">
            <h4 className="font-bold mb-6 text-lg text-white">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Leistungen", href: "/leistungen" },
                { label: "Über uns", href: "/ueber-uns" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} CH Montagen by Schoeler GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-sm text-primary-foreground/50 hover:text-white transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/50 hover:text-white transition-colors"
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
