import SideMenu from "@/ui/Miscellanous/SideMenu";



export default function DashboardLayout ({children}:Readonly<{children:React.ReactNode}>)
{

    return(
       <div className="relative top-[50px] grid grid-cols-[240px_1fr] min-h-screen">
          <SideMenu/>
          {children}
       </div>
    )
}