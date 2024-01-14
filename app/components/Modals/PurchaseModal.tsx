"use client";
import { useState, useEffect } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";
import useUserState from "@/app/hooks/useUserState";

interface PurchaseProps {
  title?: string;
  price?: number | string;
  id?: string;
  discountAmount: number;
  isOff: boolean
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
  isOff
}: PurchaseProps) {
  const router = useRouter();
  //for registeration will be used
  const [isLoading, setIsloading] = useState(false);
  const [codeInputValue, setCodeInputValue] = useState("");
  const [step, setStep] = useState(STEPS.Authentication);
  const userState = useUserState()
  //checking and maintaining JWT
  //const isVerified = false; //userState.isVerified
  const jwtToken = userState.userJWT;
  
  //will be replace by actual Errors
  const [CodeErrors, setCodeError] = useState<boolean>(false);
  const [isVerified , setIsVerified] = useState<boolean | undefined>(false) // change this for OTP verification
  const [PhoneError, setPhoneError] = useState<boolean>(false);
  const loginModule = useLoginModal();
  const [timer, setTimer] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(false);
  //form handling
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      phoneNumber: "",
      code: "",
    },
  });
  //it needs to be turned on again
  useEffect(() => {
    setIsVerified(!userState.isVerified)
  },[userState])
  //needs revision this useEffect cleanup the states when user close the Component
  useEffect(() => {
    return () => {
      setStep(0);
      setIsloading(false);
    };
  }, []);

  const handleRequestPayment = async () => {
    setIsloading(true)
    setIsTimerActive(true)
      
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IRANMTAURL}/shop/createTransaction?itemID=${id}`,
        undefined,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        }
      )
      if (response.status === 201) {
        toast.success("در حال ارسال به درگاه")
        if (window !== undefined && window.location !== undefined)
          window.location.href = `https://www.zarinpal.com/pg/StartPay/${response.data.authority}`
      }else 
        throw response
    } catch (error) {
      console.error(error)
    }
    setIsloading(false)
    setIsTimerActive(false)
  }

  const handleSendNumber: SubmitHandler<FieldValues> = async (data) => {
    setIsloading(true);
    setIsTimerActive(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IRANMTAURL}/auth/sendCode`,
        {
          phoneNumber: data.phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            // "Content-Type": "application/json"
          },
        }
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error("شماره معتبر نمی باشد به صفحه ثبت نام هدایت می شود", {
            duration: 3000,
          });
          setTimeout(() => {
            router.push('/');
            loginModule.onOpen();
          },3000)
          return;
        }
      }
      console.error("Error of API call is :", error);
    }
    setIsloading(false);
  };

  const onSubmitCode: SubmitHandler<FieldValues> = async (data) => {
    setIsloading(true);
    const numberifyCOde = parseInt(data.code);
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_IRANMTAURL}/auth/setNumber`,
        {
          phoneNumber: data.phoneNumber,
          code: numberifyCOde,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            // "Content-Type": "application/json"
          },
        }
      );

      if (response.status == 200 || response.data?.message) {
        toast.success(" شماره شما احراض هویت شده است");
        setIsVerified(true);
        //setVerified , verified
        //redirect to payment
        handleRequestPayment()
      } else {
        toast.error("کد ارائه شده درست نمی باشد", { duration: 3000 });
        setCodeError(true);
      }
    } catch (error) {
      console.log("setting Number got error: ", error);
    }
    setIsloading(false);
  };

  //timer for preventing code Spamming
  useEffect(() => {
    let intervalId: any;

    if (isTimerActive) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      setTimer(30);
    };
  }, [isTimerActive]);

  useEffect(() => {
    if (timer === 0) {
      setIsTimerActive(false);
    }
  }, [timer]);

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
              <div className="">{title} توکن</div>
            </div>
            <hr />
            <div className=" flex flex-row items-center justify-between">
              <div className="">قیمت محصول(تومان)</div>
              <div className="">{price}</div>
            </div>
            <hr />
            {(isOff && discountAmount > 0) && (
              <><div className=" flex flex-row items-center justify-between">
                <div className="">میزان تخفیف</div>
                <div className="">%{discountAmount}</div>
              </div><hr /></>
            ) }
            
            <div className=" flex flex-row items-center justify-between">
              <div className="">شناسه محصول</div>
              <div className="">{id}</div>
            </div>
          </div>
        </div>
        {/* Footer and Buttons */}
        <div className="flex justify-center gap-2 p-6">
          <Button
            label="ادامه فرایند"
            onClick={() => {
              if (isVerified) {
                //redirect user to final checkout
                toast.success("شماره شما احراض هویت شده است",{duration: 3000});
                //router.push('/checkout')
                handleRequestPayment()
              } else {
                setStep(STEPS.Authentication);
                toast.success("نیاز به احراض هویت دارید", {
                  style: {
                    border: "1px solid #713200",
                    padding: "16px",
                    color: "#000000",
                  },
                  iconTheme: {
                    primary: "#FFFF00",
                    secondary: "#000000",
                  },
                  duration: 4000,
                });
              }
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
              <div className="text-lg font-semibold">احراض هویت</div>
            </div>
          </div>
          <div>
            <div className="py-10 w-full relative">
              <div className="flex flex-row">
                <div className="w-2/3">
                  <input
                    disabled={isLoading}
                    type="text"
                    id="phoneNumber"
                    {...register("phoneNumber")}
                    onChange={() => {
                      setPhoneError(false);
                    }}
                    placeholder="09123456790"
                    className={`w-full p-4 pt-6 font-light bg-slate-800 text-white border-2 rounded-md outline-none transition disabled:opacity-60 disabled:cursor-not-allowed pl-4
                    ${PhoneError ? `border-slate-600` : `border-neutral-300`}
                    ${
                      PhoneError
                        ? `focus:border-rose-500`
                        : `focus:border-black`
                    }`}
                  />
                  <label
                    className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4
                      peer-placeholder-shown:scale-100
                     ${PhoneError ? `text-rose-600` : `text-zinc-100`}`}
                  >
                    شماره تلفن
                  </label>
                </div>
                <div className="w-1/3 pl-3 justify-center items-center pt-2">
                  <Button
                    disabled={isTimerActive}
                    label={isTimerActive ? `${timer}` : "ارسال کد"}
                    onClick={handleSubmit(handleSendNumber)}
                  />
                </div>
              </div>

              <div className="pt-1 w-1/3">
                <input
                  required
                  disabled={isLoading}
                  type="text"
                  id="code"
                  {...register("code")}
                  value={codeInputValue}
                  placeholder="کد دریافت شده"
                  onChange={(e: any) => {
                    setCodeInputValue(e.target.value);
                    setCodeError(false);
                  }}
                  className={`w-full p-4 pt-6 font-light bg-slate-800 text-white border-2 rounded-md outline-none transition disabled:opacity-60 disabled:cursor-not-allowed 
                    ${CodeErrors ? `text-red-700` : `border-neutral-300`}
                    ${
                      CodeErrors
                        ? `focus:border-rose-500`
                        : `focus:border-black`
                    }`}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 w-full justify-center">
            <Button
              disabled={isLoading}
              label="بازگشت به مرحله قبل"
              onClick={() => {
                setStep(STEPS.PurchaseFactor);
              }}
            />
            <Button
              usedIn="PaymentPage"
              disabled={codeInputValue != "" ? false : true || isLoading}
              label="بررسی و ادامه"
              onClick={
                //checks the code OTP and if it is valid then redirect to final checkout
                handleSubmit(onSubmitCode)
              }
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm bg-neutral-700/60">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          {/* <div className="duration-300 h-full translate-y-0 opacity-100"> */}
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-900 text-white outline-none focus:outline-none">
              {/* Header Start */}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                  onClick={() => {
                    router.push("/");
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
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
