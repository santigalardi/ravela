// InputField.tsx
import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  defaultValue?: string;
  register: any;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  defaultValue,
  register,
  required = false,
}) => {
  return (
    <div className="flex gap-1 flex-col">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        defaultValue={defaultValue}
        {...register(id, { required })}
        className="bg-primary-black h-10 px-4 rounded-md outline-none focus:outline-primary-white autofill:bg-primary-darkgray autofill:text-white"
        required={required}
      />
    </div>
  );
};

export default InputField;
