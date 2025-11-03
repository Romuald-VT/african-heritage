"use client"

import { handleExpertLogout } from "@/lib/service/expertService"
import Link from "next/link"
import { usePathname } from "next/navigation"


const SideMenu = ()=>{
     
    const pathname = usePathname()
    return(
            <aside className="border-r-indigo-900 p-5 border-r border-solid">
                    <div className="font-semibold mb-4">Dashboard</div>
                    <nav>
                        <Link className={`block w-full text-left border ${pathname == '/dashboard/users'?'border-white text-white bg-indigo-600':' border-indigo-600 text-indigo-600 bg-transparent'} cursor-pointer mx-0 my-2 px-3 py-2.5 rounded-lg border-solid hover:-translate-y-px transition-[transform,background] duration-120 ease-in-out`} data-route="users" href="/dashboard/users">Utilisateurs</Link>
                        <Link className={`block w-full text-left border ${pathname == '/dashboard/heritages'?'border-white text-white bg-indigo-600':' border-indigo-600 text-indigo-600 bg-transparent'} cursor-pointer mx-0 my-2 px-3 py-2.5 rounded-lg border-solid hover:-translate-y-px  transition-[transform,background] duration-120 ease-in-out`} data-route="heritages" href='/dashboard/heritages'>Patrimoines</Link>
                    </nav>
                    <div className="relative top-40 ">
                        <div className="w-full h-10 rounded-[10px] bg-indigo-600 active:bg-indigo-900 text-white text-[16px] font-normal flex justify-center items-center"
                        onClick={handleExpertLogout}>
                            <span>Deconnexion</span>
                        </div>
                    </div>
            </aside>
        )
}

export default SideMenu