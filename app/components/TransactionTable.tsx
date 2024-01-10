import React from 'react'

const sampleTransaction =[
    {
        ID: 1,
        date: '23-4-2022',
        usedBy: "Someone",
        code: "2323"
    },
    {
        ID: 2,
        date: '23-4-2022',
        usedBy: "Someone",
        code: "2323"
    },
    {
        ID: 3,
        date: '23-4-2022',
        usedBy: "Someone",
        code: "2323"
    },
    {
        ID: 4,
        date: '23-4-2022',
        usedBy: "Someone",
        code: "2323"
    },
    {
        ID: 5,
        date: '23-4-2022',
        usedBy: "Someone",
        code: "2323"
    },
]

export default function TransactionTable() {
  return (
    <div className='min-h-screen bg-gradient-to-t from-slate-950 to-slate-800'>
        <div className='p-20'>
            <table className='table-auto w-full border-collapse '>
                <thead>
                    <tr className='bg-slate-800 text-white'>
                        <td className='p-2 pl-4'>شماره سفارش</td>
                        <td className='p-2'> تاریخ خرید</td>
                        <td className='p-2'>استفاده کننده</td>
                        <td className='p-2'>کد گلد</td>
                    </tr>
                </thead>
                <tbody>
                    {sampleTransaction.map((data) => (
                        <tr key={data.ID} className='even:bg-slate-400 odd:bg-slate-200'>
                            <td className='p-2 pl-4'>{data.ID}</td>
                            <td className='p-2'>{data.date}</td>
                            <td className='p-2'>{data.usedBy}</td>
                            <td className='p-2'>{data.code}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
