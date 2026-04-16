import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Compass, Calendar, Plane, AlertTriangle } from "lucide-react";

const sections = [
  {
    icon: Compass,
    title: "Como escolher um destino barato",
    text: "Pesquise destinos com baixa temporada, moeda favorável ao real e voos com boas conexões. Cidades menos turísticas costumam ter custos muito menores.",
  },
  {
    icon: Calendar,
    title: "Quando viajar pagando menos",
    text: "Evite feriados e alta temporada. Voos no meio da semana (terça e quarta) costumam ser até 40% mais baratos que finais de semana.",
  },
  {
    icon: Plane,
    title: "Como comprar passagens corretamente",
    text: "Use modo anônimo, compare múltiplos sites, ative alertas de preço e considere voos com escala. Compre com 2 a 4 meses de antecedência para internacionais.",
  },
  {
    icon: AlertTriangle,
    title: "Erros comuns ao viajar",
    text: "Não comprar seguro viagem, deixar tudo para a última hora, ignorar a documentação necessária e não pesquisar sobre cultura e clima do destino.",
  },
];

const Comecar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-gradient-blue">
              Nunca viajei — por onde começo?
            </h1>
            <p className="text-lg text-foreground/70">
              Um guia simples e direto para você dar o primeiro passo na sua jornada de viagens, mesmo sem nenhuma experiência.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sections.map((s) => (
              <Card key={s.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold mb-3">{s.title}</h2>
                  <p className="text-foreground/70 leading-relaxed">{s.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/planejamento"
              className="inline-block bg-gradient-orange text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
            >
              Quero ajuda para montar minha viagem
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <FloatingCTA />
    </div>
  );
};

export default Comecar;
