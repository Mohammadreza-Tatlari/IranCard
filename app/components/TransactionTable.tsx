import React from "react";

const sampleTransaction = [
  {
    ID: 12323123123,
    date: "23-4-2022",
    usedBy: "Someone",
    code: "21213323",
    amount: "40000",
  },
  {
    ID: 2,
    date: "23-4-2022",
    usedBy: "Someone with very very long name",
    code: "232123213213233",
    amount: "40000",
  },
  {
    ID: 3,
    date: "23-4-2022",
    usedBy: "Someone with long name",
    code: "2312312323",
    amount: "500",
  },
  {
    ID: 455655656555,
    date: "23-4-2022",
    usedBy: "Someone",
    code: "2321231231232131233",
    amount: "40000",
  },
  {
    ID: 5,
    date: "23-4-2022",
    usedBy: "Someone",
    code: "2323",
    amount: "2000",
  },
];

export default function TransactionTable() {
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
                {sampleTransaction.map((data) => (
                  <>
                    <tr
                      key={data.ID}
                      className="even:bg-slate-800 odd:bg-slate-900/10 text-slate-400 border-b border-slate-700"
                    >
                      <td className="p-2 text-center ">{data.ID}</td>
                      <td className="p-2 text-center ">{data.date}</td>
                      <td className="p-2 text-center ">{data.usedBy}</td>
                      <td className="p-2 text-center ">{data.amount}</td>
                      <td className="p-2 py-4 text-center ">{data.code}</td>
                      <td>
                        <button className="bg-slate-900 text-white rounded-md px-4 py-2 ">
                          دریافت دوباره کد
                        </button>
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
