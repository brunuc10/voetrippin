import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5500000000001"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-lg shadow-[hsl(142,70%,45%)]/30 hover:scale-110 transition-transform"
    aria-label="Fale pelo WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-foreground" />
  </a>
);

export default WhatsAppFloat;
