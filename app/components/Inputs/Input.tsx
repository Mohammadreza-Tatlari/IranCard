import React from "react";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export default function Input({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
}: InputProps) {
  return (
    <>
      <div className="w-full relative">
      <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          // space is for better floating animation
          placeholder=" "
          type={type}
          className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-60 disabled:cursor-not-allowed pl-4 
        ${errors[id] ? `border-slate-600` : `border-neutral-300`}
        ${errors[id] ? `focus:border-rose-500` : `focus:border-black`}`}
        />
        <label
          className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? `text-rose-600` : `text-zinc-600`}`}
        >
          {label}
        </label>
      </div>
    </>
  );
}
