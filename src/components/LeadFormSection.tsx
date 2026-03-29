import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const LeadFormSection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Nome é obrigatório";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) e.phone = "Telefone inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const { error } = await supabase.from('leads').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error("Erro ao enviar lead:", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contato" className="section-padding">
        <div className="container mx-auto max-w-xl text-center">
          <div className="glass-card rounded-2xl p-12">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">Obrigado!</h3>
            <p className="text-muted-foreground">Em breve um especialista entrará em contato com você.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto max-w-xl">
        <div ref={ref} className="text-center mb-12 animate-on-scroll">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Solicite seu orçamento</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Comece sua <span className="text-gradient-blue">próxima aventura</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
          {(["name", "email", "phone"] as const).map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-2 text-foreground/80">
                {field === "name" ? "Nome completo" : field === "email" ? "E-mail" : "Telefone"}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full bg-white border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
                placeholder={field === "name" ? "Seu nome" : field === "email" ? "seu@email.com" : "(00) 00000-0000"}
              />
              {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-blue text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <Send className="w-5 h-5" />
            {loading ? "Enviando..." : "Quero meu orçamento"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadFormSection;
