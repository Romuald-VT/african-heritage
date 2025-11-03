"use client"

import { ActionState } from "@/lib/assets/definitions"
import Link from "next/link"
import { ChangeEvent, Suspense, useActionState, useState } from "react"

interface loginFormProps{

    actionMethod:(state:ActionState|null,formData:FormData)=>ActionState
}

const ExpertLoginForm = ({actionMethod}:loginFormProps) =>{
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [state,formAction,isPending] = useActionState(actionMethod, null)  

    return(
        <main className="max-w-[420px] mx-auto my-10 px-5 py-0">
        <section className="border border-indigo-950 shadow-[0_8px_24px_rgba(0,0,0,0.6)] p-[22px] rounded-[14px] border-solid;" aria-labelledby="login-title">
            <h1 id="login-title" className="text-[22px] text-indigo-700 mt-0 mb-4 mx-0">Connectez Vous</h1>
            <form className="text-[22px] mt-0 mb-4 mx-0" action={formAction} >
                <label className="grid gap-1.5 mb-3;">
                    <span className="text-[18px] text-black">Email</span>
                    <input 
                    type="email" 
                    name="email"  
                    required placeholder="you@example.com"
                    value={email}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value)}}
                    className="w-full px-3 py-2.5 rounded-[10px] border border-[#e5e7eb] dark:border-[#26262b] bg-transparent text-[#111111] dark:text-[#f5f5f7] outline-none transition-all duration-150 focus:border-[#9ca3af] focus:shadow-[0_0_0_3px_rgba(156,163,175,0.25)]"/>
                </label>
                <label className="grid gap-1.5 mb-3;">
                    <span className="text-[18px] text-black">Password</span>
                    <input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value)}}  
                    required placeholder="••••••••"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-[#e5e7eb] dark:border-[#26262b] bg-transparent text-[#111111] dark:text-[#f5f5f7] outline-none transition-all duration-150 focus:border-[#9ca3af] focus:shadow-[0_0_0_3px_rgba(156,163,175,0.25)]"/>
                </label>
                <div className="flex items-center gap-3 mt-1.5">
                    <button className="appearance-none border border-[#e5e7eb]  bg-indigo-500  text-white  px-3.5 py-2.5 rounded-[10px] font-semibold cursor-pointer transition-all duration-150 hover:-translate-y-px hover:brightness-105" type="submit">{isPending?'Connexion...':'Connexion'}</button>
                    <Link className="text-black no-underline hover:text-indigo-500" href="#">Forgot password?</Link>
                </div>
            </form>
        </section>
    </main>
    )
}

export default ExpertLoginForm
