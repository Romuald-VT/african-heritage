import { useState } from "react"
import HeritageFormModal from "../Forms/HeritageForm"
import { createPortal } from "react-dom"



const AddHeritageButton = ({reload}:{reload:()=>void})=>{
     
  const [modal,setShowModal] = useState(false)

  return(
      <>
         <button id="addUserBtn" className="h-9 px-3.5 py-0 border border-[solid]  rounded-lg bg-white cursor-pointer [transition:transform_120ms_ease,box-shadow_120ms_ease,border-color_120ms_ease]
                hover:[box-shadow:0_1px_8px_rgba(0,0,0,0.08)]"
                onClick={()=>{setShowModal(true)}}
                >Ajouter Un Patrimoine
          </button>
          {
             modal && createPortal(<HeritageFormModal showModalMethod={()=>{setShowModal(false)}} onReload={reload}/>,document.body) 
          } 
      </>
  )
}

export default AddHeritageButton