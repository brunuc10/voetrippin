import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ClipboardList, Sparkles, Wallet, Map } from "lucide-react";

const beneficios = [
  { icon: Wallet, title: "Mais barato", text: "Encontramos as melhores combinações de aéreo, hospedagem e transfer." },
  { icon: Map, title: "Personalizado", text: "Roteiro feito sob medida para o seu perfil, ritmo e orçamento." },
  { icon: Sparkles, title: "Sem dor de cabeça", text: "Cuidamos de toda a logística para você só se preocupar em aproveitar." },
];

const Planejamento = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-gradient-blue">
              Planejamos sua viagem do jeito mais barato e inteligente
            </h1>
            <p className="text-lg text-foreground/70">
              Conte com nossa equipe especialista para montar uma viagem completa, com economia real e experiências que cabem no seu bolso.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {beneficios.map((b) => (
              <Card key={b.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-orange flex items-center justify-center mb-4">
                    <b.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-display text-xl font-semibold mb-2">{b.title}</h2>
                  <p className="text-foreground/70 text-sm">{b.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5527995907759"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(142,70%,45%)] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-gradient-orange text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
            >
              <ClipboardList className="w-5 h-5" />
              Solicitar planejamento
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <FloatingCTA />
    </div>
  );
};

export default Planejamento;
