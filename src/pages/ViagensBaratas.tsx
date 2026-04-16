import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, TrendingDown, Lightbulb } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Destination = {
  id: string;
  category: "under_500" | "month";
  destination: string;
  price: string;
  description: string;
};

const dicas = [
  "Viaje na baixa temporada e em dias de semana.",
  "Use cartões com milhas para acumular pontos em compras do dia a dia.",
  "Considere destinos próximos para reduzir o custo de transporte.",
  "Reserve hospedagens com cancelamento gratuito e fique de olho nas quedas de preço.",
  "Coma onde os locais comem — é mais barato e autêntico.",
];

const ViagensBaratas = () => {
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
              Inspiração e ofertas para você viajar gastando menos sem abrir mão de boas experiências.
            </p>
          </header>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-semibold">Viagens por menos de R$ 500</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {baratas.map((b) => (
                <Card key={b.destino} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2">{b.destino}</h3>
                    <p className="text-2xl font-bold text-accent mb-2">{b.preco}</p>
                    <p className="text-foreground/70 text-sm">{b.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-semibold">Destinos baratos do mês</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinosMes.map((d) => (
                <Card key={d.destino} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold mb-2">{d.destino}</h3>
                    <p className="text-base font-bold text-accent mb-2">{d.preco}</p>
                    <p className="text-foreground/70 text-sm">{d.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
