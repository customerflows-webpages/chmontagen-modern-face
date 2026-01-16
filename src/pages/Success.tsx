import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Success = () => {
    return (
        <div className="min-h-screen bg-secondary/30">
            <Navbar />

            <div className="container-custom pt-40 pb-20 min-h-[80vh] flex items-center justify-center">
                <AnimatedSection className="max-w-xl w-full bg-white p-12 rounded-sm shadow-xl border border-border/50 text-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>

                    <h1 className="text-3xl font-bold text-primary mb-4">Vielen Dank!</h1>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen melden.
                    </p>

                    <Link to="/">
                        <Button className="btn-primary h-12 px-8 font-semibold w-full sm:w-auto">
                            Zurück zur Startseite
                        </Button>
                    </Link>
                </AnimatedSection>
            </div>

            <Footer />
        </div>
    );
};

export default Success;
