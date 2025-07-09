
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useSiteId = () => {
  return useQuery({
    queryKey: ['site-id', 'mrat-rental'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sites')
        .select('id')
        .eq('label', 'mrat-rental')
        .single();
      
      if (error) {
        console.error('Error fetching site ID:', error);
        throw error;
      }
      
      return data.id;
    },
  });
};
