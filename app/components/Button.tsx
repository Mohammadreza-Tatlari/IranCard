'use client'

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;

}
export default function Button({label, onClick , disabled}: ButtonProps) {
  return (
    <>
    <button className="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition"
    disabled={disabled}
    onClick={onClick}>
       {label}
    </button>
    </>
  )
}
