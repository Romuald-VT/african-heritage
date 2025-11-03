
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import AddHeritageButton from "../Miscellanous/ButtonUI"
import { handleLogout } from "@/lib/service/UserService"


interface UserHeaderProps{
    
    setSearch: Dispatch<SetStateAction<string>>
    search:string
    reload:()=>void
}

export default function UserHeader({search,setSearch,reload}:UserHeaderProps){
    
    const handleReload = () =>{
        if(reload)
        {
            reload()
        }
    }


    return(
        <header className="flex items-center justify-between p-6 border-b-[1px_solid_#e6e6e6]">
            <h1 className="m-0 text-[20px] font-semibold text-indigo-600">AFRICAN <span className="text-black">HERITAGE</span></h1>
            <div className="flex gap-3 items-center">
                <input id="searchInput" type="search" placeholder="entrez un patrimoine..." aria-label="Search users" 
                className="h-9 px-3 py-0 border border-[solid] rounded-lg bg-white outline-[none]"
                value={search}   
                onChange={(e:ChangeEvent<HTMLInputElement>)=>{setSearch(e.target.value)}}
                 />
                <AddHeritageButton reload={handleReload}/>
                <form action={handleLogout}>  
                    <button id="addUserBtn" className="h-9 px-3.5 py-0 border border-indigo-600 active:border-black  rounded-lg bg-white active:bg-indigo-600  active:text-white cursor-pointer [transition:transform_120ms_ease,box-shadow_120ms_ease,border-color_120ms_ease]
                    hover:[box-shadow:0_1px_8px_rgba(0,0,0,0.08)] "
                    >Deconnexion</button>
                </form> 
            </div>
       </header>
       
    )
}