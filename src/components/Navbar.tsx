import { useState, useEffect } from "react";
import logoTrippin from "@/assets/logo-trippin.png";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Diferencial", href: "#diferenciais" },
  { label: "Destinos", href: "#destinos" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Orçamento", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#hero">
          <img src={logoTrippin} alt="VoeTrippin Logo" className="w-16 h-16 object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5527995907759"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-orange text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container mx-auto py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5527995907759"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-orange text-white px-5 py-3 rounded-xl text-sm font-semibold text-center hover:shadow-lg transition-all"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
