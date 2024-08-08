import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

// Define the type for form data
interface FormData {
  fullName?: string;
  artistName?: string;
  email?: string;
  age?: number | null;
  phoneNumber?: string;
  province?: string;
  instagram?: string;
  soundcloud?: string;
}

interface IFormContext {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
}

const FormContext = createContext<IFormContext>({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0,
});

interface IProps {
  children: ReactNode;
}

export function FormProvider({ children }: IProps) {
  const [formData, setFormData] = useState<FormData>({});
  const [step, setStep] = useState<number>(1);

  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  return (
    <FormContext.Provider value={{ formData, setFormData, onHandleBack, onHandleNext, step }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormState must be used within a FormProvider');
  }
  return context;
}
