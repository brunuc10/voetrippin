import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Ana Carolina", city: "São Paulo, SP", text: "A melhor experiência de viagem que já tivemos! A equipe cuidou de cada detalhe e superou todas as nossas expectativas.", avatar: "AC" },
  { name: "Rafael Mendes", city: "Rio de Janeiro, RJ", text: "Viajamos para as Maldivas e foi simplesmente perfeito. Atendimento impecável do início ao fim. Recomendo demais!", avatar: "RM" },
  { name: "Juliana Santos", city: "Belo Horizonte, MG", text: "Profissionalismo e dedicação em cada etapa. Nos sentimos seguros e bem acompanhados durante toda a viagem para Dubai.", avatar: "JS" },
  { name: "Pedro Oliveira", city: "Curitiba, PR", text: "Já viajamos várias vezes com a VoeTrippin e sempre é uma experiência incrível. São os melhores do mercado!", avatar: "PO" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useScrollReveal();

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const t = TESTIMONIALS[current];

  return (
    <section id="depoimentos" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div ref={ref} className="text-center mb-16 animate-on-scroll">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">O que dizem nossos clientes</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-gradient-blue">Depoimentos</span>
          </h2>
        </div>

        <div className="glass-card rounded-2xl p-8 sm:p-12 text-center relative">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>

          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-8 font-light italic">
            "{t.text}"
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
              {t.avatar}
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.city}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-primary/20 w-2"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
