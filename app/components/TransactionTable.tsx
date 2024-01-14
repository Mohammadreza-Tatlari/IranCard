"use client"

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useUserState from "../hooks/useUserState";
import { toast } from "react-hot-toast";

export default function TransactionTable() {

  const [transactionData,setTransactionData] = useState<Array<any>>([])
  const initilized = useRef(false)
  const userState = useUserState()
  
  const jwtToken = userState.userJWT;
  
  useEffect(() => {
    if (!!initilized.current) return
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_IRANMTAURL}/shop/fetchTransactions`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          }
        )
        setTransactionData(response.data.map(code => {
          const date = new Date(code.datecreated)
          code.datecreated = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
          return code
        }))
      } catch (error) {
        console.error(error)
      }
    }
    initilized.current = true
    fetchData()
  },[])

  const requestCode = async (code) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IRANMTAURL}/shop/requestResend?id=${code}`,
        undefined,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        }
      )
      if (response.data == true) {
        toast.success("کد با موفقیت برای شما ارسال شد.")
      }else {
        toast.error("شما هر یک ساعت یکبار میتوانید این درخواست را بکنید.")
      }
    } catch (error) {
      toast.error("مشکلی در هنگام ایجاد درخواست به وجود آمد.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-slate-950 to-slate-800">
      <div className="p-10">
        <div className="relative rounded-xl overflow-auto bg-[#131B2E]">
          <div className="shadow-sm overflow-hidden my-1">
            <table dir="rtl" className="border-collapse table-auto w-full">
              <caption className="caption-bottom text-slate-300/80 py-2">آخرین تراکنش ها</caption>
              <thead >
                <tr className=" text-white ">
                  <td className="p-2 pl-4 text-center">شماره سفارش</td>
                  <td className="p-2 text-center"> تاریخ خرید</td>
                  <td className="p-2 text-center">استفاده کننده</td>
                  <td className="p-2 text-center">مقدار گلد</td>
                  <td className="p-2 text-center">کد گلد</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className="bg-slate-800">
                {transactionData.map((data) => (
                  <>
                    <tr
                      key={data.id}
                      className="even:bg-slate-800 odd:bg-slate-900/10 text-slate-400 border-b border-slate-700"
                    >
                      <td className="p-2 text-center ">{data.id}</td>
                      <td className="p-2 text-center ">
                        {data.datecreated}
                      </td>
                      <td className="p-2 text-center ">{data.pName ?? 'No-One'}</td>
                      <td className="p-2 text-center ">{data.value}</td>
                      <td className="p-2 py-4 text-center ">{data.code}</td>
                      <td>
                        {data.pName == null && (
                          <button className="bg-slate-900 text-white rounded-md px-4 py-2 " onClick={() => requestCode(data.id)}>
                            دریافت دوباره کد
                          </button>
                        )}
                      </td>
                      <hr />
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
