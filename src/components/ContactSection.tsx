import AnimatedSection from "./AnimatedSection";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+41 79 123 45 67",
    href: "tel:+41791234567",
  },
  {
    icon: Mail,
    title: "E-Mail",
    value: "info@chmontagen.ch",
    href: "mailto:info@chmontagen.ch",
  },
  {
    icon: MapPin,
    title: "Standort",
    value: "Schweiz – landesweit tätig",
    href: null,
  },
  {
    icon: Clock,
    title: "Erreichbarkeit",
    value: "Mo–Fr: 7:00 – 18:00",
    href: null,
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns in Kürze bei Ihnen.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm tracking-wider uppercase rounded-full mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Lassen Sie uns Ihr Projekt besprechen
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Haben Sie eine Idee? Wir freuen uns auf Ihre Anfrage – 
            unverbindlich und persönlich.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-cream/60 hover:bg-cream transition-colors border border-transparent hover:border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-wood-light/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {item.title}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-semibold text-foreground">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="aspect-video rounded-2xl bg-cream overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760000!2d8.2275!3d46.8182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort"
              />
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 md:p-10 rounded-3xl shadow-xl border border-border"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-2 font-sans">
                Schreiben Sie uns
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Wir antworten in der Regel innerhalb von 24 Stunden.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ihr Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Hans Müller"
                    className="bg-cream/50 border-border focus:border-accent h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-Mail *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="hans@beispiel.ch"
                    className="bg-cream/50 border-border focus:border-accent h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+41 79 123 45 67"
                  className="bg-cream/50 border-border focus:border-accent h-12 rounded-xl"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ihre Nachricht *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Beschreiben Sie kurz Ihr Projekt oder Anliegen..."
                  rows={5}
                  className="bg-cream/50 border-border focus:border-accent resize-none rounded-xl"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-4 h-4 mr-2" />
                Anfrage senden
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
