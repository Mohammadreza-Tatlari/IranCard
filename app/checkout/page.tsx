"use client";
import Checkout from "../components/Checkout";
import { useSearchParams } from "next/navigation";

interface pageProps {
  searchParams: {
    id: string | undefined;
    Authority: string | undefined;
    encryptedData: string | undefined;
    Status: string | undefined
  }
}
export default function page({searchParams}: pageProps)
{
    return(
      <>
      <div>
        <Checkout 
        Authority={searchParams.Authority}
        encryptedData={searchParams.encryptedData}
        Status={searchParams.Status} />
      </div>
      </>
    )
  
}
