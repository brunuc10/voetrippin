ALTER TABLE public.cheap_destinations
  ADD COLUMN IF NOT EXISTS image_url TEXT;

ALTER TABLE public.cheap_destinations
  DROP CONSTRAINT IF EXISTS cheap_destinations_category_check;

ALTER TABLE public.cheap_destinations
  ADD CONSTRAINT cheap_destinations_category_check
  CHECK (category IN ('under_1000', 'month'));