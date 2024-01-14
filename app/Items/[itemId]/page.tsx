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
  const queryParams = new URL(window.location.href)
  
  const itemId = params.itemId;
  const receivedData = dataSample;
  if (!params) {
    return <>NOT FOUND</>;
  }

  const isOff = String(queryParams.searchParams.get('off')) == 'true'
  
  const selectedItem = receivedData.find((item) => item.id === itemId);
  if (selectedItem == undefined) return window.location.href = "/"
  return (
    <>
    <div className="min-h-screen bg-gradient-to-t from-slate-950 to-slate-800">
    <PurchaseModal 
    title={selectedItem?.title}
    price={isOff == true ? selectedItem.discount.discountedPrice : selectedItem?.price}
    discountAmount={selectedItem.discount.amount}
    isOff={isOff}
    id={selectedItem?.id}/>
    </div>
    </>
  );
}
