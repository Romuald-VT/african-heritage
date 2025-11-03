import SideMenu from "@/ui/Miscellanous/SideMenu";
import { ToastContainer } from "react-toastify";


export default function DashboardLayout ({children}:Readonly<{children:React.ReactNode}>)
{

    return(
       <div className="relative top-[50px] grid grid-cols-[240px_1fr] min-h-screen">
          <SideMenu/>
            
          {children}
          <ToastContainer/>
       </div>
    )
}