'use client'
//this component is created to protect the ClientSide Components from dehydration
// it checks whether it is mounted and if so then demonstrate the Content

import { useEffect, useState } from "react"

interface ClientOnlyProps{
    children: React.ReactNode;
}

export default function ClientOnly({children}: ClientOnlyProps) {
    const [isMounted , setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null;
    }
  return (
    <>
    {children}
    </>
  )
}
