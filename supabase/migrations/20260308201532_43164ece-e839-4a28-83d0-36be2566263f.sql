
-- Table des membres VIP (numérotation 1-100)
CREATE TABLE public.vip_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  member_number INTEGER NOT NULL UNIQUE CHECK (member_number >= 1 AND member_number <= 100),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table des certificats villa
CREATE TABLE public.certificates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cert_number INTEGER NOT NULL UNIQUE CHECK (cert_number >= 1 AND cert_number <= 100),
  villa_name TEXT NOT NULL,
  location TEXT NOT NULL,
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.vip_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- VIP members: anyone can read (for counter), authenticated can insert their own
CREATE POLICY "Anyone can view member count" ON public.vip_members FOR SELECT USING (true);
CREATE POLICY "Authenticated users can register" ON public.vip_members FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Certificates: anyone can read, only creator can insert
CREATE POLICY "Anyone can view certificates" ON public.certificates FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create certificates" ON public.certificates FOR INSERT WITH CHECK (auth.uid() = created_by);

-- Function to get next member number atomically
CREATE OR REPLACE FUNCTION public.get_next_member_number()
RETURNS INTEGER
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(MAX(member_number), 0) + 1 FROM public.vip_members;
$$;
