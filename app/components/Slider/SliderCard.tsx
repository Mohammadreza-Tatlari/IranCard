import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import useUserState from "@/app/hooks/useUserState";
import { MdDiscount } from "react-icons/md";
interface SliderCardProps {
  imageSrc: string;
  itemId: string;
  discount: number;
  isOff: boolean
}
export default function SliderCard({
  imageSrc,
  itemId,
  discount,
  isOff
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

  console.log(`Off? ${isOff} ${discount}`)

  return (
    <>
      <div
        className="cursor-pointer hover:shadow-white shadow-lg rounded-lg transition"
        onClick={() => {
          if (userExist) {
            router.push(`Items/${itemId}?off=${isOff}`);
          } else {
            LoginModal.onOpen();
          }
        }}
      >
        <div className="relative">
          <img alt="IRANMTA-Slide" src={`/slides/${(isOff == true) ? 'off_' : ''}${+itemId}.png`} className="w-full " />
          <div className=" absolute top-3 right-3">
            {(isOff == true && discount > 0) && (
              <div className="bg-red-600/70  flex flex-row items-center justify-center rounded-lg p-1">
                <MdDiscount size={20} className=" text-white font-bold" />
                <span className="font-bold pb-1 text-white">
                  %{discount}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
