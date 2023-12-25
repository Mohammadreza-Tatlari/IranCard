'use client'

import useUserState from "@/app/hooks/useUserState"
import { useRouter } from "next/navigation"

export default function ItemsLayout({children}: {children: React.ReactNode}){
    const router = useRouter()
    const userState = useUserState()
    const isAuthorized = userState.userName;

    if(!isAuthorized){
        router.push('/')
    }
    
    return(
        <>
        {children}

        </>
    )
}