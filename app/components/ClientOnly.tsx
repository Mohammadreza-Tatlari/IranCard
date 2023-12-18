'use client'
//this component is created to protect the ClientSide Components from dehydration
// it checks whether it is mounted and if so then demonstrate the Content
import { useEffect, useState } from "react"
import { PuffLoader } from "react-spinners";

interface ClientOnlyProps{
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    const [isMounted , setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[])

    if(!isMounted){
        
        return <PuffLoader size={50} />;
    }
  return (
    <>
    {children}
    </>
  )
}
export default ClientOnly;
