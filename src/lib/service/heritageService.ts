"use server"
import { ActionState,HeritageDTO } from "../assets/definitions";
import { heritageRegistrationValidator } from "../utils/dataValiators";
import { getUserSession } from "../auth/userSessionAuth";
import prisma from "../../../lib/prisma";


export async function fetchAllHeritages():Promise<ActionState>{

    try{
        const userId = await getUserSession()
        let res = ''
        if(userId?.id)
        {
            res = userId.id
        }
        const allHeritages =  await prisma.heritage.findMany({where:{
            userId:res
        }})

        return{
            success:true,
            data:allHeritages
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

export async function verifyHeritage(heritageName: string):Promise<ActionState>
{
    try{
        if(!heritageName || heritageName.trim() === '') {
            return {
                success:false,
                error: 'heritageName is required'
            }
        }

        const dataUpdated = await prisma.heritage.updateMany({
            where:{
                heritageName:heritageName
            },
            data:{
                isVerified:true
            }
        })
        
        return {
            success:true,
            data: dataUpdated
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

export async function handleHeritageCreation(prevState:ActionState| null,heritageData: FormData):Promise<ActionState>
{
    try{
        const userDataDto ={

            heritageName:String(heritageData.get("heritageName")),
            location:String(heritageData.get("location")),
            description:String(heritageData.get('description')),
            features:String(heritageData.get('features')),
            currentValue:Number(heritageData.get('currentValue'))
        }

        const isValid = await heritageRegistrationValidator(userDataDto)
        if(!isValid)
        {
            return{
                success:false,
                error:`donnee invalide !`
            }
        }
        const userId = await getUserSession()
        let res = ''
        if(userId?.id)
        {
            res = userId.id
        }
        console.log(res)
        if(!res || res == "")
        {
            return{
                success:false,
                error:'vous devez etre connecte pour creer un patrimoine !'
            }
        }

        
        const savedData = await prisma.heritage.create({data:{
            heritageName:userDataDto.heritageName,
            location:userDataDto.location,
            description:userDataDto.description,
            features:userDataDto.features,
            currentValue:userDataDto.currentValue,
            userId:res
        }})

        return{
            success:true,
            data:savedData
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

export async function handleHeritageUpdate( PrevState:ActionState|null,heritageData:FormData):Promise<ActionState>
{
    try{
        const oldHeritageName = heritageData.get("oldHeritageName")?.toString()
        const heritageDto:HeritageDTO = {

            heritageName:String(heritageData.get('heritageName')),
            location:String(heritageData.get('location')),
            description:String(heritageData.get('description')),
            features:String(heritageData.get('features')),
            currentValue:Number(heritageData.get('currentValue'))
        }
        const isValid = await heritageRegistrationValidator(heritageDto)
        if(!isValid || !oldHeritageName)
        {
            return{
                success:false,
                error:`donnee invalide !`
            }
        }

        const updatedData = await prisma.heritage.updateMany({
            where:{
                heritageName:oldHeritageName
            },
            data:{
                heritageName:heritageDto.heritageName,
                location:heritageDto.location,
                description:heritageDto.description,
                features:heritageDto.features,
                currentValue:heritageDto.currentValue
            }
        })

        return{
            success:true,
            data:updatedData
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

export async function handleHeritageDeletion( heritageName:string):Promise<ActionState>
{
    try{
        const deletedData = await prisma.heritage.deleteMany({
            where:{
                heritageName:heritageName
            }
        })

        return{
            success:true,
            data:deletedData
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