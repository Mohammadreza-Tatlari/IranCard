"use client";
import { dataSample } from "@/app/components/ShopComponents/Shopping";
import { useRouter } from "next/navigation";
import PurchaseModal from "@/app/components/Modals/PurchaseModal";
import { useLayoutEffect } from "react";

interface IParams {
  itemId: string;
  params?: string;
}

enum STEPS{
  FactortCheck = 0,
  Authentication = 1
}

export default function page({ params }: { params: IParams }) {

  const itemId = params.itemId;
  const receivedData = dataSample;
  if (!params) {
    return <>NOT FOUND</>;
  }
  
  const selectedItem = receivedData.find((item) => item.id === itemId);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-t from-slate-950 to-slate-800">
    <PurchaseModal 
    title={selectedItem?.title}
    price={selectedItem?.price}
    discountAmount={selectedItem?.discount.amount}
    id={selectedItem?.id}/>
    </div>
    </>
  );
}
