'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { FormProvider } from '@/components/ContestForm/FormContext';
import { PersonalDataForm } from '@/components/ContestForm/PersonalDataForm';

const ContestPage = () => {
  return (
    <section className="mt-36">
      <Header />
      <h2 className="font-title text-3xl font-bold mb-12 text-center">Concurso</h2>
      <FormProvider>
        <PersonalDataForm />
      </FormProvider>
      <Footer />
    </section>
  );
};

export default ContestPage;
