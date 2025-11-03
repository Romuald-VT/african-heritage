import { useState } from "react"
import { createPortal } from "react-dom"
import { FaTrash } from "react-icons/fa"
import DeleteHeritageModal from "./deleteHeritageModal"


const DeleteModalButton = ({heritageName,reload}:{heritageName:string,reload:()=>void})=>{


     const[showModal,setShowModal] = useState(false)
     
            return(
                <>
                    <div onClick={()=>{setShowModal(true)}}
                    className="h-9 px-3.5 py-0 border border-[solid]  rounded-lg bg-white active:bg-indigo-600 cursor-pointer [transition:transform_120ms_ease,box-shadow_120ms_ease,border-color_120ms_ease]
                hover:[box-shadow:0_1px_8px_rgba(0,0,0,0.08)] text-indigo-600 active:text-white">
                        <FaTrash className="relative top-2.5"/>
                    </div>
                    {showModal && createPortal(<DeleteHeritageModal closeModal={()=>{setShowModal(false)}} heritageName={heritageName} reload={reload}/>,document.body)}
                </>
            ) 
        }
    

export default DeleteModalButton