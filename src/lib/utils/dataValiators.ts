import z from 'zod'
import { Heritage, UserDTO,HeritageDTO } from '../assets/definitions';


export function userRegistrationValidator( data:UserDTO)
{
    const userRegistrationSchema = z.object({
        firstname:z.string().max(100,"taille maximale depassee").min(3,"le prenom doit avoir au moins 3 caracteres"),
        lastname: z.string().max(100,"taille maximale depassee").min(2,"le nom doit avoir au moins 2 caracteres"),
        email:z.email({pattern:z.regexes.html5Email}),
        password:z.string().regex(/[a-z0-9]/i).min(8,{error:'le mo de passe doit avoir au moins 8 caractres de long'})
    })

    return userRegistrationSchema.safeParse(data);
}

export function heritageRegistrationValidator(data:HeritageDTO)
{
    const heritageRegistrationSchema = z.object({
        heritageName: z.string().max(100),
        location: z.string().max(100),
        description: z.string().max(200),
        features:z.string().max(1000),
        currentValue:z.number()
    })

    return heritageRegistrationSchema.safeParse(data)
}