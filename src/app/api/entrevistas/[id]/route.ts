import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const { data: interview, error } = await supabase
      .from('interviews')
      .select('*')
      .eq('id', id)
      .order('created_at', { ascending: false })
      .single();

    if (error) {
      throw new Error(error.message);
    }

    if (!interview) {
      return NextResponse.json({ error: 'Entrevista no encontrada' }, { status: 404 });
    }

    return NextResponse.json(interview);
  } catch (error: any) {
    console.error('Error fetching interview:', error.message);
    return NextResponse.json({ error: 'Error fetching interview' }, { status: 500 });
  }
}
