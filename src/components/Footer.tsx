import { MessageCircle, Instagram, MapPin } from "lucide-react";

const WHATSAPP_NUMBERS = [
  { label: "Atendimento 1", number: "5527995907759" },
  { label: "Atendimento 2", number: "5527999257759" },
  { label: "Atendimento 3", number: "5527997447759" },
];

const Footer = () => (
  <footer className="border-t border-border bg-[hsl(222,47%,15%)]">
    <div className="container mx-auto section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-display text-2xl font-bold text-gradient-orange mb-4">VoeTrippin</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Transformamos viagens em experiências inesquecíveis. Sua próxima aventura começa aqui.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white/90">Links Rápidos</h4>
          <div className="flex flex-col gap-2">
            {["Início", "Diferenciais", "Destinos", "Depoimentos", "Contato"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-white/50 text-sm hover:text-accent transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white/90">Fale Conosco</h4>
          <div className="flex flex-col gap-3">
            {WHATSAPP_NUMBERS.map((w) => (
              <a
                key={w.number}
                href={`https://wa.me/${w.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-accent transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {w.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/voetrippin7/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
              <Instagram className="w-5 h-5 text-accent" />
            </a>
            <a href="https://share.google/c2Tn6hgbfa1sSe78l" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
              <MapPin className="w-5 h-5 text-accent" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} VoeTrippin. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
