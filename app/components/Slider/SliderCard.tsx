import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import useUserState from "@/app/hooks/useUserState";
import { MdDiscount } from "react-icons/md";
interface SliderCardProps {
  imageSrc: string;
  itemId: string;
  discount: {
    isDiscounted: boolean;
    amount: number;
  };
}
export default function SliderCard({
  imageSrc,
  itemId,
  discount,
}: SliderCardProps) {
  const router = useRouter();
  const userState = useUserState();
  const LoginModal = useLoginModal();
  // this state checks if the user is logged out again then the Items are not available to buy so the LoginModal will pop up
  const [userExist, setUserExist] = useState<string | undefined>(
    userState.userName
  );
  useEffect(() => {
    setUserExist(userState.userName);
  }, [userState.userName]);

  return (
    <>
      <div
        className="cursor-pointer hover:shadow-white shadow-lg rounded-lg transition"
        onClick={() => {
          if (userExist) {
            router.push(`Items/${itemId}`);
          } else {
            LoginModal.onOpen();
          }
        }}
      >
        <div className="relative">
          <img alt="IRANMTA-Slide" src={imageSrc} className="w-full " />
          <div className=" absolute top-3 right-3">
            {discount.isDiscounted && (
              <div className="bg-red-600/70  flex flex-row items-center justify-center rounded-lg p-1">
                <MdDiscount size={20} className=" text-white font-bold" />
                <span className="font-bold pb-1 text-white">
                  %{discount.amount}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
