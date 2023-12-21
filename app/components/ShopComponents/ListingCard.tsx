'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React , {useEffect , useState} from "react";
import useUserState from "@/app/hooks/useUserState";
import useLoginModal from "@/app/hooks/useLoginModal";
import {MdDiscount} from 'react-icons/md';
interface ListingCardProps {
  itemId: string;
  title: string;
  price: number | string;
  imageSrc: string;
  discount: {
    isDiscounted: boolean;
    amount: number;
    discountedPrice: string;
  };
}

export default function ListingCard({
  itemId,
  title,
  price,
  discount,
  imageSrc,
}: ListingCardProps) {

  const router = useRouter()
  const userState = useUserState()
  const LoginModal = useLoginModal();
  console.log("userName in Listings" , userState.userName);
  // this state checks if the user is logged out again then the Items are not available to buy so the LoginModal will pop up
  const [userExist,setUserExist] = useState<string | undefined>(userState.userName);
  useEffect(() => {
    setUserExist(userState.userName)
  },[userState.userName])
  return (
    <>
      <div className="col-span-1 cursor-pointer group bg-gradient-to-t from-[#1f2a3d] to-[#112242] text-white hover:shadow-white shadow-lg hover:to-white hover:text-white p-3 rounded-lg transition"
      onClick={() => {
        if(userExist){
        router.push(`Items/${itemId}`)
      }
      else{
        LoginModal.onOpen()
      }}}>
        <div className="flex flex-col gap-2 w-full">
          <div className="aspect-square w-full relative overflow-hidden rounded-md">
            <Image
              className="object-cover h-full w-full group-hover:scale-105 transition"
              alt="IranCard"
              src={imageSrc}
              fill
            />
            <div className=" absolute top-3 right-3">
              {discount.isDiscounted && (
                <div className="bg-red-600/70  flex flex-row items-center justify-center rounded-lg p-1">
                  <MdDiscount size={20} className=" text-white font-bold"/>
                  <span className='font-bold pb-1 text-white'>%{discount.amount}</span>
                  
                </div>
              )}
            </div>
          </div>
          <div className="font-semibold text-lg">{title}</div>
          <div className="  font-semibold"><span className={`${discount.isDiscounted ? `line-through text-gray-400` : ``}`}>{price}</span> تومان 
          {discount.isDiscounted && (<span>{discount.discountedPrice}</span>)}
          </div>
        </div>
      </div>
    </>
  );
}
