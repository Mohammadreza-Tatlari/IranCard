"use client";
import { useState , useEffect} from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";

interface PurchaseProps {
  title?: string;
  price?: number;
  id?: string;
  discountAmount?: number;
}

enum STEPS {
  PurchaseFactor = 0,
  Authentication = 1,
}

export default function PurchaseModal({
  title,
  price,
  id,
  discountAmount,
}: PurchaseProps) {

  const router = useRouter();
  //for registeration will be used
  const [isLoading, setIsloading] = useState(false);
  const [step, setStep] = useState(STEPS.Authentication);

  //needs revision this useEffect cleanup the states when user close the Component
  useEffect(() => {
    return () => {
      setStep(0);
      setIsloading(false)
    }
  }, [])
  
  let bodyContent;

  if (step == STEPS.PurchaseFactor) {
    bodyContent = (
      <>
        {/* body */}
        <div className="relative p-6 flex-auto">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <div className="text-lg font-thin">اطلاعات نهایی خرید</div>
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
          <Button
            label="احراض حویت"
            onClick={() => {
              setStep(STEPS.Authentication);
            }}
          />
        </div>
      </>
    );
  }

  if (step == STEPS.Authentication) {
    bodyContent = (
      <>
        <div className="relative p-6 flex-auto">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <div className="text-lg font-thin">احراض حویت</div>
            </div>
          </div>
          <div>INPUT</div>
          <div className="flex flex-row items-center gap-4 w-full justify-center">
            <Button
              label="بازگشت به مرحله قبل"
              onClick={() => {
                setStep(STEPS.PurchaseFactor);
              }}
            />
            <Button
              usedIn="PaymentPage"
              label="تکمیل و پرداخت"
              onClick={() => {
                console.log("finalized Purchase");
              }}
            />
          </div>
        </div>

        {/* <div>AUTHENTICATION STEP</div>
        <div className="flex flex-row items-center gap-4 w-full justify-center">
          <button>1</button>
          <button>2</button>
        </div> */}
      </>
    );
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm bg-neutral-700/60">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          <div className="duration-300 h-fulltranslate-y-0 opacity-100">
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header Start */}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                  onClick={() => {
                    console.log("close Purchase is clicked");
                    router.push('/Shop')

                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
                  </svg>
                </button>
                <div className=" font-semibold text-2xl">
                  خرید خود را نهایی کنید
                </div>
              </div>
              {bodyContent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
