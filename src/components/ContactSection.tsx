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
    value: "078 333 24 00",
    href: "tel:0783332400",
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
    value: "Zürich & Umgebung",
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
      description: "Wir melden uns in Kürze bei dir.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-4">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-primary/10 text-primary font-medium text-xs sm:text-sm tracking-wider uppercase rounded-full mb-3 sm:mb-4">
            Kontakt
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
            Bereit für dein Projekt?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Lass uns gemeinsam etwas aus Holz schaffen, das begeistert und 
            langfristig Bestand hat. Wir freuen uns auf deine Ideen!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-4 sm:space-y-5">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-cream/60 hover:bg-cream transition-colors border border-transparent hover:border-border"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/15 to-wood-light/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">
                    {item.title}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-semibold text-foreground hover:text-accent transition-colors text-sm sm:text-base"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-semibold text-foreground text-sm sm:text-base">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="aspect-video rounded-xl sm:rounded-2xl bg-cream overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172168.39827799428!2d8.378519526825863!3d47.37688560337959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2sZ%C3%BCrich!5e0!3m2!1sde!2sch!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Zürich"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-border"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-1 sm:mb-2 font-sans">
                Jetzt unverbindlich anfragen
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-6 sm:mb-8">
                Wir melden uns schnellstmöglich bei dir.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Dein Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Max Muster"
                    className="bg-cream/50 border-border focus:border-accent h-11 sm:h-12 rounded-lg sm:rounded-xl text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    E-Mail *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="max@beispiel.ch"
                    className="bg-cream/50 border-border focus:border-accent h-11 sm:h-12 rounded-lg sm:rounded-xl text-base"
                  />
                </div>
              </div>

              <div className="mb-4 sm:mb-5">
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Telefon
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="078 123 45 67"
                  className="bg-cream/50 border-border focus:border-accent h-11 sm:h-12 rounded-lg sm:rounded-xl text-base"
                />
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Deine Nachricht *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Beschreibe kurz dein Projekt oder Anliegen..."
                  rows={4}
                  className="bg-cream/50 border-border focus:border-accent resize-none rounded-lg sm:rounded-xl text-base"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all"
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
