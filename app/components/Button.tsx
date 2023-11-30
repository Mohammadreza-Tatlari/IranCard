'use client'

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;

}
export default function Button({label, onClick , disabled}: ButtonProps) {
  return (
    <>
    <button className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-2/3 bg-slate-600 border-slate-600 text-white py-3 text-base font-semibold border-2`}
    disabled={disabled}
    onClick={onClick}>
       {label}
    </button>
    </>
  )
}
