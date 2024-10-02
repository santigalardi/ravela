import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase'; // Importa tu cliente de Supabase

export async function GET() {
  try {
    // Consulta todas las entrevistas de la tabla 'entrevistas'
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(interviews);
  } catch (error: any) {
    console.error('Error fetching interviews:', error.message);
    return NextResponse.json({ error: 'Error fetching interviews' }, { status: 500 });
  }
}
