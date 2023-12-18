"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
export default function Heading({ title, subtitle, center }: HeadingProps) {
  return (
    <>
      <div className={`${center ? "text-center" : `text-start`} text-white`}>
        <div className="text-2xl font-bold">{title}</div>
        <div className="font-ligt text-neutral-100 mt-2">{subtitle}</div>
      </div>
    </>
  );
}
