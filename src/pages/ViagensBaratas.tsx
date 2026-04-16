import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, TrendingDown, Lightbulb } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

import imgSaoThome from "@/assets/dest-sao-thome.jpg";
import imgPraiaRosa from "@/assets/dest-praia-rosa.jpg";
import imgChapada from "@/assets/dest-chapada.jpg";
import imgBonito from "@/assets/dest-bonito.jpg";
import imgMaragogi from "@/assets/dest-maragogi.jpg";
import imgBuenosAires from "@/assets/dest-buenos-aires.jpg";
import imgPortoGalinhas from "@/assets/dest-porto-galinhas.jpg";
import imgFozIguacu from "@/assets/dest-foz-iguacu.jpg";
import imgSantiago from "@/assets/dest-santiago.jpg";
import imgMontevideo from "@/assets/dest-montevideo.jpg";
import imgCartagena from "@/assets/dest-cartagena.jpg";

const IMAGE_MAP: Record<string, string> = {
  "sao-thome": imgSaoThome,
  "praia-rosa": imgPraiaRosa,
  chapada: imgChapada,
  bonito: imgBonito,
  maragogi: imgMaragogi,
  "buenos-aires": imgBuenosAires,
  "porto-galinhas": imgPortoGalinhas,
  "foz-iguacu": imgFozIguacu,
  santiago: imgSantiago,
  montevideo: imgMontevideo,
  cartagena: imgCartagena,
};

type Destination = {
  id: string;
  category: "under_1000" | "month";
  destination: string;
  price: string;
  description: string;
  image_url: string | null;
};

const dicas = [
  "Viaje na baixa temporada e em dias de semana.",
  "Use cartões com milhas para acumular pontos em compras do dia a dia.",
  "Considere destinos próximos para reduzir o custo de transporte.",
  "Reserve hospedagens com cancelamento gratuito e fique de olho nas quedas de preço.",
  "Coma onde os locais comem — é mais barato e autêntico.",
];

const ROTATION_MS = 2 * 60 * 1000; // 2 minutos
const UNDER_1000_VISIBLE = 3;
const MONTH_VISIBLE = 4;

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ViagensBaratas = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [rotationSeed, setRotationSeed] = useState(0);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("cheap_destinations")
        .select("id, category, destination, price, description, image_url")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      if (!error && data) setDestinations(data as Destination[]);
      setLoading(false);
    };
    load();

    const interval = setInterval(() => setRotationSeed((s) => s + 1), ROTATION_MS);
    return () => clearInterval(interval);
  }, []);

  const { baratas, destinosMes } = useMemo(() => {
    const under = destinations.filter((d) => d.category === "under_1000");
    const month = destinations.filter((d) => d.category === "month");
    return {
      baratas: shuffle(under).slice(0, UNDER_1000_VISIBLE),
      destinosMes: shuffle(month).slice(0, MONTH_VISIBLE),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinations, rotationSeed]);

  const renderSkeletons = (count: number, cols: string) => (
    <div className={`grid ${cols} gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-72 rounded-lg" />
      ))}
    </div>
  );

  const renderCard = (d: Destination) => {
    const img = d.image_url ? IMAGE_MAP[d.image_url] : undefined;
    return (
      <Card key={d.id} className="overflow-hidden hover:shadow-lg transition-shadow">
        {img && (
          <img
            src={img}
            alt={d.destination}
            loading="lazy"
            width={1024}
            height={640}
            className="w-full h-44 object-cover"
          />
        )}
        <CardContent className="p-6">
          <h3 className="font-display text-lg font-semibold mb-2">{d.destination}</h3>
          <p className="text-base font-bold text-accent mb-2">{d.price}</p>
          <p className="text-foreground/70 text-sm">{d.description}</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-gradient-blue">
              Viagens Baratas
            </h1>
            <p className="text-lg text-foreground/70">
              Inspiração e ofertas para você viajar gastando menos sem abrir mão de boas experiências. Os destinos em destaque são atualizados automaticamente a cada 2 minutos.
            </p>
          </header>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-semibold">Viagens por menos de R$ 1.000</h2>
            </div>
            {loading ? (
              renderSkeletons(3, "md:grid-cols-3")
            ) : baratas.length === 0 ? (
              <p className="text-foreground/60">Nenhum destino disponível no momento.</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">{baratas.map(renderCard)}</div>
            )}
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-semibold">Destinos baratos do mês</h2>
            </div>
            {loading ? (
              renderSkeletons(4, "md:grid-cols-2 lg:grid-cols-4")
            ) : destinosMes.length === 0 ? (
              <p className="text-foreground/60">Nenhum destino disponível no momento.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{destinosMes.map(renderCard)}</div>
            )}
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-semibold">Dicas para economizar em viagens</h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {dicas.map((d, i) => (
                    <li key={i} className="flex gap-3 text-foreground/80">
                      <span className="text-accent font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <FloatingCTA />
    </div>
  );
};

export default ViagensBaratas;
