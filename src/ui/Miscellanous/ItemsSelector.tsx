import { ChangeEvent } from "react"

interface ItemSelectorProps{
    paginationDataMethod:(data:number)=>void,
    title:string
}

const ItemSelector:React.FC<ItemSelectorProps> = ({paginationDataMethod,title}) => {

    return(
        <header className="flex items-center justify-between gap-[16px] mb-[16px]">
            <h1 className="text-[20px] m-0 font-semibold text-indigo-600">{title}</h1>
            <div className="flex items-center gap-[8px]">
                <label htmlFor="pageSize">Lignes Par Pages</label>
                <select id="pageSize" className="border-[1px] border-[solid]  rounded-[8px] px-[10px] py-[6px] bg-[#fff] text-[#111]"
                onChange={(e:ChangeEvent<HTMLSelectElement>)=>{paginationDataMethod(Number(e.target.value))}}>
                    <option value="5">5</option>
                    <option value="10" defaultChecked>10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </div>
        </header>
    )
}

export default ItemSelector