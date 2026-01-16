import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-craftsmanship.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="CH Montagen - Kontakt"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="container-custom relative z-10 pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center"
                    >
                        Kontakt
                    </motion.h1>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section-padding bg-secondary/30">
                <div className="container-custom max-w-4xl">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">KONTAKT</h2>
                            <p className="text-muted-foreground whitespace-pre-line text-lg leading-relaxed">
                                Der einfachste Weg mit uns in Kontakt zu treten.<br />
                                Wir freuen uns über Ihre Nachricht.
                            </p>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-border/50">
                            <form
                                action="https://api.web3forms.com/submit"
                                method="POST"
                                className="space-y-8"
                            >
                                {/* Web3Forms Configuration */}
                                <input type="hidden" name="access_key" value="41cd4c28-120e-45b7-8042-853ee9dbbbb1" />
                                <input type="hidden" name="subject" value="Neue Anfrage via Website (CH Montagen)" />
                                <input type="hidden" name="from_name" value="CH Montagen Website" />

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground uppercase tracking-wider">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Ihr Name"
                                            className="bg-secondary/10 border-border focus:border-primary h-14 rounded-sm text-base px-4 transition-all focus:bg-white"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground uppercase tracking-wider">
                                            E-Mail
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="ihre@email.ch"
                                            className="bg-secondary/10 border-border focus:border-primary h-14 rounded-sm text-base px-4 transition-all focus:bg-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground uppercase tracking-wider">
                                        Nachricht
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        placeholder="Wie können wir helfen?"
                                        className="bg-secondary/10 border-border focus:border-primary resize-none rounded-sm text-base p-4 transition-all focus:bg-white"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full btn-primary h-14 text-lg font-bold tracking-wide rounded-sm hover:scale-[1.01] transition-transform shadow-lg"
                                >
                                    Nachricht absenden
                                </Button>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
