
export interface User{
    firstname:string,
    lastname:string,
    email:string,
    password:string
    heritages?: Array<Heritage>
    isLoggedIn:boolean
}

export interface UserDTO
{
    firstname:string,
    lastname:string,
    email:string,
    password:string
}

export interface Heritage{
    heritageName:string,
    description:string,
    location:string,
    features:string,
    currentValue :number,
    isVerified:boolean
}

export interface HeritageDTO
{
    heritageName:string,
    description:string,
    location:string,
    features:string,
    currentValue :number,
}

export interface Expert {
    email:string,
    password:string,
}

export interface ActionState {
    success: boolean;
    error?: string;
    data?:unknown  
}