import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Plane, Star, Crown, Sparkles } from "lucide-react";

const PACKAGES = [
  {
    icon: Plane,
    badge: "Mais Vendido",
    name: "Caribe All-Inclusive",
    destination: "Cancún · 7 noites",
    perks: ["Voo ida e volta", "Resort 5 estrelas all-inclusive", "Transfers privados", "Passeios inclusos"],
    color: "primary" as const,
  },
  {
    icon: Crown,
    badge: "Premium",
    name: "Europa Clássica",
    destination: "Paris + Roma · 12 noites",
    perks: ["Voos diretos", "Hotéis 4-5 estrelas", "City tours guiados", "Seguro viagem premium"],
    color: "accent" as const,
  },
  {
    icon: Star,
    badge: "Exclusivo",
    name: "Maldivas Luxury",
    destination: "Maldivas · 6 noites",
    perks: ["Overwater villa", "Café da manhã flutuante", "Spa & mergulho", "Transfer de seaplane"],
    color: "primary" as const,
  },
  {
    icon: Sparkles,
    badge: "Imperdível",
    name: "Nordeste Premium",
    destination: "Noronha + Jeri · 10 noites",
    perks: ["Voos inclusos", "Pousadas charmosas", "Passeios de barco", "Guia local exclusivo"],
    color: "accent" as const,
  },
];

const PackagesSection = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="pacotes" className="section-padding bg-[hsl(222,47%,15%)]">
      <div className="container mx-auto">
        <div ref={titleRef} className="text-center mb-16 animate-on-scroll">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Ofertas especiais</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Pacotes em <span className="text-gradient-orange">Destaque</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">Condições exclusivas para você realizar a viagem dos sonhos</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg, i) => {
            const cardRef = useScrollReveal(i * 100);
            const isAccent = pkg.color === "accent";
            return (
              <div
                key={pkg.name}
                ref={cardRef}
                className={`animate-on-scroll rounded-2xl p-6 flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  isAccent
                    ? "bg-gradient-to-br from-[hsl(30,78%,63%)] to-[hsl(25,85%,50%)] text-white shadow-xl shadow-[hsl(30,78%,63%)]/20"
                    : "glass-card-dark hover:border-accent/30"
                }`}
              >
                <span className={`inline-block self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
                  isAccent ? "bg-white/20 text-white" : "bg-accent/15 text-accent"
                }`}>
                  {pkg.badge}
                </span>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isAccent ? "bg-white/20" : "bg-accent/10"
                }`}>
                  <pkg.icon className={`w-6 h-6 ${isAccent ? "text-white" : "text-accent"}`} />
                </div>

                <h3 className="font-display text-xl font-bold mb-1 text-white">{pkg.name}</h3>
                <p className={`text-sm mb-5 ${isAccent ? "text-white/80" : "text-white/50"}`}>{pkg.destination}</p>

                {/* Promotional label */}
                <div className="mb-4">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${isAccent ? "text-white/70" : "text-accent/80"}`}>Valor Promocional</span>
                  <p className={`text-lg font-bold mt-1 ${isAccent ? "text-white" : "text-accent"}`}>Consulte pelo WhatsApp</p>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className={`flex items-center gap-2 text-sm ${isAccent ? "text-white/90" : "text-white/60"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isAccent ? "bg-white" : "bg-accent"}`} />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5527995907759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isAccent
                      ? "bg-white text-[hsl(30,78%,50%)] hover:shadow-lg"
                      : "bg-gradient-orange text-white hover:shadow-lg hover:shadow-accent/20"
                  }`}
                >
                  Quero esse pacote
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center glass-card-dark rounded-2xl p-8">
          <p className="text-white/80 text-sm sm:text-base">
            💳 <span className="font-semibold text-accent">Parcele em até 12x sem juros</span> no cartão de crédito · 
            Pix com <span className="font-semibold text-accent">desconto especial</span> · 
            Aceitamos todos os cartões · Entrada facilitada
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
