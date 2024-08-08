import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import { useUser } from '@clerk/nextjs';
import { supabase } from '@/lib/supabase';
import InputField from '@/components/InputField';
import { Loader2 } from 'lucide-react';

type TFormValues = {
  fullName: string;
  artistName: string;
  email: string;
  age: number | null;
  phoneNumber: string;
  province: string;
  instagram: string;
  soundcloud: string;
};

export function PersonalDataForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const user = useUser();
  const { setFormData, formData } = useFormState();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, isValid },
  } = useForm<TFormValues>({
    mode: 'onChange',
    defaultValues: {
      fullName: formData.fullName || '',
      artistName: formData.artistName || '',
      email: formData.email || '',
      age: formData.age || null,
      phoneNumber: formData.phoneNumber || '',
      province: formData.province || '',
      instagram: formData.instagram || '',
      soundcloud: formData.soundcloud || '',
    },
  });

  // Verificar si el usuario ya ha enviado el formulario
  const checkSubmission = async () => {
    setLoading(true);
    if (user.user) {
      const { data, error } = await supabase.from('contest').select('userId').eq('userId', user.user.id);

      if (error) {
        console.error('Error al verificar envío:', error);
        setLoading(false);
        return;
      }

      setHasSubmitted(data.length > 0);
      setLoading(false); // Ocultar el loader después de verificar
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.user) {
      setValue('fullName', user.user.fullName || '');
      setValue('email', user.user.primaryEmailAddress?.emailAddress || '');
      checkSubmission();
    }
  }, [user.user, setValue]);

  const onHandleFormSubmit = async (data: TFormValues) => {
    try {
      if (user.user) {
        // Enviar datos a Supabase
        const { error } = await supabase.from('contest').insert([
          {
            ...data,
            userId: user.user.id,
          },
        ]);

        if (error) {
          throw error;
        }

        setFormData((prev: any) => ({ ...prev, ...data }));
        setHasSubmitted(true);
      }
    } catch (error) {
      console.error('Error al enviar datos a Supabase:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (hasSubmitted) {
    return (
      <div className="flex flex-col items-center gap-8 p-4 md:p-16 border rounded-md border-primary-purple m-10 glass-effect">
        <p className="text-2xl">¡Gracias por participar! 🎉</p>
        <p className="text-xl">Nos contactaremos contigo en los próximos días</p>
        <p className="text-xl">Cualquier duda o consulta podés escribirnos por instagram @ravelaok</p>
      </div>
    );
  }

  return (
    <>
      <form
        className="flex flex-col gap-4 p-4 md:p-16 border rounded-md border-primary-purple m-10 glass-effect"
        onSubmit={handleSubmit(onHandleFormSubmit)}
      >
        <h3 className="text-xl font-bold mb-8">
          Completa este formulario para postularte. <br /> Los seleccionados serán contactados para participar
          oficialmente en el concurso.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField id="fullName" label="Nombre y Apellido" register={register} required={true} />
          <InputField id="artistName" label="Nombre Artístico" register={register} required={true} />
          <InputField id="email" label="Email" register={register} required={true} />
          <InputField id="age" type="number" label="Edad" register={register} required={true} />
          <InputField id="phoneNumber" label="Número de teléfono" register={register} required={true} />
          <InputField id="province" label="Provincia" register={register} required={true} />
          <InputField id="instagram" label="Instagram" register={register} required={true} />
          <InputField id="soundcloud" label="Perfil de Soundcloud" register={register} required={true} />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`mt-8 h-10 px-6 inline-block rounded-md ${!isValid || isSubmitting ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-primary-purple font-semibold text-white'}`}
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
