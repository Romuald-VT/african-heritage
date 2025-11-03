import { useState } from "react"
import { createPortal } from "react-dom"
import { FaPen } from "react-icons/fa"
import EditHeritageFormModal from "./EditHeritageFormModal"
import { Heritage } from "@/lib/assets/definitions"

interface EditHeritageFormModalProps{

    editableContent:Heritage,
    nameContent:string,
    reload:()=>void
}

const EditHeritageButton =({editableContent,nameContent,reload}:EditHeritageFormModalProps)=>{
    
    const [showModal,setShowModal] = useState(false)
    const handleReload = ()=>{
        if(reload) reload()
    }
    return(
          <>
              <button className={`h-9 px-3.5 py-0 border border-[solid]  rounded-lg bg-white active:bg-indigo-600 cursor-pointer [transition:transform_120ms_ease,box-shadow_120ms_ease,border-color_120ms_ease]
                hover:[box-shadow:0_1px_8px_rgba(0,0,0,0.08)]${editableContent.isVerified ? ' opacity-50 cursor-not-allowed' : ''} text-indigo-600 active:text-white`}
                onClick={() => setShowModal(true)} disabled={editableContent.isVerified}>
                <FaPen/>
              </button>
              {showModal && createPortal(<EditHeritageFormModal showModalMethod={() => { setShowModal(false) } } editableObject={editableContent} nameObject={nameContent} reload={handleReload}/>,document.body)}
          </>
    )
}

export default EditHeritageButton