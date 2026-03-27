import { useScrollReveal } from "@/hooks/useScrollReveal";
import destEuropa from "@/assets/dest-europa.jpg";
import destMaldivas from "@/assets/dest-maldivas.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destNordeste from "@/assets/dest-nordeste.jpg";

const DESTINATIONS = [
  { name: "Europa", subtitle: "Cultura, história e charme", img: destEuropa },
  { name: "Maldivas", subtitle: "Paraíso sobre as águas", img: destMaldivas },
  { name: "Dubai", subtitle: "Luxo e modernidade", img: destDubai },
  { name: "Nordeste Premium", subtitle: "O melhor do Brasil", img: destNordeste },
];

const DestinationsSection = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="destinos" className="section-padding">
      <div className="container mx-auto">
        <div ref={titleRef} className="text-center mb-16 animate-on-scroll">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Explore o mundo</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Destinos <span className="text-gradient-gold">Incríveis</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((d, i) => {
            const cardRef = useScrollReveal(i * 120);
            return (
              <div key={d.name} ref={cardRef} className="animate-on-scroll group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={800} height={1024} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold mb-1">{d.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{d.subtitle}</p>
                  <a
                    href="https://wa.me/5500000000001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
