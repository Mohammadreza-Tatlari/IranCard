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
  isInputWrong?: boolean;
  InputChanged: () => void;
}

export default function Input({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  errors,
  isInputWrong,
  InputChanged
}: InputProps) {
  return (
    <>
      <div className="w-full relative">
        <div className="flex flex-col gap-4">
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          // space is for better floating animation
          placeholder=" "
          type={type}
          onChange={InputChanged}
          className={` peer w-full p-4 pt-6 font-light bg-slate-800 text-white border-2 rounded-md outline-none transition disabled:opacity-60 disabled:cursor-not-allowed pl-4 
        ${errors[id] ? `border-slate-600` : `border-neutral-700`}
        ${errors[id] ? `focus:border-rose-500` : `focus:border-black`}`}
        />
        <label
          className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${isInputWrong ? `text-rose-600` : `text-zinc-100`}`}
        >
          {label}
        </label>
        </div>
      </div>
    </>
  );
}
