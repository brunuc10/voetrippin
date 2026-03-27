import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HeartHandshake, Gem, ShieldCheck, Crown, BadgePercent } from "lucide-react";

const ITEMS = [
  { icon: HeartHandshake, title: "Atendimento Personalizado", desc: "Cada viagem é planejada sob medida para você e sua família." },
  { icon: Gem, title: "Pacotes Exclusivos", desc: "Roteiros únicos que você não encontra em lugar nenhum." },
  { icon: ShieldCheck, title: "Suporte Completo", desc: "Do embarque ao retorno, estamos sempre com você." },
  { icon: Crown, title: "Experiência Premium", desc: "Hotéis, transfers e experiências de alto padrão." },
  { icon: BadgePercent, title: "Melhores Condições", desc: "Preços competitivos e condições especiais de pagamento." },
];

const DifferentialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="diferenciais" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        <div ref={ref} className="text-center mb-16 animate-on-scroll">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Por que nos escolher</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Nossos <span className="text-gradient-gold">Diferenciais</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ITEMS.map((item, i) => {
            const cardRef = useScrollReveal(i * 100);
            return (
              <div
                key={item.title}
                ref={cardRef}
                className="animate-on-scroll glass-card rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
