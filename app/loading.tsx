import React from 'react'
import {PuffLoader} from 'react-spinners'
export default function Loading() {
  return (
    <div className='min-h-screen bg-slate-800'>
        <div className='h-[70vh] flex flex-col justify-center items-center '>
            <PuffLoader 
            size={80}
            color='white'/>
        </div>
    </div>
  )
}
