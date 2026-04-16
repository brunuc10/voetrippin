import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const FloatingCTA = () => (
  <Link
    to="/comecar"
    className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 bg-gradient-orange text-white px-4 py-3 md:px-5 md:py-3 rounded-full shadow-lg shadow-accent/30 hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm font-semibold"
    aria-label="Quero viajar pagando menos"
  >
    <Sparkles className="w-4 h-4" />
    <span className="hidden sm:inline">Quero viajar pagando menos</span>
    <span className="sm:hidden">Viajar barato</span>
  </Link>
);

export default FloatingCTA;
