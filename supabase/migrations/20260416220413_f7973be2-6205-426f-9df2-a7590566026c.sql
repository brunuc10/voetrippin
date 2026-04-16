-- Tabela de destinos baratos exibidos na página /viagens-baratas
CREATE TABLE public.cheap_destinations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('under_500', 'month')),
  destination TEXT NOT NULL,
  price TEXT NOT NULL,
  description TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.cheap_destinations ENABLE ROW LEVEL SECURITY;

-- Leitura pública somente dos itens ativos
CREATE POLICY "Public can view active destinations"
ON public.cheap_destinations
FOR SELECT
USING (is_active = true);

-- Função e trigger de updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_cheap_destinations_updated_at
BEFORE UPDATE ON public.cheap_destinations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Seed inicial com os dados que estão hoje na página
INSERT INTO public.cheap_destinations (category, destination, price, description, display_order) VALUES
  ('under_500', 'São Thomé das Letras (MG)', 'A partir de R$ 380', 'Pousada + transporte para 3 dias.', 1),
  ('under_500', 'Praia do Rosa (SC) - baixa temporada', 'A partir de R$ 450', 'Hospedagem simples + ônibus.', 2),
  ('under_500', 'Chapada dos Veadeiros (GO)', 'A partir de R$ 490', 'Camping + trilhas guiadas.', 3),
  ('month', 'Buenos Aires', 'A partir de R$ 1.290', 'Pacote 4 noites com aéreo.', 1),
  ('month', 'Recife + Porto de Galinhas', 'A partir de R$ 980', 'Aéreo + hotel 3 noites.', 2),
  ('month', 'Foz do Iguaçu', 'A partir de R$ 850', 'Aéreo + hotel 4 noites.', 3),
  ('month', 'Santiago do Chile', 'A partir de R$ 1.690', 'Aéreo + hotel 5 noites.', 4);