import { useState } from "react"
import { createPortal } from "react-dom"
import VerifyButtonModal from "./VerifyButtonModal"
import { Heritage } from "@/lib/assets/definitions"


const VerifyButtonPortal = ({data,reloadMethod}:{data:Heritage, reloadMethod: () => void})=>{
    
    const [showModal,setShowModal] = useState(false)

    return(
        <>
           <button className={`flex  justify-center items-center h-4 ${data.isVerified?'text-green-600 bg-transparent border-green-600 font-medium':'text-red-500 bg-transparent border-red-600'} rounded-[8px] text-[14px] p-4 border`} onClick={()=>{setShowModal(true)}} disabled={data.isVerified}>
               {data.isVerified?"OK":"Verifier"}
           </button>
           {showModal && createPortal(<VerifyButtonModal data={data} closeModal={()=>{setShowModal(false)}} reloadMethod={reloadMethod}/>,document.body)}
        </>
    )
}

export default VerifyButtonPortal