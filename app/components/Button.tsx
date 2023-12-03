'use client'

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    usedIn?: string

}
export default function Button({label, onClick , disabled , usedIn}: ButtonProps) {
  return (
    <>
    <button className={`${usedIn === "PaymentPage" ? `bg-green-600 border-green-600` : `bg-slate-700 border-slate-600`} relative disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-2/3   text-white py-3 text-base font-semibold border-2`}
    disabled={disabled}
    onClick={onClick}>
       {label}
    </button>
    </>
  )
}
