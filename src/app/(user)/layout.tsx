import ExpertHeader from "@/ui/admin/ExpertHeader";
import '../globals.css'

export default function ExpertLayout({children}:Readonly<{children:React.ReactNode}>)
{
    return(
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}