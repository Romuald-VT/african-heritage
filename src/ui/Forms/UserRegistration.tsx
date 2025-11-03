"use client"

import { handleUserRegistration } from "@/lib/service/UserService"
import { ChangeEvent, Suspense, useActionState, useEffect, useState } from "react"
import {useRouter,useSearchParams} from "next/navigation"


const UserRegistrationForm = ()=>{
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordTwo, setPasswordTwo] = useState("")
    
    const [state, formAction, isPending] = useActionState(handleUserRegistration, null)
    const router = useRouter()
    const params = useSearchParams()

    const redirect = params.get('redirect') || "/panel"

    useEffect(() => {
        if(state?.success)
        {
            console.log('enregistrement reussie redirection vers '+redirect)
            router.replace(redirect);
            router.refresh()
        }
        else{ 
            console.log(state?.error)
        }
    }, [state, router, redirect])



    return(
        <main className=" grid gap-4 px-4 py-12" role="status" aria-live="polite" aria-label="Content is loading">
        <form className="w-full max-w-[420px] grid gap-4" id="registerForm" action={formAction}>
            <h1 className="text-[22px] mt-0 mb-1 mx-0 text-indigo-500 font-semibold">Creez Votre Compte</h1>
            <div className="grid grid-cols-[1fr_1fr] gap-3">
                <label className="grid gap-1.5">
                    <span>Prenom</span>
                    <input type="text" 
                    name="firstname" 
                    autoComplete="given-name" 
                    value={firstname}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFirstname(e.target.value)}}
                    required 
                className="border border-indigo-900 p-1.5 rounded-lg border-solid"/>
                </label>
                <label className="grid gap-1.5" >
                    <span>Nom</span>
                    <input 
                    type="text" 
                    name="lastname" 
                    autoComplete="family-name" 
                    value={lastname}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setLastname(e.target.value)}}
                    required 
                className="border border-indigo-900 p-1.5 rounded-lg border-solid"/>
                </label>
                <label className="col-span-full">
                    <span>Email</span>
                    <input 
                    type="email" 
                    name="email" 
                     value={email}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value)}}
                    autoComplete="email" 
                    required 
                className="border border-indigo-900 p-1.5 rounded-lg border-solid w-full"/>
                </label>
                <label className="grid gap-1.5">
                    <span>Mot de passe</span>
                    <input 
                    type="password" 
                    name="password" 
                     value={password}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value)}}
                    autoComplete="new-password" 
                    required 
                    minLength={8} 
                className="border border-indigo-900 p-1.5 rounded-lg border-solid"/>
                </label>
                <label className="grid gap-1.5">
                    <span>Confirmer Mot de passe</span>
                    <input 
                    type="password" 
                    name="passwordTwo" 
                    value={passwordTwo}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPasswordTwo(e.target.value)}}
                    autoComplete="new-password" 
                    required minLength={8} 
                className="border border-indigo-900 p-1.5 rounded-lg border-solid"/>
                </label>
            </div>
            <p className="text-[#b00020] min-h-5 m-0" id="errorMsg" aria-live="polite"></p>
            <button type="submit" className="text-white font-semibold cursor-pointer px-3.5 py-3 rounded-lg border-0 bg-indigo-600">{isPending?"Inscription...":"Inscrivez Vous"}</button>
        </form>
    </main>
    )
}

const UserRegistration = () => {

    return(
        <Suspense fallback={
            <main className=" min-h-screen grid place-items-center gap-4" 
            role="status" aria-live="polite" aria-label="Content is loading">
                <div className="w-14 h-14 border-[#e6e6e6] border-t-indigo-600 animate-[spin_0.8s_linear_infinite] rounded-[50%] border-4 border-solid motion-reduce:animate-none;" aria-hidden="true"></div>
                <p className="label">Loading…</p>
            </main>}>
            <UserRegistrationForm />
        </Suspense>
    )
}

export default UserRegistration