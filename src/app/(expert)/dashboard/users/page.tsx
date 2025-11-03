'use client'

import Pagination from "@/ui/Miscellanous/Pagination"
import { useState, useEffect, Suspense, useCallback, useMemo } from "react"
import ItemSelector from "@/ui/Miscellanous/ItemsSelector"
import UserTable from "@/ui/Miscellanous/UserTable"
import { User } from "@/lib/assets/definitions"
import { getAllUsers } from "@/lib/service/UserService"
import { toast } from "react-toastify"

const UserPage = () => {
    const [page, setPage] = useState(1)  // ✅ Commence à 1
    const [pageSize, setPageSize] = useState(5)
    const [dataLoaded, setDataLoaded] = useState<User[]>([])  // ✅ Première page
    
    // ✅ Mise à jour automatique quand page ou pageSize change

    const reload = useCallback(
        async () => {
            const users = await getAllUsers();
            if(users.error)
            {
                toast.error(users.error);
                return;
            }
            setDataLoaded(users.data as User[]);
            toast.success("Liste des utilisateurs mise à jour");
        }
        ,[]
    )
    useEffect(() => {
        reload();
    }, [reload]);

  const paginatedData = useMemo(() => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        return dataLoaded.slice(start, end)
    }, [dataLoaded, page, pageSize])

    const handlePagination = (newPage: number) => {
        setPage(newPage);  // ✅ Simplifié : l'useEffect gère le reste
    }

    const handlePageSizeChange = (newSize: number) => {
        setPageSize(newSize);
        setPage(1);  // ✅ Retour à la page 1 quand on change la taille
    }

    return (
        <Suspense fallback={<main className=" min-h-screen grid place-items-center gap-4" 
                    role="status" aria-live="polite" aria-label="Content is loading">
                        <div className="w-14 h-14 border-[#e6e6e6] border-t-indigo-600 animate-[spin_0.8s_linear_infinite] rounded-[50%] border-4 border-solid motion-reduce:animate-none;" aria-hidden="true"></div>
                        <p className="label">Loading…</p>
                    </main>}>
            <div className="max-w-[1300px] mx-auto my-0 p-6 relative top-[50px]">
                <ItemSelector 
                    paginationDataMethod={handlePageSizeChange} 
                    title={"Utilisateurs"}
                />
                <UserTable data={paginatedData} reloadMethod={reload}/>
                <Pagination 
                    total={dataLoaded.length} 
                    page={page} 
                    pageSize={pageSize} 
                    pageChangeMethod={handlePagination}
                />
            </div>
        </Suspense>
    )
}

export default UserPage