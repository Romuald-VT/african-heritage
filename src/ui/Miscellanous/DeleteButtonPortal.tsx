import { useState } from "react"
import { createPortal } from "react-dom"
import { FaTrash } from "react-icons/fa"
import DeleteUserModal from "./DeleteUserModal"


const DeleteButton = ({email, reloadMethod}:{email:string, reloadMethod:()=>void}) => {
    
    const[showModal,setShowModal] = useState(false)
    return(
        <>
            <div onClick={()=>{setShowModal(true)}}
            className="block w-8 h-4 text-indigo-600 active:text-white rounded-[8px] text-[18px] p-4 bg-white active:bg-indigo-600 
            ">
                <FaTrash className="relative top-[-10px] left-[-10px]"/>
            </div>
            {showModal && createPortal(<DeleteUserModal closeModal={()=>{setShowModal(false)}} email={email} reloadMethod={reloadMethod}/>,document.body)}
        </>
    ) 
}

export default DeleteButton