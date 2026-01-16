import AnimatedSection from "./AnimatedSection";
import { Phone, Mail, MapPin, Send } from "lucide-react";
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
    title: "Hauptsitz",
    value: "Wetzikon/ZH (Schweizweit tätig)",
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
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <AnimatedSection className="mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-4 block">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Bereit für dein Projekt?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lass uns gemeinsam etwas aus Holz schaffen, das begeistert und
              langfristig Bestand hat.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white border border-border rounded-sm">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-sm flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      {item.title}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-bold text-foreground hover:text-primary/70 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-lg font-bold text-foreground">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="aspect-video rounded-sm overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172168.39827799428!2d8.378519526825863!3d47.37688560337959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2sZ%C3%BCrich!5e0!3m2!1sde!2sch!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Wetzikon"
              />
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 border border-border rounded-sm shadow-sm"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Jetzt anfragen
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Wir melden uns schnellstmöglich bei dir.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Dein Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-secondary/20 border-border focus:border-primary h-12 rounded-sm"
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
                    className="bg-secondary/20 border-border focus:border-primary h-12 rounded-sm"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-secondary/20 border-border focus:border-primary h-12 rounded-sm"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Deine Nachricht *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="bg-secondary/20 border-border focus:border-primary resize-none rounded-sm"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-primary h-14 text-base font-semibold rounded-sm"
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
