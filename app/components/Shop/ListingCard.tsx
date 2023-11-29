import Image from "next/image";
import React from "react";

interface ListingCardProps {
  title: string;
  price: number;
  discount: {
    isDiscounted: boolean;
    amount: number;
  };
}

export default function ListingCard({
  title,
  price,
  discount,
}: ListingCardProps) {
  return (
    <>
      <div className="col-span-1 cursor-pointer group">
        <div className="flex flex-col gap-2 w-full">
          <div className="aspect-square w-full relative overflow-hidden rounded-md">
            <Image
              className="object-cover h-full w-full group-hover:scale-105 transition"
              alt="IranCard"
              src={"/images/token-example.jpg"}
              fill
            />
            <div className="absolute top-3 right-3">
              {discount.isDiscounted && (
                <span className="font-bold text-white">{discount.amount}% OFF</span>
              )}
            </div>
          </div>
          <div className="font-semibold text-lg">{title}</div>
          <div className="font-semibold">${price}</div>
        </div>
      </div>
    </>
  );
}
