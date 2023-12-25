'use client'
import React from "react";
import useUserState from "../hooks/useUserState";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutLayout({children}: {children: React.ReactNode}){
    const router = useRouter();
    const userState = useUserState()
    const isAuthorized =  userState.userName;

    useEffect(() => {
        if(!isAuthorized){
            router.push('/')
        }
    },)
    return(
        <>
        {children}
        </>
    )
}
