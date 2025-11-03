import { PrismaClient } from "@/generated/prisma/client";
import { tableData, } from "@/lib/assets/data";
import { Expert } from "@/lib/assets/definitions";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()
const expert:Expert = {

    email:'admin@africaheritage.com',
    password:'admin0000'
}

const seedUsers= async ()=>{

    for (const u of tableData )
    {
        await prisma.user.create({data:u})
    }
}

const seedExpert = async()=>{
    
    const salt = 10
    const hashedPassword = await bcrypt.hash(expert.password,salt)
    await prisma.expert.create({data:{email:expert.email,password:hashedPassword}})
}

export default function main()
{
    seedUsers()
    seedExpert()

}
main()