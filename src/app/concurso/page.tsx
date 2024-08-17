'use client';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { FormProvider } from '@/components/ContestForm/FormContext';
import { PersonalDataForm } from '@/components/ContestForm/PersonalDataForm';

const ContestPage = () => {
  return (
    <section
      className="pt-36 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pasillo-2.webp')" }}
    >
      <NavBar />
      <h2 className="font-title text-4xl font-bold mb-12 text-center">Concurso</h2>
      <FormProvider>
        <PersonalDataForm />
      </FormProvider>
      <Footer />
    </section>
  );
};

export default ContestPage;
