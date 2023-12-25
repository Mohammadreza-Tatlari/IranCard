"use client";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import axios from "axios";
import { stringify } from "querystring";

interface CheckOutParams {
  Authority: string | undefined;
  encryptedData: string | undefined;
  Status: string | undefined;
}
export default function Checkout({
  Authority,
  encryptedData,
  Status,
}: CheckOutParams) {
    const [receivedToken, setReceivedToken] = useState("0000-0000-0000-0000-0000");
    const [transactionID, setTransactionID] = useState('');
  //if Status if OK then requesting for token will occur
  useEffect(() => {
    if (Status === "OK") {
      console.log(`Use Effect Called`)
      handleTransaction();
    }
    
  },[])
  async function handleTransaction() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IRANMTAURL}/shop/paymentComplete`,
        {
          encryptedData: encryptedData,
          authority: Authority,
        }
      );
      
      setReceivedToken(response.data.code)
      setTransactionID(response.data.transactionID);
    } catch (error: any) {
      console.log(error);
      toast.error("مشکلی در هنگام ساخت کد شما به وجود آمده است،")
    }
  }
  if (Status == "NOK") {
    return (
      <>
        <div className="z-49 min-h-screen bg-gradient-to-t from-slate-950 to-slate-800">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-700/60">
            <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
              <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 text-white outline-none focus:outline-none">
                <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                  <Link
                    href={"/"}
                    className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                  >
                    <IoMdClose size={18} />
                  </Link>
                  <div className="text-lg font-semibold text-red-600">
                    تراکنش ناموفق بوده است
                  </div>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col gap-8">
                    <div className="text-center">
                      <div className="text-lg-font-thin ">
                        در صورتی که مبلغ از حساب شما کسر شده باشد، طی ۴۸ ساعت
                        آینده به حساب خود باز خواهد گشت
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2 p-6">
                  در صورت عدم بازگشت مبلغ به پشتیبانی اطلاع دهید
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="z-49 min-h-screen bg-gradient-to-t from-slate-950 to-slate-800">
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-700/60">
          <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 text-white outline-none focus:outline-none">
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <Link
                  href={"/"}
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                >
                  <IoMdClose size={18} />
                </Link>
                <div className="text-lg font-semibold">محصول شما</div>
              </div>
              <div className="relative p-6 flex-auto">
                <div className="flex flex-col gap-8">
                  <div className=" text-center flex flex-row justify-center items-center space-x-2">
                    <div className="relative bg-slate-700 p-1 px-2 rounded-md "><span className="overflow-hidden">{transactionID}</span></div>
                    <div className="text-lg-font-thin">
                      :شناسه پرداخت
                    </div>
                    {' '}
                  </div>
                </div>
                {/* Purchased Token Comes here */}
                <div className="py-10 w-full relative">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <div className="flex bg-slate-300 text-black p-2 rounded-md items-center justify-center w-2/3">
                      {/* needs to be changed */}
                      <span id="text-to-copy">{receivedToken}</span>{" "}
                      {/*KZ34-3sd1-2R13-BGDE-FW20 */}
                    </div>
                    <button
                      className="w-1/3 bg-slate-50 text-black rounded-md border-[1px] border-black py-2 hover:bg-gray-700 hover:text-white transition"
                      onClick={() => {
                        navigator.clipboard.writeText(receivedToken);
                        toast.success("Copied!");
                      }}
                    >
                      COPY
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 p-6">
                این کد به ایمیل شما نیز ارسال شده است
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
