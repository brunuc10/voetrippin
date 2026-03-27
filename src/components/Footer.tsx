import { MessageCircle, Instagram, MapPin } from "lucide-react";

const WHATSAPP_NUMBERS = [
  { label: "Atendimento 1", number: "5500000000001" },
  { label: "Atendimento 2", number: "5500000000002" },
  { label: "Atendimento 3", number: "5500000000003" },
];

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container mx-auto section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">VoeTrippin</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Transformamos viagens em experiências inesquecíveis. Sua próxima aventura começa aqui.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground/90">Links Rápidos</h4>
          <div className="flex flex-col gap-2">
            {["Início", "Diferenciais", "Destinos", "Depoimentos", "Contato"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground/90">Fale Conosco</h4>
          <div className="flex flex-col gap-3">
            {WHATSAPP_NUMBERS.map((w) => (
              <a
                key={w.number}
                href={`https://wa.me/${w.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {w.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} VoeTrippin. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
