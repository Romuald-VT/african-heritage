"use client"

import UserHeader from "@/ui/Header/UserHeader"
import Pagination from "@/ui/Miscellanous/Pagination"
import { useCallback, useEffect, useMemo, useState } from "react"
import ItemSelector from "@/ui/Miscellanous/ItemsSelector"
import UserPanelTable from "@/ui/Miscellanous/UserPanelTable"
import { fetchAllHeritages } from "@/lib/service/heritageService"
import { Heritage } from "@/lib/assets/definitions"

const PanelPage = () => {
    const [searchData, setSearchData] = useState('')
    const [allHeritages, setAllHeritages] = useState<Heritage[]>([]) // ✅ Toutes les données
    const [pageSize, setPageSize] = useState(5)
    const [page, setPage] = useState(1)
    
    // ✅ Charger les données une seule fois
    const reload = useCallback(async () => {
        const patrimoines = await fetchAllHeritages()
        if (patrimoines.error) {
            console.log(`Erreur lors du chargement des patrimoines ${patrimoines.error}`)
        } else {
            setAllHeritages(patrimoines.data as Heritage[])
        }
    }, [])
    
    useEffect(() => {
        reload()
    }, [reload])
    
    // ✅ Filtrer d'abord par recherche
    const filteredData = useMemo(() => {
        return allHeritages.filter(item => 
            item.heritageName.toLowerCase().includes(searchData.toLowerCase())
        )
    }, [searchData, allHeritages])

    // ✅ Puis paginer les résultats filtrés
    const paginatedData = useMemo(() => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        return filteredData.slice(start, end)
    }, [filteredData, page, pageSize])
    
    const handlePagination = (newPage: number) => {
        setPage(newPage)
    }

    const handlePageSizeChange = (newSize: number) => {
        setPageSize(newSize)
        setPage(1)
    }
    
    return (
        <div className="w-[1300px] mx-auto my-0 p-6 relative">
           <UserHeader search={searchData} setSearch={setSearchData} reload={reload}/>
           <ItemSelector title={"Patrimoines"} paginationDataMethod={handlePageSizeChange}/>
           <UserPanelTable data={paginatedData} reload={reload}/>
           <Pagination 
               total={filteredData.length} 
               page={page} 
               pageSize={pageSize} 
               pageChangeMethod={handlePagination}
           />
        </div>
    )
}

export default PanelPage