"use server"

import prisma from "../../../lib/prisma";
import { ActionState } from "../assets/definitions";
import bcrypt from 'bcrypt'
import { createExpertSession, deleteExpertSession } from "../auth/expertSessionAuth";
import { redirect } from "next/navigation";
import { tr } from "zod/locales";


export async function handleExpertLogin(prevState:ActionState|null,data:FormData)
{
    const email = data.get('email')
    const password = data.get('password')

    if(!email || !password)
    {
        return{
            success:false,
            error:"veuillez entrer un email et/ou un mot de passe "
        }
    }

    const savedUser = await prisma.expert.findUnique({where:{email:email.toString()}})
    
    if(!savedUser)
    {
        return{
            success:false,
            error:"email et/ou mot de passe incorrect !"
        }
    }
    const isPasswordMatch = await bcrypt.compare(password.toString(),savedUser.password)

    if(!isPasswordMatch)
    {
        return{
            success:false,
            error:'email et/ou mot de pass incorrect !'}
    }
    const expertSessionData = {
        email: savedUser.email
    }

    await createExpertSession(expertSessionData)

    return{
        success: true,
        data:savedUser,
    }
}

export async function handleExpertLogout()
{
    await deleteExpertSession()
    redirect('/admin')
}

export async function getAllHeritages()
{
    try{
        const heritages = await prisma.heritage.findMany()
        return{
            success:true,
            data:heritages
        }
    }catch(error){
        return{
            success:false,
            error:"Une erreur est survenue lors de la récupération des patrimoines."
        }
    }
}