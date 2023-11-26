import Image from "next/image";
import React from "react";

export default function ListingCard() {
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
              <span className="font-bold text-white">25% OFF</span>
            </div>
          </div>
          <div className="font-semibold text-lg">TOKEN NAME</div>
        </div>
      </div>
    </>
  );
}
