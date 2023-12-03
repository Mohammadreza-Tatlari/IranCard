"use client";
import { dataSample } from "@/app/components/ShopComponents/Shopping";
import { useRouter } from "next/navigation";
import PurchaseModal from "@/app/components/Modals/PurchaseModal";

interface IParams {
  itemId: string;
  params?: string;
}

enum STEPS{
  FactortCheck = 0,
  Authentication = 1
}

export default function page({ params }: { params: IParams }) {

  // const [step, setStep] = useState(STEPS.FactortCheck);

  const itemId = params.itemId;
  const receivedData = dataSample;
  if (!params) {
    return <>NOT FOUND</>;
  }
  
  const selectedItem = receivedData.find((item) => item.id === itemId);

  return (
    <>
    <PurchaseModal 
    title={selectedItem?.title}
    price={selectedItem?.price}
    discountAmount={selectedItem?.discount.amount}
    id={selectedItem?.id}/>
    </>
  );
}
