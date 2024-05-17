'use server'

import { FormValues } from "@/app/login/page"
import { cache } from "react"
import { FieldValues } from "react-hook-form"


export const userLogin = async(data:FieldValues)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data),
        cache: 'no-store'
    })
    const userLogin = await res.json();
    return userLogin;



}