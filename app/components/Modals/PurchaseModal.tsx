'use client'
import { useState } from "react";
import Button from "../Button";

interface PurchaseProps{
    title?: string;
    price?: number;
    id?: string;
    discountAmount?: number;
}

enum STEPS {
    PurchaseFactor= 0,
    Authentication= 1,
}

export default function PurchaseModal({
    title,
    price,
    id,
    discountAmount
}:PurchaseProps) {
  
    const [step , setStep] = useState(STEPS.Authentication);

  return (
    <>

    {(step == STEPS.PurchaseFactor) && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm bg-neutral-700/60">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          <div className="duration-300 h-fulltranslate-y-0 opacity-100">
            {/* Header Start */}
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>
                </button>
                <div className=" font-semibold text-2xl">خرید خود را نهایی کنید</div>
              </div>
              {/* body */}
              <div className="relative p-6 flex-auto">
                <div className="flex flex-col gap-8">
                  <div className="text-center">
                    <div className="text-lg font-thin">
                    اطلاعات نهایی خرید
                    </div>
                  </div>
                  {/* List of purchase details */}
                  <div className=" flex flex-row items-center justify-between">
                    <div className="">نام محصول</div>
                    <div className="">{title}</div>
                  </div>
                  <hr />
                  <div className=" flex flex-row items-center justify-between">
                    <div className="">قیمت محصول</div>
                    <div className="">{price}</div>
                  </div>
                  <hr />
                  <div className=" flex flex-row items-center justify-between">
                    <div className="">میزان تخفیف</div>
                    <div className="">{discountAmount}</div>
                  </div>
                  <hr />
                  <div className=" flex flex-row items-center justify-between">
                    <div className="">شناسه محصول</div>
                    <div className="">{id}</div>
                  </div>
                </div>
              </div>
              {/* Footer and Buttons */}
              <div className="flex justify-center gap-2 p-6">
                <Button label="احراض حویت" onClick={() => {console.log("Purchase Clicked");
                }}/>
              </div>
            </div>
          </div>
        </div>
        </div>
    )}
    {(step == STEPS.Authentication) && (
        <div>AUTHENTICATION STEP</div>
    )}
      </>
  )
}
