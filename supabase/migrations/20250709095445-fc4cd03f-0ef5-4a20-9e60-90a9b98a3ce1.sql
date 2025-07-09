
-- Create sites table to manage multiple websites
CREATE TABLE public.sites (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  label text NOT NULL,
  domain text,
  description text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Insert a record for MRAT Rental website
INSERT INTO public.sites (name, label, description) 
VALUES ('MRAT Vehicle Rental', 'mrat-rental', 'Vehicle rental website for MRAT');

-- Create contact form submissions table
CREATE TABLE public.contact_form_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id uuid NOT NULL REFERENCES public.sites(id),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create booking form submissions table
CREATE TABLE public.booking_form_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id uuid NOT NULL REFERENCES public.sites(id),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  vehicle_preference text,
  pickup_date date,
  return_date date,
  pickup_location text,
  return_location text,
  additional_notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create newsletter subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id uuid NOT NULL REFERENCES public.sites(id),
  email text NOT NULL,
  name text,
  source text,
  status text NOT NULL DEFAULT 'active',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Add RLS policies for contact form submissions
ALTER TABLE public.contact_form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_form_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Contact forms are readable by authenticated users" 
ON public.contact_form_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Add RLS policies for booking form submissions
ALTER TABLE public.booking_form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit booking forms" 
ON public.booking_form_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Booking forms are readable by authenticated users" 
ON public.booking_form_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Add RLS policies for newsletter subscriptions
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscriptions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Newsletter subscriptions are readable by authenticated users" 
ON public.newsletter_subscriptions 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Add RLS policy for sites table
ALTER TABLE public.sites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Sites are publicly readable" 
ON public.sites 
FOR SELECT 
USING (true);

-- Create trigger to update updated_at column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at columns
CREATE TRIGGER update_sites_updated_at 
  BEFORE UPDATE ON public.sites 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_form_submissions_updated_at 
  BEFORE UPDATE ON public.contact_form_submissions 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_booking_form_submissions_updated_at 
  BEFORE UPDATE ON public.booking_form_submissions 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_newsletter_subscriptions_updated_at 
  BEFORE UPDATE ON public.newsletter_subscriptions 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
