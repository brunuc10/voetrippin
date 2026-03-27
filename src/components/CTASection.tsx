import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto text-center relative z-10 animate-on-scroll">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Deixe que a gente leve você{" "}
          <span className="text-gradient-gold">mais longe</span>
        </h2>
        <p className="text-foreground/60 text-lg max-w-xl mx-auto mb-10">
          Fale com um dos nossos especialistas e descubra o destino perfeito para você.
        </p>
        <a
          href="https://wa.me/5527995907759"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-10 py-5 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-xl shadow-primary/20"
        >
          <MessageCircle className="w-6 h-6" />
          Fale pelo WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTASection;
