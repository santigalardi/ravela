'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { FormProvider } from '@/components/ContestForm/FormContext';
import { PersonalDataForm } from '@/components/ContestForm/PersonalDataForm';

const ProtectedPage = () => {
  return (
    <section className="mt-36">
      <Header />
      <h2 className="font-title text-3xl font-bold mb-12 text-center">Concurso</h2>
      <h3 className="text-2xl font-bold mb-16 text-center">
        El próximo evento de Ravela será el 26/08 en el Museo de las Mujeres
      </h3>
      <FormProvider>
        <PersonalDataForm />
      </FormProvider>
      <Footer />
    </section>
  );
};

export default ProtectedPage;
