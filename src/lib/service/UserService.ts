"use server"

import {redirect} from 'next/navigation'
import prisma from "../../../lib/prisma";
import { ActionState} from "../assets/definitions";
import { createUserSession, deleteUserSession } from "../auth/userSessionAuth";
import { userRegistrationValidator } from "../utils/dataValiators";
import bcrypt from 'bcrypt'

export async function handleUserRegistration(prevState:ActionState|null, data:FormData):Promise<ActionState>
{
    try{
        const confirmedPassword = data.get('passwordTwo')
        const password = data.get("password")
        if(confirmedPassword!=password)
        {
            return{
                success:false,
                error:'les mot de passes ne correspondent pas !'
            }
        }
        const userData = {
            firstname: String(data.get('firstname')),
            lastname: String(data.get('lastname')),
            email:String(data.get('email')),
            password:String(password)
        }
        const validationResult = await userRegistrationValidator(userData)
        
        if(validationResult.error)
        {
            return {
                success:false,
                error:validationResult.error.message
            }
        }
        
        const existingUser = await prisma.user.findUnique({ where: { email: userData.email } })
        if (existingUser) {
            return {
                success: false,
                error: 'Un utilisateur avec cet email existe déjà.'
            }
        }
        const salt = await bcrypt.genSalt(10)
        userData.password = await bcrypt.hash(userData.password, salt)
        const savedData = await prisma.user.create({
            data: {
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email,
                password: userData.password,
                heritages: { create: [] },
                isLoggedIn: true
            }
        })
        
        const userSessionData = {
            id:savedData.id
        }

        await createUserSession(userSessionData)
        return{
            success:true,
            data:savedData
        }
    }
    catch(error:unknown)
    {
        return{
            success:false,
            error:`erreur: ${error}`
        }
    }
}


export async function handleUserLogin(prevState:ActionState|null,formData:FormData):Promise<ActionState>
{
    const email = formData.get('email')
    const password = formData.get('password')

    if(!email || !password)
    {
        return {
            success:false,
            error:'veuillez entrer un login et/ou un mot de passe'
        }
    }

    const savedUser = await prisma.user.findUnique({where:{email:email.toString()}})

    if(!savedUser)
    {
        return {
            success:false,
            error:"utilisateur et ou mot de passe incorrect !"
        }
    }

    const isPasswordMatch = await bcrypt.compare(password.toString() , savedUser.password)
    console.log(isPasswordMatch)

    if(!isPasswordMatch)
    {
        return{
            success:false,
            error:'email et/ ou mot de passe incorrect !'
        }
    }
    
    const userSessionData = {
        id:savedUser.id
    }
    await createUserSession(userSessionData)

    return{
        success:true,
        data:savedUser
    }
}

export async function handleUserDeletion(email:string):Promise<ActionState>
{
    if(!email)
    {
        return {
            success:false,
            error:'email est requis'
        }
    }
   const deletedUser= await prisma.user.delete({ where: { email } })
    return{
        success:true,
        data:deletedUser
    }
}

export async function handleLogout()
{
    await deleteUserSession()
    redirect('/login')
}

export async function getAllUsers():Promise<ActionState>
{
    try{
        const allUsers =  await prisma.user.findMany({include:{heritages:true}})
        return{
            success:true,
            data:allUsers
        }
    }
    catch(error)
    {
        return {
            success:false,
            error:`erreur: ${error}`
        }   
    }
}
export async function deleteUser(email:string):Promise<ActionState>
{
    try{
        const deleteUser = await prisma.user.deleteMany({where:{email:email}})

        return {
            success:true,
            data:deleteUser
        }
    }
    catch(error)
    {
        return{
            success:false,
            error:error as string
        }
    }
}