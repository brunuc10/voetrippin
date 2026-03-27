import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Destino paradisíaco" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
    </div>

    <div className="relative z-10 container mx-auto text-center px-4 py-32">
      <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Agência de Viagens Premium
      </p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.3s" }}>
        Transformamos viagens em{" "}
        <span className="text-gradient-gold">experiências inesquecíveis</span>
      </h1>
      <p className="text-foreground/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
        Pacotes exclusivos, atendimento personalizado e suporte completo início, meio e fim
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.7s" }}>
        <a
          href="https://wa.me/5500000000001"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
        >
          Fale com um especialista
        </a>
        <a
          href="#destinos"
          className="border border-primary/50 text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors"
        >
          Ver destinos
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
