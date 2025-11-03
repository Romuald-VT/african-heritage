
export default function LoadingAdminPage(){
    
    return(
         <main className=" min-h-screen grid place-items-center gap-4" 
            role="status" aria-live="polite" aria-label="Content is loading">
                <div className="w-14 h-14 border-[#e6e6e6] border-t-indigo-600 animate-[spin_0.8s_linear_infinite] rounded-[50%] border-4 border-solid motion-reduce:animate-none;" aria-hidden="true"></div>
                <p className="label">Loading…</p>
            </main>
    )
}