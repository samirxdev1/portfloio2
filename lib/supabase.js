
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fackhtfxdjjjqwqqlhhb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhY2todGZ4ZGpqanF3cXFsaGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MTIzOTYsImV4cCI6MjA2OTA4ODM5Nn0.HkISbglPggpxPwGxPHKQDO53x4ckSIOv1LWG2TNakrw';

export const supabase = createClient(supabaseUrl, supabaseKey);