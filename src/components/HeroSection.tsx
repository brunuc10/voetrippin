import heroBg from "@/assets/hero-bg2.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Destino paradisíaco" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,15%)]/80 via-[hsl(222,47%,15%)]/60 to-[hsl(222,47%,15%)]/90" />
    </div>

    <div className="relative z-10 container mx-auto text-center px-4 py-32">
      <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Agência de Viagens Premium
      </p>
      <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up leading-tight tracking-tight" style={{ animationDelay: "0.3s" }}>
        Transformamos viagens em{" "}
        <span className="text-gradient-orange">experiências inesquecíveis</span>
      </h1>
      <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-up font-light" style={{ animationDelay: "0.5s" }}>
        Pacotes exclusivos, atendimento personalizado e suporte completo — início, meio e fim
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.7s" }}>
        <a
          href="https://wa.me/5527995907759"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[hsl(30,78%,63%)]/25 hover:-translate-y-0.5 transition-all duration-300"
        >
          Fale com um especialista
        </a>
        <a
          href="#destinos"
          className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
        >
          Ver destinos
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-accent rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
