import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

import destParis from "@/assets/dest-paris.jpg";
import destDubai from "@/assets/dest-dubai2.jpg";
import destMaldivas from "@/assets/dest-maldivas2.jpg";
import destNewyork from "@/assets/dest-newyork.jpg";
import destSantorini from "@/assets/dest-santorini.jpg";
import destRoma from "@/assets/dest-roma.jpg";
import destCancun from "@/assets/dest-cancun.jpg";
import destBariloche from "@/assets/dest-bariloche.jpg";
import destChile from "@/assets/dest-chile.jpg";

import destNoronha from "@/assets/dest-noronha.jpg";
import destGramado from "@/assets/dest-gramado.jpg";
import destJeri from "@/assets/dest-jeri.jpg";
import destAracaju from "@/assets/dest-aracaju.jpg";
import destVitoria from "@/assets/dest-vitoria.jpg";
import destGalinhas from "@/assets/dest-galinhas.jpg";
import destMaragogi from "@/assets/dest-maragogi.jpg";
import destLencois from "@/assets/dest-lencois.jpg";

const INTERNATIONAL = [
  { name: "Paris", subtitle: "Cidade Luz", img: destParis },
  { name: "Dubai", subtitle: "Luxo e modernidade", img: destDubai },
  { name: "Maldivas", subtitle: "Paraíso sobre as águas", img: destMaldivas },
  { name: "Nova York", subtitle: "A cidade que nunca dorme", img: destNewyork },
  { name: "Santorini", subtitle: "Pôr do sol perfeito", img: destSantorini },
  { name: "Roma", subtitle: "Cidade eterna", img: destRoma },
  { name: "Cancún", subtitle: "Caribe mexicano", img: destCancun },
  { name: "Bariloche", subtitle: "Neve e aventura", img: destBariloche },
  { name: "Chile", subtitle: "Andes e vinícolas", img: destChile },
];

const NATIONAL = [
  { name: "Fernando de Noronha", subtitle: "Paraíso ecológico", img: destNoronha },
  { name: "Gramado", subtitle: "Charme europeu", img: destGramado },
  { name: "Jericoacoara", subtitle: "Dunas e lagoas", img: destJeri },
  { name: "Aracaju", subtitle: "Sol e cultura", img: destAracaju },
  { name: "Vitória", subtitle: "Capital capixaba", img: destVitoria },
  { name: "Porto de Galinhas", subtitle: "Piscinas naturais", img: destGalinhas },
  { name: "Maragogi", subtitle: "Caribe brasileiro", img: destMaragogi },
  { name: "Lençóis Maranhenses", subtitle: "Dunas e lagoas cristalinas", img: destLencois },
];

interface CarouselProps {
  destinations: typeof INTERNATIONAL;
  title: string;
  subtitle: string;
  icon: string;
}

const DestinationCarousel = ({ destinations, title, subtitle, icon }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const visibleCount = typeof window !== "undefined" && window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const maxIndex = Math.max(0, destinations.length - visibleCount);

  const next = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);
  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">{icon}</span>
        <div>
          <p className="text-accent font-medium tracking-[0.15em] uppercase text-xs mb-1">{subtitle}</p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{title}</h3>
        </div>
      </div>

      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
          >
            {destinations.map((d) => (
              <div
                key={d.name}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group/card cursor-pointer shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition-shadow duration-500">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover/card:scale-110"
                    loading="lazy"
                    width={800}
                    height={1024}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,15%)] via-[hsl(222,47%,15%)]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="font-display text-2xl font-bold text-white mb-1">{d.name}</h4>
                    <p className="text-white/70 text-sm mb-4">{d.subtitle}</p>
                    <a
                      href="https://wa.me/5527995907759"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-orange text-white px-5 py-2.5 rounded-lg text-sm font-semibold opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 hover:shadow-lg"
                    >
                      Quero conhecer
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav buttons */}
        <button
          onClick={prev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg shadow-black/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg shadow-black/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-8" : "bg-primary/20 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const DestinationsSection = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="destinos" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div ref={titleRef} className="text-center mb-16 animate-on-scroll">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Explore o mundo</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Destinos <span className="text-gradient-blue">Incríveis</span>
          </h2>
        </div>

        <DestinationCarousel
          destinations={INTERNATIONAL}
          title="Destinos Internacionais"
          subtitle="Explore o mundo"
          icon="✈️"
        />
        <DestinationCarousel
          destinations={NATIONAL}
          title="Destinos Nacionais"
          subtitle="O melhor do Brasil"
          icon="🇧🇷"
        />
      </div>
    </section>
  );
};

export default DestinationsSection;
